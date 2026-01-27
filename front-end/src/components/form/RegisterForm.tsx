
import { useState } from "react"
import { 
    FormContainer,
    FormRow,
    PinToTopAction,
    EditorArea,
    FileUpload,
    FormActions,
    FormSection,
    FileUploadLabel,
    FileUploadBorder,
    DropzoneContent,
    UploadHelperText,
    FileUploadIconContainer,
    FileUploadIcon,
    EditorAreaLabel,
    EditorAreaBorder,
    EditableTextArea,
    SettingOption,
    PinToTopToggleText,
    OptionDescription,
    NoticeTitle,
    NoticeTitleLabel,
    NoticeTitleInput
} from "../../styles/components/form/RegisterForm.styles"
import CancelBtn from "../button/CancelButton"
import RegisterNoticeBtn from "../button/RegisterNoticeButton"
import fileUploadIcon from "../../assets/icons/flie_upload.png"
import ToolBar from "../button/ToolBar"
import Toggle from "../button/Toggle"
import Category from "../category/Category"

export default function RegisterForm() {
    const [enabled, setEnabled] = useState(false);

    return (
        <>
            <FormContainer>
                <FormSection>

                    <FormRow>
                        <Category />
                        <NoticeTitle>
                            <NoticeTitleLabel>Notice Title</NoticeTitleLabel>
                            <NoticeTitleInput placeholder="Enter the notice title..."/>
                        </NoticeTitle>
                    </FormRow>

                    <PinToTopAction>
                        <SettingOption>
                            <PinToTopToggleText>Pin to Top</PinToTopToggleText>
                            <OptionDescription>
                                Mark this notice as important to keep it at the top of the board.
                            </OptionDescription>
                        </SettingOption>

                        <Toggle 
                            checked={enabled}
                            onChange={() => setEnabled(prev => !prev)}
                        />
                    </PinToTopAction>

                    <EditorArea>
                        <EditorAreaLabel>Content</EditorAreaLabel>
                        <EditorAreaBorder>
                            <ToolBar />
                            <EditableTextArea></EditableTextArea>
                        </EditorAreaBorder>
                    </EditorArea>

                    <FileUpload>
                        <FileUploadLabel>Attachments</FileUploadLabel>
                        <FileUploadBorder>
                            <FileUploadIconContainer>
                                <FileUploadIcon src={fileUploadIcon} />
                            </FileUploadIconContainer>
                            <DropzoneContent>Click to upload or drag and drop</DropzoneContent>
                            <UploadHelperText>PDF, JPG, PNG or DOCX (Max 10MB)</UploadHelperText>
                        </FileUploadBorder>
                    </FileUpload>
                </FormSection>

                <FormActions>
                    <CancelBtn />
                    <RegisterNoticeBtn />
                </FormActions>

            </FormContainer>
        </>
    )
}