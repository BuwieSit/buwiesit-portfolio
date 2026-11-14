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
  const safeEmail = escapeHtml(clientEmail);
  const safeSubject = escapeHtml(clientSubject);
  const { data, error } = await resend.emails.send({
    from: 'BuwieSit Contact Form <onboarding@resend.dev>',
    to: recipient,
    replyTo: clientEmail,
    subject: `Portfolio inquiry: ${clientSubject}`,
    text: [
      'NEW PORTFOLIO INQUIRY',
      'BuwieSit · Portfolio contact form',
      '',
      'SENDER',
      clientEmail,
      '',
      'PROJECT SUMMARY',
      clientSubject,
      '',
      'Reply to this email to contact the sender.',
    ].join('\n'),
    html: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <title>New portfolio inquiry</title>
  </head>
  <body style="margin:0; padding:0; background-color:#EFEAE2; color:#2A1F14; font-family:Arial, Helvetica, sans-serif;">
    <div style="display:none; max-height:0; overflow:hidden; opacity:0; color:transparent;">A new portfolio inquiry from ${safeEmail}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#EFEAE2;">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="width:100%; max-width:600px; background-color:#FFFFFF; border:1px solid #CEC9C5;">
            <tr>
              <td style="padding:28px 32px; background-color:#2A1F14; border-bottom:4px solid #8B6F4E;">
                <p style="margin:0 0 12px; color:#C9B896; font-size:11px; line-height:1.4; font-weight:bold; letter-spacing:2px; text-transform:uppercase;">BUWIESIT &nbsp; / &nbsp; PORTFOLIO</p>
                <h1 style="margin:0; color:#EFEAE2; font-family:Georgia, 'Times New Roman', serif; font-size:28px; line-height:1.2; font-weight:normal;">A new inquiry has arrived</h1>
                <p style="margin:10px 0 0; color:#C9B896; font-size:13px; line-height:1.6;">Someone got in touch through your portfolio.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 12px;">
                <p style="margin:0 0 8px; color:#8B6F4E; font-size:11px; line-height:1.4; font-weight:bold; letter-spacing:1.5px; text-transform:uppercase;">From</p>
                <p style="margin:0; font-size:16px; line-height:1.6; overflow-wrap:anywhere;"><a href="mailto:${safeEmail}" style="color:#2A1F14; text-decoration:underline; text-decoration-color:#8B6F4E;">${safeEmail}</a></p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px 30px;">
                <p style="margin:0 0 8px; color:#8B6F4E; font-size:11px; line-height:1.4; font-weight:bold; letter-spacing:1.5px; text-transform:uppercase;">Project summary</p>
                <div style="padding:18px 20px; background-color:#EFEAE2; border-left:3px solid #8B6F4E;">
                  <p style="margin:0; color:#2A1F14; font-size:15px; line-height:1.7; overflow-wrap:anywhere;">${safeSubject}</p>
                </div>
                <p style="margin:22px 0 0; font-size:13px; line-height:1.6; color:#594A3A;">You can reply directly to this email to reach the sender.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px; background-color:#F7F4EF; border-top:1px solid #CEC9C5;">
                <p style="margin:0; color:#6D6257; font-size:11px; line-height:1.6;">Sent from the contact form on your portfolio.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`,
  });

  if (error) {
    console.error('Resend rejected contact email:', error);
    return { error: 'Failed to send message. Please try again later.' };
  }

  return { success: Boolean(data?.id) };
}
