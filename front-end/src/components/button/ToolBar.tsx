import { 
    ToolBarContainer,
    ToolBarItem,
    BoldIcon,
    ItalicIcon,
    UnderlineIcon,
    BulletedListIcon,
    NumberedList,
    InsertLink,
    ImageUpload
} from "../../styles/components/button/ToolBar.styles"
import bold from "../../assets/icons/bold.png"
import italic from "../../assets/icons/italic.png"
import underline from "../../assets/icons/under_line.png"
import billetedList from "../../assets/icons/bulleted_list.png"
import numberedList from "../../assets/icons/numbered_list.png"
import insertLink from "../../assets/icons/insert_link.png"
import imageUpload from "../../assets/icons/image_upload.png"

export default function ToolBar() {
    return (
        <>
            <ToolBarContainer>
                <ToolBarItem>
                    <BoldIcon src={bold} />
                </ToolBarItem>

                <ToolBarItem>
                    <ItalicIcon src={italic} />
                </ToolBarItem>

                <ToolBarItem>
                    <UnderlineIcon src={underline} />
                </ToolBarItem>

                <ToolBarItem>
                    <BulletedListIcon src={billetedList} />
                </ToolBarItem>

                <ToolBarItem>
                    <NumberedList src={numberedList} />
                </ToolBarItem>

                <ToolBarItem>
                    <InsertLink src={insertLink} />
                </ToolBarItem>

                <ToolBarItem>   
                    <ImageUpload src={imageUpload} />
                </ToolBarItem>
            </ToolBarContainer>
        </>
    )
} 