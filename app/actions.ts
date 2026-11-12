'use server';

import { headers } from 'next/headers';
import { sendContactEmail } from '@/api/resend';

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 3;
const submissionsByIp = new Map<string, number[]>();

export async function handleSendEmail(clientEmail: string, clientSubject: string, website: string) {
  // Automated form fillers commonly populate hidden fields. Silently accept the
  // submission so they do not learn which check stopped the email.
  if (typeof website === 'string' && website.trim()) return { success: true };

  if (typeof clientEmail !== 'string' || typeof clientSubject !== 'string') {
    return { error: 'Please enter a valid email address and subject.' };
  }

  const email = clientEmail.trim();
  const subject = clientSubject.trim();

  if (!email || !subject) {
    return { error: 'Both email and subject are required.' };
  }

  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Please enter a valid email address.' };
  }

  if (subject.length > 180 || /[\r\n]/.test(subject)) {
    return { error: 'Please keep the subject under 180 characters.' };
  }

  try {
    const requestHeaders = await headers();
    const ip = requestHeaders.get('x-forwarded-for')?.split(',')[0]?.trim()
      || requestHeaders.get('x-real-ip')
      || 'unknown';
    const now = Date.now();
    const recentSubmissions = (submissionsByIp.get(ip) ?? [])
      .filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

    if (recentSubmissions.length >= RATE_LIMIT_MAX) {
      submissionsByIp.set(ip, recentSubmissions);
      return { error: 'Too many messages sent. Please try again in 15 minutes.' };
    }

    recentSubmissions.push(now);
    submissionsByIp.set(ip, recentSubmissions);

    // Prune expired entries to keep this process-local cache bounded.
    for (const [storedIp, timestamps] of submissionsByIp) {
      if (timestamps.every((timestamp) => now - timestamp >= RATE_LIMIT_WINDOW_MS)) {
        submissionsByIp.delete(storedIp);
      }
    }

    return await sendContactEmail(email, subject);
  } catch (error) {
    console.error('Failed to send email:', error);
    return { error: 'Failed to send message. Please try again later.' };
  }
}
