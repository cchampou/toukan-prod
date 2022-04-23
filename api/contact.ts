import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST as string,
    port: parseInt(process.env.SMTP_PORT as string, 10),
    secure: true,
    auth: {
      user: process.env.SMTP_USERNAME as string,
      pass: process.env.SMTP_PASSWORD as string,
    },
  });

  if (
    !request.body.email ||
    !request.body.subject ||
    !request.body.content ||
    !request.body.name
  ) {
    response.status(400).send('Missing required fields');
    return;
  }

  const info = await transporter.sendMail({
    from: `${request.body.name} <${request.body.email}>`,
    to: 'clement@champouillon.com',
    subject: request.body.subject,
    text: request.body.content,
  });

  console.log('Message sent: %s', info.messageId);
  response.status(200).send(request.body);
}
