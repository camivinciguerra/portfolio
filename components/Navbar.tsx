'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Awards', 'Contact']

export default function Navbar() {
  return (
    <motion.nav 
      className="sticky top-0 bg-pink-400 bg-opacity-90 backdrop-blur-md z-50 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <motion.div
            className="text-3xl font-bold text-white font-cursive"
            whileHover={{ scale: 1.1 }}
          >
            Camila Vinciguerra
          </motion.div>
          <ul className="flex space-x-4">
            {navItems.map((item, index) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }}>
                <Link href={`#${item.toLowerCase()}`} className="text-white hover:text-pink-600 transition-colors font-semibold">
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  )
}
