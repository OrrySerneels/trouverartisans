import { hash } from 'bcryptjs'
import fs from 'fs'
import path from 'path'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const artisan = req.body
  const file = path.join(process.cwd(), 'data', 'artisans.json')
  const list = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file)) : []
  if (list.find((u: any) => u.email === artisan.email))
    return res.status(400).json({ message: 'Email déjà utilisé' })
  artisan.motdepasse = await hash(artisan.motdepasse, 10)
  list.push(artisan)
  fs.writeFileSync(file, JSON.stringify(list, null, 2))
  res.status(200).json({ ok: true })
}