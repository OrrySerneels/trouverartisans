'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SuccessPage() {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center bg-[#fdfaf5] px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-[#4b2e2e] mb-4 text-center">
        Merci pour votre demande !
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Votre demande a bien été reçue. Un artisan vous répondra rapidement.
      </p>
      <Link
        href="/"
        className="bg-[#d4a373] hover:bg-[#c78b59] text-white font-semibold py-3 px-6 rounded-2xl shadow-md transition"
      >
        Retour à l’accueil
      </Link>
    </motion.div>
  )
}