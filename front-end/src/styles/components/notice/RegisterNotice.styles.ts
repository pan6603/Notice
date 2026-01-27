import { Link } from "react-router-dom";
import styled from "styled-components";


export const RegisterNoticeContainer = styled.div`
    max-width: 960px;
    width: 100%;
    height: 1234px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const PageHeading = styled.div`
    max-width: 928px;
    width: 100%;
    height: 81px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 65px;
`

export const RegisterNoticeTitle = styled.h1`
    max-width: 928px;
    width: 100%;
    height: 45px;
    font-size: 36px;
    font-weight: bold;
    color: #111318;
`

export const RegisterNoticeSubTitle = styled.span`
    max-width: 928px;
    width: 100%;
    height: 24px;
    color: #616F89;
    font-size: 16px;
    font-weight: 400px;
`


export const FormHelperTextContainer = styled.div`
    max-width: 928px;
    width: 100%;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FormHelperText = styled.p`
    max-width: 512px;
    width: 100%;
    height: 16px;
    font-size: 12px;
    font-weight: 400;
    color: #616F89;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const FormHelperLink = styled(Link)`
    width: max-content;
    height: max-content;
    color: #135BEC;
    font-size: 12px;
    margin-left: 8px;
`