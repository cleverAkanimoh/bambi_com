import {
    Head,
    Heading,
    Body,
    Hr,
    Preview,
    Section,
    Text,
    Container,
    Html,
    
} from "@react-email/components"
import {Tailwind} from "@react-email/tailwind"

interface ContactFormEmailProps{
message: string
sendersEmail: string
senderName: string
}

export default function ContactFormEmail ({message, sendersEmail, senderName}: ContactFormEmailProps){
return <Html>
    <Head />
    <Preview>New Message from your {senderName} at Bambi.com</Preview>
    <Tailwind>
    <Body className="bg-gray-100 text-black">
        <Container>
            <Section className="bg-white border my-10 px-10 py-4 rounded-md">
                <Heading className="leading-tight">You received the following message from the contact form on Bambi.com</Heading>
                <Text>{message}</Text>
                <Hr/>
                <Text>You got this email from: {sendersEmail}</Text>
            </Section>
        </Container>
    </Body>
    </Tailwind>
</Html>
}