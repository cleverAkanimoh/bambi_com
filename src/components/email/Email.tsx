"use server";
import { Resend } from 'resend';
import React from 'react';
import ContactFormEmail from './contact-form-email';

// Ensure you have the correct type for process.env.RESEND_API_KEY
if (!process.env.NEXT_PUBLIC_RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not defined');
}

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

// interface FormDataProps {
//     get: (key: string) => string | null;
//     message: string
// }

export const sendEmail = async (formData: FormData) => {
    const message = formData.get("message") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const senderName = formData.get("name") as string

    if (!message || !email || !subject) {
        throw new Error('Invalid form data');
    }

    await resend.emails.send({
        from: 'Bambi Contact Form <onboarding@resend.dev>',
        to: 'info@teenscancode.com.ng',
        subject: subject,
        reply_to: email,
        react: <ContactFormEmail message={message} sendersEmail={email} senderName={senderName} />
    });
}
