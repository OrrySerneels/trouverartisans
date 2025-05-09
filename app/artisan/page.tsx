'use client'

import { useState } from 'react'

export default function ArtisanPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    categorie: '',
    rcPro: null as File | null,
    zones: '',
    conditions: false,
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, rcPro: e.target.files?.[0] || null })
  }

  const validate = () => {
    const newErrors: { [key: string]: string } = {}
    if (!formData.nom) newErrors.nom = 'Champ requis'
    if (!formData.email) newErrors.email = 'Champ requis'
    if (!formData.telephone) newErrors.telephone = 'Champ requis'
    if (!formData.categorie) newErrors.categorie = 'Champ requis'
    if (!formData.rcPro) newErrors.rcPro = 'Fichier requis'
    if (!formData.conditions) newErrors.conditions = 'Vous devez accepter les conditions'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    alert('Formulaire soumis avec succès')
  }

  return (
    <main className="max-w-xl mx-auto mt-10 p-6 border border-gray-200 rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-6">Inscription artisan</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Nom</label>
          <input name="nom" value={formData.nom} onChange={handleChange} className="w-full border p-2 rounded" />
          {errors.nom && <p className="text-red-600 text-sm">{errors.nom}</p>}
        </div>
        <div>
          <label className="block mb-1">E-mail</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border p-2 rounded" />
          {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label className="block mb-1">Téléphone</label>
          <input name="telephone" value={formData.telephone} onChange={handleChange} className="w-full border p-2 rounded" />
          {errors.telephone && <p className="text-red-600 text-sm">{errors.telephone}</p>}
        </div>
        <div>
          <label className="block mb-1">Catégorie</label>
          <select name="categorie" value={formData.categorie} onChange={handleChange} className="w-full border p-2 rounded">
            <option value="">-- Sélectionnez --</option>
            <option value="Gros œuvre">Gros œuvre</option>
            <option value="Second œuvre">Second œuvre</option>
            <option value="Électricité">Électricité</option>
            <option value="Sanitaire">Sanitaire</option>
            <option value="Jardin / extérieur">Jardin / extérieur</option>
            <option value="Autres">Autres</option>
          </select>
          {errors.categorie && <p className="text-red-600 text-sm">{errors.categorie}</p>}
        </div>
        <div>
          <label className="block mb-1">Pièce jointe RC PRO (obligatoire)</label>
          <input type="file" onChange={handleFileChange} className="w-full" />
          {errors.rcPro && <p className="text-red-600 text-sm">{errors.rcPro}</p>}
        </div>
        <div>
          <label className="block mb-1">Zones desservies (optionnel)</label>
          <textarea name="zones" value={formData.zones} onChange={handleChange} className="w-full border p-2 rounded" rows={3} />
        </div>
        <div className="flex items-start space-x-2">
          <input type="checkbox" name="conditions" checked={formData.conditions} onChange={handleChange} />
          <label className="text-sm">J'accepte les conditions générales</label>
        </div>
        {errors.conditions && <p className="text-red-600 text-sm">{errors.conditions}</p>}
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Envoyer</button>
      </form>
    </main>
  )
}