'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

const projects = [
  {
    title: 'AcademiCo',
    description: 'AcademiCo is a digital platform designed to foster collaboration and knowledge-sharing among students across all academic fields and universities in Argentina. It serves as a network where students can connect, share experiences, and exchange educational resources such as solved exercises, past exams, and academic reviews. The platform aims to enhance learning by providing access to a wide variety of study materials, supporting students in their academic journey. Additionally, it encourages a sense of community and peer-to-peer learning, empowering students to help each other succeed academically.',
    image: 'AcademiCo.jpg?height=200&width=300',
  },
  {
    title: 'Fundacion Escolares',
    description: 'Platform designed to support rural education in Argentina. It allows students to track their progress on educational activities, while teachers can upload reports and request new activities or funding for projects. The platform promotes collaboration between students and educators, ensuring that rural schools have access to resources and support for sustainable educational development.',
    image: 'Escolares.jpeg?height=200&width=300',
  },
  {
    title: 'Servicios Públicos',
    description: 'The website developed for detecting faults in public services is designed to help users report issues with services such as water, electricity, or gas. Through the platform, individuals can submit reports detailing the problem they encountered, including location and description. The system tracks these reports, enabling service providers to address and resolve the issues more efficiently. The platform enhances public service reliability by facilitating communication between users and providers, ensuring quicker response times and better service quality.',
    image: 'ServiciosPublicos.jpg?height=200&width=300',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-pink-500 font-cursive">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-pink-100 rounded-lg overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Image src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-pink-600">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

