'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Awards from '../components/Awards'
import Contact from '../components/Contact'

export default function Portfolio() {
  return (
    <div className="bg-pink-200 min-h-screen text-gray-800 font-sans">
      <div className="fixed inset-0 bg-[url('/pattern.png')] opacity-5 z-0"></div>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Awards />
        <Contact />
      </main>
    </div>
  )
}

