import React, { useState } from "react";
import styled from "styled-components";
import { MainHeader } from "../HeaderComponents/MainHeader";
import { NavigationBar } from "../Navigation/NavigationBar";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

export const Order = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [open, setOpen] = useState(false);
    const [orderInfo, setOrderInfo] = useState({ productName: '', quantity: 0 });

    const handleSelectionChange = (newSelection : any) => {
        setSelectedRows(newSelection.rows);
    };

    const handleOrderClick = () => {
        setOpen(true);
    };

    const handleOrderClose = () => {
        setOpen(false);
    };

    const handleOrderSubmit = () => {
        // 여기서 발주 정보를 처리하고, 필요에 따라 선택된 행의 정보를 사용할 수 있습니다.
        console.log("Ordered:", orderInfo);
        setOpen(false);
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'Product', width: 130 },
        { field: 'quantity', headerName: 'Quantity', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
    ];

    const rows = [
        { id: 1, product: 'Product 1', quantity: 5, price: 10 },
        { id: 2, product: 'Product 2', quantity: 3, price: 15 },
        { id: 3, product: 'Product 3', quantity: 8, price: 20 },
    ];

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

    return(
        <PageContainer>
            <MainHeader />
            <MainContent>
                <SideBar>
                    <NavigationBar />
                </SideBar>
                <Content>
                    <div style={{height: 400, width: '100%'}}>
                        <Button style={{alignItems: "end"}} variant="contained" onClick={handleOrderClick}>Order</Button>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                        />
                    </div>

                    <Dialog open={open} onClose={handleOrderClose}>
                        <DialogTitle>Place Order</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="productName"
                                label="Product Name"
                                type="text"
                                fullWidth
                                value={orderInfo.productName}
                                onChange={(e) => setOrderInfo({ ...orderInfo, productName: e.target.value })}
                            />
                            <TextField
                                margin="dense"
                                id="quantity"
                                label="Quantity"
                                type="number"
                                fullWidth
                                // value={orderInfo.quantity}
                                onChange={(e) => setOrderInfo(
                                    { ...orderInfo })}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleOrderClose}>Cancel</Button>
                            <Button onClick={handleOrderSubmit}>Order</Button>
                        </DialogActions>
                    </Dialog>
                </Content>
            </MainContent>
        </PageContainer>
    )
}
