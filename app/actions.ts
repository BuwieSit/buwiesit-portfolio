'use server';

import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);

export async function handleSendEmail(clientEmail: string, clientSubject: string) {
  if (!clientEmail || !clientSubject) {
    return { error: 'Both email and subject are required.' };
  }

  try {
    await resend.emails.send({
      from: 'BuwieSit Client <onboarding@resend.dev>', 
      to: 'santosbuhawie28@gmail.com',    
      replyTo: clientEmail,
      subject: clientSubject,
      html: `
        <h3>New Contact Form Message</h3>
        <p><strong>From:</strong> ${clientEmail}</p>
        <p><strong>Subject:</strong> ${clientSubject}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { error: 'Failed to send message. Please try again.' };
  }
}