'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center space-y-8">
      <h1 className="text-4xl font-bold">Bienvenue sur TrouverArtisans.ch</h1>
      <p className="text-lg text-gray-600">Choisissez votre profil pour commencer :</p>
      <div className="flex space-x-4">
        <Link href="/client">
          <a className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800">Je suis client</a>
        </Link>
        <Link href="/artisan">
          <a className="px-6 py-3 bg-gray-200 text-black rounded-xl hover:bg-gray-300">Je suis artisan</a>
        </Link>
      </div>
    </main>
  )
}