import { 
    RegisterNoticeContainer,
    PageHeading,
    FormHelperTextContainer,
    RegisterNoticeTitle,
    RegisterNoticeSubTitle,
    FormHelperText,
    FormHelperLink
} from "../../styles/components/notice/RegisterNotice.styles"
import RegisterForm from "../form/RegisterForm"

export default function RegisterNotice() {
    return (
        <>
            <RegisterNoticeContainer>
                <PageHeading>
                    <RegisterNoticeTitle>Register Notice</RegisterNoticeTitle>
                    <RegisterNoticeSubTitle>Create and publish a new announcement for the community.</RegisterNoticeSubTitle>
                </PageHeading>

                <RegisterForm />

                <FormHelperTextContainer>
                    <FormHelperText>
                        Notices will be published immediately to the member portal upon registration. Need help?
                    </FormHelperText>
                    <FormHelperLink to="">Read the publishing guide</FormHelperLink>
                </FormHelperTextContainer>
            </RegisterNoticeContainer>
        </>
    )
}