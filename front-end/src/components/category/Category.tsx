import { 
    CategoryContainer,
    CategoryLabel,
    Options,
    OptionsWrapper
} from "../../styles/components/category/Category.styles"


export default function Category() {
    return (
        <>
            <CategoryContainer>
                <CategoryLabel>Category</CategoryLabel>
                <Options>
                    <OptionsWrapper>
                        <option>Select Category</option>
                    </OptionsWrapper>
                </Options>
            </CategoryContainer>
        </>
    )
}