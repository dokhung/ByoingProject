import styled from "styled-components";
import {Link} from "react-router-dom";
const StyleDiv = styled.div`
    background: darkgray;
    height: 100vh;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const TitleDiv = styled.div`
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 50px;
    font-size: 40px;
    box-sizing: border-box;
    width: 201px;
    height: 200px;
    background: linear-gradient(0deg, #FFFFFF, #FFFFFF), #FFFFFF;
    border: 1px solid #000000;
    border-radius: 10px;
`;

const Label = styled.div`
    display: flex;
    align-items: flex-start;
    width: 250px;
    text-align: center;
    margin-bottom: 5px;
    margin-right: 20px;
`;

const StyleInput = styled.input`
    background: white;
    font-size: 20px;
    border-radius: 5px;
    width: 150px;
`;

const StyleLoginButton = styled.button`
     background: linear-gradient(0deg, #FFFFFF, #FFFFFF), #FFFFFF;
     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
     border-radius: 10px;
    width: 83px;
    height: 31px;
`;

export const Login = () => {
    const handleSubmit = () => {
    };
    return (
        <StyleDiv>
            <TitleDiv>Byoing</TitleDiv>
            <form onSubmit={handleSubmit}>
            <Label>
                社員番号
                <StyleInput placeholder="Enter ID" />
            </Label>
            <Label>
                パスワード
                <StyleInput placeholder="Enter Password" type="password" />
            </Label>
            </form>
            <StyleLoginButton>
                <Link to="/Main">Login</Link>
            </StyleLoginButton>
        </StyleDiv>
    );
};

