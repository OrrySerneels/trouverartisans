'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CancelPage() {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center bg-[#fff8f3] px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-[#6b2f2f] mb-4 text-center">
        Paiement annulé
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Votre paiement n’a pas été complété. Vous pouvez réessayer.
      </p>
      <Link
        href="/client"
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-2xl shadow-md transition"
      >
        Réessayer
      </Link>
    </motion.div>
  )
}