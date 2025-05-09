import type { NextApiRequest, NextApiResponse } from 'next'
import { transporter } from '../../lib/mailer' // ✅ correcte relatieve import

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end('Méthode non autorisée')
  }

  const { nom, email, codePostal, description } = req.body

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: [process.env.ADMIN_EMAIL, email],
    subject: 'Nouvelle demande client via TrouverArtisans.ch',
    text: `
Nom: ${nom}
E-mail: ${email}
Code postal: ${codePostal}
Description de la demande: ${description}
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).json({ message: 'Demande envoyée avec succès' })
  } catch (error) {
    console.error('Erreur lors de l’envoi du mail :', error)
    res.status(500).json({ error: 'Erreur lors de l’envoi du mail' })
  }
}