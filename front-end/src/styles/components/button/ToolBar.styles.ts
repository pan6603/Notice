import styled from "styled-components";

export const ToolBarContainer = styled.div`
    max-width: 860px;
    width: 100%;
    height: 53px;
    background: #F9FAFB;
    border: 1px solid #DBDFE6;
    position: relative;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

`

export const ToolBarItem = styled.div`
    max-width: 36px;
    width: 100%;
    height: 36px;
    color: #374151;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 8px;
    top: 8px;

    &:nth-child(2) {
        left: 48px; 
    }

    &:nth-child(3) {
        left: 88px; 
    }

    &:nth-child(4) {
        left: 141px; 
    }

    &:nth-child(5) {
        left: 181px; 
    }

    &:nth-child(6) {
        left: 234px; 
    }

    &:nth-child(7) {
        left: 274px; 
    }
`

export const BoldIcon = styled.img`
    max-width: 12px;
    width: 100%;
    height: 14px;
`

export const ItalicIcon = styled.img`
    max-width: 12px;
    width: 100%;
    height: 14px;
`

export const UnderlineIcon = styled.img`
    max-width: 12px;
    width: 100%;
    height: 14px;
`


export const BulletedListIcon = styled.img`
    max-width: 12px;
    width: 100%;
    height: 14px;
`

export const NumberedList = styled.img`
    max-width: 12px;
    width: 100%;
    height: 14px;
`

export const InsertLink = styled.img`
    max-width: 14px;
    width: 100%;
    height: 14px;
`

export const ImageUpload = styled.img`
    max-width: 12px;
    width: 100%;
    height: 14px;
`




