import styled from "styled-components";
import { OpenButton } from "./OpenButton";
import { ToDayTime } from "./ToDayTime";
import { Notice } from "./Notice";
import { LoginUserInfo } from "./LoginUserInfo";

export const MainHeader = () => {

    const HeaderContainer = styled.div`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background-color: #eeeeee;
        color: black;
    `;

    return (
        <HeaderContainer>
            <OpenButton />
            <ToDayTime />
            <Notice />
            <LoginUserInfo />
        </HeaderContainer>
    )
}
