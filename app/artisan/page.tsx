'use client'

import { useState } from 'react'

export default function ArtisanForm() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    categorie: '',
    zones: '',
    conditions: false,
  })

  const [file, setFile] = useState<File | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement
    const { name, value, type } = target
    const checked = type === 'checkbox' ? target.checked : undefined

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const data = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      if (typeof value !== 'undefined') {
        data.append(key, String(value))
      }
    })
    if (file) {
      data.append('file', file)
    }

    const res = await fetch('/api/send-artisan', {
      method: 'POST',
      body: data,
    })

    if (res.ok) {
      alert('Demande envoyée avec succès')
    } else {
      alert('Erreur lors de l’envoi')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 space-y-4">
      <input name="nom" onChange={handleChange} placeholder="Nom" className="w-full p-2 border" />
      <input name="email" type="email" onChange={handleChange} placeholder="E-mail" className="w-full p-2 border" />
      <input name="telephone" onChange={handleChange} placeholder="Téléphone" className="w-full p-2 border" />

      <select name="categorie" onChange={handleChange} className="w-full p-2 border">
        <option value="">Sélectionner une catégorie</option>
        <option value="Gros œuvre">Gros œuvre</option>
        <option value="Second œuvre">Second œuvre</option>
        <option value="Électricité">Électricité</option>
        <option value="Sanitaire">Sanitaire</option>
        <option value="Jardin / extérieur">Jardin / extérieur</option>
        <option value="Autres">Autres</option>
      </select>

      <input type="file" onChange={handleFileChange} className="w-full" />

      <textarea name="zones" onChange={handleChange} placeholder="Zones desservies (optionnel)" className="w-full p-2 border" />

      <label className="flex items-center">
        <input type="checkbox" name="conditions" onChange={handleChange} className="mr-2" />
        J'accepte les conditions générales
      </label>

      <button type="submit" className="bg-black text-white px-4 py-2">Envoyer</button>
    </form>
  )
}