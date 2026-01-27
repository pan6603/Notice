import { Link } from "react-router-dom";
import styled from "styled-components";


export const CancelBtn = styled(Link)`
    max-width: 98px;
    width: 100%;
    height: 42px;
    background: #FFFFFF;
    border: 1px solid #DBDFE6;
    color: #111318;
    font-size: 14px;
    font-weight: bold;
    position: absolute;
    left: 550px;
    top: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;

    &:hover {
        color: #111318;
        border: 1px solid #DBDFE6;
    }
`