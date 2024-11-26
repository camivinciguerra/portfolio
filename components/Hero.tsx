'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="py-20 bg-pink-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative"
        >
          <h1 className="text-6xl font-bold mb-4 text-white font-cursive relative z-10">Camila Lara Vinciguerra</h1>
          <p className="text-2xl text-pink-700 font-semibold relative z-10">Software Engineering Student</p>
          
        </motion.div>
      </div>
    </section>
  )
}

