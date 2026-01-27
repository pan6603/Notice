import { Link } from "react-router-dom";
import styled from "styled-components";


export const TopNavigationBarContainer = styled.header`
    max-width: 1440px;
    width: 100%;
    height: 65px;
    background: #FFFFFF;
    border-bottom: 1px solid #DBDFE6;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TopNavigationBarWrapper = styled.div`
    max-width: 1100px;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const TopNavigationBarNav = styled.nav`
    max-width: 355px;
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NavItem = styled(Link)`
    width: max-content;
    height: max-content;
    color: #111318;
    font-size: 14px;
    font-weight: 400;
`

