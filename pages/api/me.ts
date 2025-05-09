import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '../../lib/session'

export default withIronSessionApiRoute(function handler(req, res) {
  if (!req.session.user) return res.status(401).json({ message: 'Non autorisé' })
  res.json(req.session.user)
}, sessionOptions)