'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    company: 'YPF S.A.',
    position: 'Process and Quality Improvement Intern',
    period: 'September 2024 - Present',
    description: 'My responsibilities include identifying opportunities for improvement, optimizing processes, managing non-quality costs, automating workflows, using collaboration tools, performing data analysis, and participating in quality audits. I also develop solutions using SharePoint and utilize Power BI for data analysis and reporting.',
  },
  {
    company: 'Dprom',
    position: 'E-Commerce Operations Manager',
    period: '2020-2024',
    description: 'I oversaw strategies to improve the performance of the online stores, including product and promotion updates. I managed sales of merchandising products, collaborating with the design team and ensuring timely production and quality standards. I coordinated product supply with suppliers, managed e-commerce inventory, and conducted audits to maintain accuracy. Additionally, I ensured proper warehouse storage and handled the billing process for accurate transactions',
  }
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" ref={ref} className="py-20 bg-pink-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-pink-500 font-cursive">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="bg-white rounded-lg p-6 shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-pink-600">{exp.position}</h3>
              <h4 className="text-xl text-pink-500 mb-2">{exp.company}</h4>
              <p className="text-sm text-gray-600 mb-4">{exp.period}</p>
              <p className="text-gray-700">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

