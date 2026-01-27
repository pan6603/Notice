import { 
    BrandContainer,
    BrandName,
    BrandLogo
} from "../../styles/components/header/Brand.styles"
import brandLogo from "../../assets/logos/brand-logo.png"


export default function Brand() {
    return (
        <>
            <BrandContainer>   
                <BrandLogo src={brandLogo} /> 
                <BrandName>Portal Admin</BrandName>
            </BrandContainer>
        </>
    )
}