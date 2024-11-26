'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" ref={ref} className="py-20 bg-pink-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white font-cursive">Get in Touch!</h2>
        <motion.div
          className="max-w-sm mx-auto bg-white rounded-[3rem] shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Phone frame */}
          <div className="bg-gray-800 py-4 px-6 flex justify-between items-center">
            <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
            <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
          </div>
          
          {/* Phone content */}
          <div className="p-6 bg-gradient-to-b from-pink-200 to-pink-100">
            <h3 className="text-2xl font-bold text-pink-600 mb-6 text-center">Contact Info</h3>
            
            {/* Phone number */}
            <motion.div 
              className="flex items-center mb-4 bg-white p-3 rounded-lg shadow"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="text-pink-500 mr-3" />
              <a href="tel:+54 9 11 2465 4490" className="text-gray-800 hover:text-pink-600 transition-colors">
                +54 9 11 2465 5590
              </a>
            </motion.div>
            
            {/* LinkedIn */}
            <motion.div 
              className="flex items-center mb-4 bg-white p-3 rounded-lg shadow"
              whileHover={{ scale: 1.05 }}
            >
              <Linkedin className="text-pink-500 mr-3" />
              <a href="https://www.linkedin.com/in/camila-vinciguerra" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-pink-600 transition-colors">
                linkedin.com/in/camila-vinciguerra
              </a>
            </motion.div>
            
            {/* Email */}
            <motion.div 
              className="flex items-center mb-4 bg-white p-3 rounded-lg shadow"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="text-pink-500 mr-3" />
              <a href="mailto:camivinci7@gmail.com" className="text-gray-800 hover:text-pink-600 transition-colors">
                camivinci7@gmail.com
              </a>
            </motion.div>
          </div>
          
          {/* Phone button */}
          <div className="bg-gray-800 py-4 px-6 flex justify-center">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

