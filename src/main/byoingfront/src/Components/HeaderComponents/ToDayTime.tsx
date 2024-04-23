import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const ToDayTime = () => {
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

    const DateStyle = styled.div`
        font-weight: bold;
        color: black;
        font-size: 20px;
    `;

    const TimeStyle = styled.div`
        font-weight: bold;
        color: black;
        font-size: 30px;
    `;

    const getCurrentDateTime = () => {
        const now = new Date();
        const date = now.toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        });
        const time = now.toLocaleTimeString("en-US", {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
        });
        return { date, time };
    };

    const [currentTime, setCurrentTime] = useState(getCurrentDateTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(getCurrentDateTime());
        }, 1000); // 1초마다 업데이트
        return () => clearInterval(interval);
    }, []);

    return (
        <ButtonStyle>
            <DateStyle>
                {currentTime.date}
            </DateStyle>
            <TimeStyle>
                {currentTime.time}
            </TimeStyle>
        </ButtonStyle>
    );
};
