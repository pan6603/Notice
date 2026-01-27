import { NoticeWritePageContainer } from "../../styles/pages/notice/NoticeWritePage.styles"
import TopNavigationBar from "../../components/header/TopNavigationBar";
import RegisterNotice from "../../components/notice/RegisterNotice";

export default function NoticeWritePage() {
    return (
        <>
            <NoticeWritePageContainer>
                <TopNavigationBar />
                <RegisterNotice />
            </NoticeWritePageContainer>
        </>
    )
}