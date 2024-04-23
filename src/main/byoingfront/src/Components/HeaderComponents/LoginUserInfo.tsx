import styled from "styled-components";
import {Link} from "react-router-dom";

export const LoginUserInfo = () => {
    const ButtonStyle = styled.button`
        cursor: pointer;
        width: 200px;
        height: 80px;
        box-sizing: border-box;
        align-content: center;
        border: 1px solid #000000;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #FFFFFF;
    `;

    const NumberInfo = styled.div`
        font-weight: bold;
        color: black;
        font-size: 20px;
    `;

    const NameInfo = styled.div`
        font-weight: bold;
        color: black;
        font-size: 20px;
    `;
    const LogOutButton = styled.button`
        font-weight: bold;
        color: black;
        font-size: 15px;
    `;



    return(

        <ButtonStyle>
            <NumberInfo>社員番号：１２３４</NumberInfo>
            <NameInfo>名前：何々さん</NameInfo>
            <LogOutButton>
                <Link to="/">Logout</Link>
            </LogOutButton>
        </ButtonStyle>
    )
}