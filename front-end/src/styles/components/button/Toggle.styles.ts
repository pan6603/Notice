import styled from "styled-components";

export const ToggleContainer = styled.div<{ $checked: boolean }>`
    max-width: 51px;
    width: 100%;
    height: 31px;
    background: ${({ $checked }) => ($checked ? "#60D066" : "#D1D5DB")};
    display: flex;
    align-items: center;
    margin-right: 21px;
    border-radius: 50px;
`

export const SwitchButton = styled.div<{ $checked: boolean }>`
    max-width: 27px;
    width: 100%;
    height: 27px;
    border-radius: 50px;
    position: relative;
    transition: background 0.2s;

    &::after {
        content: "";
        top: 0px;
        left: 0px;
        width: 27px;
        height: 27px;
        background: #FFFFFF;
        border-radius: 50%;
        position: absolute;
        transform: translateX(${({ $checked }) => ($checked ? "24px" : "0")});
        transition: transform 0.2s;
    }
`