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

  await transporter.sendMail({
    from: `${request.body.name} <${request.body.email}>`,
    to: 'contact@toukanproduction.com',
    subject: `Contact via toukanproduction.com - ${request.body.subject}`,
    text: `
    Sujet du message : ${request.body.subject}
    Contenu du message : ${request.body.content}
    
    De : ${request.body.name}
    Email : ${request.body.email}
    Téléphone : ${request.body.phone}`,
  });

  response.status(200).send(request.body);
}
