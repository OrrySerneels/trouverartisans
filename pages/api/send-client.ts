import { NextRequest, NextResponse } from 'next/server';
import { transporter } from '@/lib/mailer';

export async function POST(req: NextRequest) {
  const data = await req.formData();
  const name = data.get('nom') as string;
  const email = data.get('email') as string;
  const postal = data.get('codePostal') as string;
  const description = data.get('description') as string;
  const file = data.get('fichier') as File;

  const fileBuffer = Buffer.from(await file.arrayBuffer());

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: `info@serneels.ch, ${email}`,
    subject: `Nouvelle demande client de ${name}`,
    text: `Nom: ${name}\nEmail: ${email}\nCode postal: ${postal}\n\nDescription:\n${description}`,
    attachments: [
      {
        filename: file.name,
        content: fileBuffer,
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Mail error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}