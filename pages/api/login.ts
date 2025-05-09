import { compare } from 'bcryptjs'
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '../../lib/session'
import fs from 'fs'
import path from 'path'

export default withIronSessionApiRoute(async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { email, motdepasse } = req.body
  const file = path.join(process.cwd(), 'data', 'artisans.json')
  const list = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file)) : []
  const user = list.find((u: any) => u.email === email)
  if (!user || !(await compare(motdepasse, user.motdepasse)))
    return res.status(401).json({ message: 'Identifiants incorrects' })
  req.session.user = { email: user.email, nom: user.nom, téléphone: user.téléphone, catégorie: user.catégorie, zones: user.zones }
  await req.session.save()
  res.json({ ok: true })
}, sessionOptions)