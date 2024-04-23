import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import {OpenButton} from "../HeaderComponents/OpenButton";


const NavBar = styled.nav`
    position: absolute;
    width: 175px;
    height: 882px;
    background: #EEEEEE;
`;

const SideNav = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const SideTitle = styled.div`
    border: 1px solid #000000;
    border-radius: 10px;
    align-content: center;
    text-align: center;
    font-size: 30px;
    background-color: white;
`;
const SideMenu = styled.button`
    text-align: right;
    font-weight: bold;
    font-size: 10px;
    background-color: white;
`;

export const NavigationBar: React.FC = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/Reservation");
    };
    const handleOrder = () => {
        navigate("/Order");
    };
    const [openDialog, setOpenDialog] = useState(false);
    const [yesopenDialog, setYesopenDialog] = useState(false);
    const handleYesClick = () => {
        setYesopenDialog(true)
        setOpenDialog(false);
    }

    const handleYesClose = () => {
        setYesopenDialog(false)
    }
    const handleAddClick = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };
    return (
        <NavBar>
            <SideNav>
                <SideTitle>営業</SideTitle>
                <SideMenu onClick={handleClick}>予約登録</SideMenu>
                <SideMenu onClick={handleOrder}>発注</SideMenu>
                <SideMenu onClick={handleAddClick}>オープン</SideMenu>
            </SideNav>
            <SideNav>
                <SideTitle>レジ</SideTitle>
                <SideMenu>先日売り上げ</SideMenu>
                <SideMenu>備品販売</SideMenu>
                <SideMenu>レジ締め</SideMenu>
            </SideNav>
            <SideNav>
                <SideTitle>人材</SideTitle>
                <SideMenu>増員</SideMenu>
                <SideMenu>シフト</SideMenu>
                <SideMenu>バイト管理</SideMenu>
            </SideNav>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>オープン？</DialogTitle>
                <DialogContent>オープンしますか?</DialogContent>
                <DialogActions>
                    <Button onClick={handleYesClick}>はい</Button>
                    <Button onClick={handleCloseDialog} variant="contained" color="primary">
                        やめる
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog open={yesopenDialog} onClose={handleCloseDialog}>
                <DialogTitle>変更</DialogTitle>
                <DialogContent>オープンしました。</DialogContent>
                <DialogActions>
                    <Button onClick={handleYesClose}>OK</Button>
                </DialogActions>
            </Dialog>
        </NavBar>
    );
};
