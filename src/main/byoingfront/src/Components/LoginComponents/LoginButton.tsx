import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";

export const LoginButton = () => {
    const StyleLoginButton = styled.button`
        background: linear-gradient(0deg, #FFFFFF, #FFFFFF), #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        margin-top: 10px;
        width: 90px;
        height: 40px;
        color: black;
        font-size: 20px;
    `;

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/Main");
    };

    return(
        <StyleLoginButton onClick={handleClick}>Login</StyleLoginButton>


    )
}