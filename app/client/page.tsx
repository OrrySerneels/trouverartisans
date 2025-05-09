'use client'

import { useState } from 'react'

export default function ClientPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    codePostal: '',
    description: '',
    fichier: null as File | null
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, fichier: e.target.files?.[0] || null })
  }

  const validate = () => {
    const newErrors: { [key: string]: string } = {}
    if (!formData.nom) newErrors.nom = 'Champ requis'
    if (!formData.email) newErrors.email = 'Champ requis'
    if (!formData.codePostal) newErrors.codePostal = 'Champ requis'
    if (!formData.description) newErrors.description = 'Champ requis'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    alert('Formulaire soumis avec succès')
  }

  return (
    <main className="max-w-2xl mx-auto mt-10 p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Déposer une demande</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-medium mb-1">Nom</label>
          <input name="nom" value={formData.nom} onChange={handleChange} className="w-full border p-2 rounded" />
          {errors.nom && <p className="text-red-600 text-sm mt-1">{errors.nom}</p>}
        </div>
        <div>
          <label className="block font-medium mb-1">E-mail</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border p-2 rounded" />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block font-medium mb-1">Code postal</label>
          <input name="codePostal" value={formData.codePostal} onChange={handleChange} className="w-full border p-2 rounded" />
          {errors.codePostal && <p className="text-red-600 text-sm mt-1">{errors.codePostal}</p>}
        </div>
        <div>
          <label className="block font-medium mb-1">Description de votre projet</label>
          <textarea name="description" value={formData.description} onChange={handleChange} className="w-full border p-2 rounded" rows={4} />
          {errors.description && <p className="text-red-600 text-sm mt-1">{errors.description}</p>}
        </div>
        <div>
          <label className="block font-medium mb-1">Fichier (optionnel)</label>
          <input type="file" onChange={handleFileChange} className="w-full" />
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">Envoyer</button>
      </form>
    </main>
  )
}