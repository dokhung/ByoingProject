import styled, { keyframes } from "styled-components";
import {Link} from "react-router-dom";
import {LoginButton} from "./LoginComponents/LoginButton";
import {useState} from "react";
const StyleDiv = styled.div`
    background: darkgray;
    height: 100vh;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

// 회전 애니메이션 정의
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// 회전 애니메이션을 적용한 스타일드 컴포넌트
const TitleDiv = styled.div`
    position: relative;
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
    border: 1px solid #000000;
    border-radius: 10px;
    background-color: aliceblue;
    /* 텍스트가 넘치는 부분을 숨김 */
    overflow: hidden;
    &:before {
        content: '';
        position: absolute;
        top: -1px;
        left: -1px;
        right: -1px;
        bottom: -1px;
        border: 1px solid #000000;
        border-radius: 10px;
        /* 회전 애니메이션 적용 */
        animation: ${rotateAnimation} 5s linear infinite;
    }
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



export const Login = () => {
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");
    const handleInputId = (e : any):void => {
        console.log("id : "+inputId);
        setInputId(e.target.value);
    };

    const handleInputPw = (e : any) :void => {
        console.log("pw : "+inputPw);
        setInputPw(e.target.value);
    };
    return (
        <StyleDiv>
            <TitleDiv>Byoing</TitleDiv>
            <Label/>社員番号
            <StyleInput placeholder="Enter ID"
             type="id"
             name="input-id"
             value={inputId}
             onChange={handleInputId}
        />
            <Label/>パスワード
            <StyleInput placeholder="Enter Password"
            type="password"
            name="input_pw"
            value={inputPw}
            onChange={handleInputPw}
        />
            <LoginButton/>
        </StyleDiv>
    );
};

