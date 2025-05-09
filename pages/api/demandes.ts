import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '../../lib/session'

export default withIronSessionApiRoute(function handler(req, res) {
  if (!req.session.user) return res.status(401).json({ message: 'Non autorisé' })
  res.json([
    { nom: 'Claire Dupont', email: 'claire@mail.com', téléphone: '078 111 22 33', catégorie: 'Électricité' },
    { nom: 'Jean Martin', email: 'jean@mail.com', téléphone: '078 999 88 77', catégorie: 'Sanitaire' }
  ])
}, sessionOptions)