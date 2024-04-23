import React, { useState } from "react";
import styled from "styled-components";
import { MainHeader } from "../HeaderComponents/MainHeader";
import { NavigationBar } from "../Navigation/NavigationBar";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const MainContent = styled.div`
    flex: 1;
    display: flex;
`;

const SideBar = styled.div`
    background: lightgray;
    width: 175px;
`;

const Content = styled.div`
    flex: 1;
`;

export const Reservation = () => {
    const [rows, setRows] = useState([
        {
            id: 1,
            name: "佐藤ヒナ",
            phone: "0130-0000-0000",
            hairstyle: "styleName",
            hairdresser: "山田龍介",
            date: "2024 04 20",
        },
    ]);

    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", width: 80, type: "number", editable: true },
        { field: "name", headerName: "Name", width: 200, type: "string" },
        { field: "phone", headerName: "Phone", width: 200, type: "number" },
        { field: "hairstyle", headerName: "Hairstyle", type: "string", width: 200 },
        { field: "hairdresser", headerName: "Hairdresser", type: "string", width: 200 },
        {
            field: "input",
            headerName: "Actions",
            type: "custom",
            width: 110,
            renderCell: (params) => <button onClick={() => handleRemoveClick({id: params.row.id})}>Remove</button>,
        },
    ];

    const [openDialog, setOpenDialog] = useState(false);
    const [openRemove, setOpenRemove] = useState(false);
    const [selectedRowId, setSelectedRowId] = useState(null);

    const handleAddClick = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleRemoveClick = ({id}: { id: any }) => {
        setSelectedRowId(id);
        setOpenRemove(true);
    };

    const handleCloseRemove = () => {
        setOpenRemove(false);
    };

    const handleConfirmRemove = () => {
        setRows(rows.filter((row) => row.id !== selectedRowId));
        setOpenRemove(false);
    };

    return (
        <PageContainer>
            <MainHeader />
            <MainContent>
                <SideBar>
                    <NavigationBar />
                </SideBar>
                <Content>
                    <div style={{ textAlign: "right", margin: "20px" }}>
                        <button style={{ fontSize: "20px" }} onClick={handleAddClick}>
                            増加
                        </button>
                    </div>
                    <div style={{ height: 400, width: "100%" }}>
                        <DataGrid rows={rows} columns={columns} pageSizeOptions={[5, 10]} />
                    </div>
                </Content>
            </MainContent>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>新しい予約登録</DialogTitle>
                <DialogContent>
                    {/* Content of the dialog */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>キャンセル</Button>
                    <Button onClick={handleCloseDialog} variant="contained" color="primary">
                        確認
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog open={openRemove} onClose={handleCloseRemove}>
                <DialogTitle>削除しますか？</DialogTitle>
                <DialogContent>予約を削除しますか？</DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseRemove}>キャンセル</Button>
                    <Button onClick={handleConfirmRemove} variant="contained" color="primary">
                        Remove
                    </Button>
                </DialogActions>
            </Dialog>
        </PageContainer>
    );
};
