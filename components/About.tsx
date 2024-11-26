'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-pink-500 font-cursive">About Me</h2>
          <p className="text-lg max-w-2xl mx-auto text-center text-gray-700 bg-pink-100 p-6 rounded-lg shadow-lg">
            I'm a passionate web developer dedicated to creating unique and engaging digital experiences. 
            With a focus on innovation and creativity, I strive to combine design and functionality 
            to deliver outstanding web solutions that stand out.
          </p>
          <motion.img 
            src="/computer.jpg" 
            alt="Decorative computer" 
            className="absolute -top-10 -left-10 w-40 h-40" // Cambié w-20 y h-20 a w-40 y h-40 para agrandarla
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  )
}

