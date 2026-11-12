import 'server-only';

import { Resend } from 'resend';

const recipient = 'santosbuhawie28@gmail.com';

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return entities[character];
  });
}

export async function sendContactEmail(clientEmail: string, clientSubject: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured.');
    return { error: 'Email is temporarily unavailable. Please reach out directly.' };
  }

  // Create the SDK only when a real contact request is submitted. Importing this
  // module must never send mail or consume the account quota.
  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from: 'BuwieSit Contact Form <onboarding@resend.dev>',
    to: recipient,
    replyTo: clientEmail,
    subject: `Portfolio inquiry: ${clientSubject}`,
    text: `New contact form message\n\nFrom: ${clientEmail}\nSubject: ${clientSubject}`,
    html: `<h3>New Contact Form Message</h3><p><strong>From:</strong> ${escapeHtml(clientEmail)}</p><p><strong>Subject:</strong> ${escapeHtml(clientSubject)}</p>`,
  });

  if (error) {
    console.error('Resend rejected contact email:', error);
    return { error: 'Failed to send message. Please try again later.' };
  }

  return { success: Boolean(data?.id) };
}
