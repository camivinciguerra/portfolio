import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const awards = [
  {
    title: 'Winner for <Code for good /> 2024',
    organization: 'JP Morgan Chase',
    year: '2024',
  },
  {
    title: 'Best high school average in Economics and Administration',
    organization: 'Buenos Aires Stock Exchange',
    year: '2020',
  }
]

export default function Awards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="awards" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-pink-500 font-cursive">Awards & Recognitions</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              className="bg-pink-100 rounded-lg p-6 shadow-lg flex flex-col justify-center items-center w-full md:w-1/2 lg:w-1/3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-pink-600">{award.title}</h3>
              <p className="text-pink-500 mb-2">{award.organization}</p>
              <p className="text-sm text-gray-600">{award.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
