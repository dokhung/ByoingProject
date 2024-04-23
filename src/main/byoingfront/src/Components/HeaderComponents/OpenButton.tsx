import React, { useState } from "react";
import styled from "styled-components";

export const OpenButton : React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const ButtonStyle = styled.button`
        cursor: pointer;
        width: 200px;
        height: 80px;
        box-sizing: border-box;
        align-content: center;
        border: 1px solid #000000;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FFFFFF;
    `;

    const FontStyle = styled.div<{ isOpen: boolean }>`
        font-weight: bold;
        font-size: 30px;
        color: ${(props) => (props.isOpen ? "blue" : "red")};
    `;

    const toggleOpenState = (): void => {
        setIsOpen(!isOpen); // 현재 상태의 반대로 변경
    };

    const getButtonText = (): string => {
        return isOpen ? "オープン" : "クーロズ";
    };

    return (
        <ButtonStyle onClick={toggleOpenState}>
            <FontStyle isOpen={isOpen}>{getButtonText()}</FontStyle>
        </ButtonStyle>
    );
};

