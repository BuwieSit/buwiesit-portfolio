import { Resend } from 'resend';

const API_KEY = process.env.RESEND_API_KEY;
const resend = new Resend(API_KEY);

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'santosbuhawie28@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});