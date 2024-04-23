import React, { useState } from "react";
import styled from "styled-components";



export const Notice = () => {
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

    const NoticeText = styled.div<{ hasNotice: boolean }>`
    color: ${(props) => (props.hasNotice ? "red" : "blue")};
    cursor: pointer;
    font-weight: bold;
        font-size: 25px;
`;
    const [hasNotice, setHasNotice] = useState(false);

    const toggleNotice = () => {
        setHasNotice((prevHasNotice) => !prevHasNotice);
    };

    return (
        <ButtonStyle onClick={toggleNotice}>
        <NoticeText hasNotice={hasNotice}>
            {hasNotice ? "お知らせあり" : "お知らせ無し"}
        </NoticeText>
        </ButtonStyle>
    );
};
