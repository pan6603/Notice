import { 
    TopNavigationBarContainer,
    TopNavigationBarWrapper,
    TopNavigationBarNav,
    NavItem
} from "../../styles/components/header/TopNavigationBar.styles"
import Brand from "../header/Brand"

export default function TopNavigationBar() {
    return (
        <>
            <TopNavigationBarContainer>
                <TopNavigationBarWrapper>
                    <Brand />
                    <TopNavigationBarNav>
                        <NavItem to="">Dashboard</NavItem>
                        <NavItem to="">Notices</NavItem>
                        <NavItem to="">Members</NavItem>
                        <NavItem to="">Settings</NavItem>
                    </TopNavigationBarNav>
                </TopNavigationBarWrapper>
            </TopNavigationBarContainer>
        </>
    )
}