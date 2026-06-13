'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Briefcase,
  Smartphone,
  Search,
  Zap,
  HeartHandshake,
  Lightbulb,
} from 'lucide-react'

const benefits = [
  {
    icon: Briefcase,
    title: 'Professional Approach',
    description:
      'Dedicated to delivering high-quality solutions with attention to detail and timely project completion.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description:
      'Every website and application is optimized for all devices, ensuring perfect user experience everywhere.',
  },
  {
    icon: Search,
    title: 'SEO Optimized',
    description:
      'Built-in SEO best practices ensure your online presence ranks well on search engines.',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description:
      'Efficient project management and streamlined workflows mean you get results faster without compromising quality.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-Term Support',
    description:
      'Ongoing support and maintenance to ensure your solutions stay secure, updated, and performing optimally.',
  },
  {
    icon: Lightbulb,
    title: 'Modern Tech Stack',
    description:
      'Latest technologies and frameworks to build scalable, maintainable, and future-proof solutions.',
  },
]

export function WhyChooseMe() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="why-choose-me"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-card"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Why Choose Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what sets my services apart and why clients trust me with
            their projects.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 25px -5px rgba(37, 99, 235, 0.1)',
                }}
                className="p-8 rounded-xl bg-background border border-border hover:border-primary/50 transition-all group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-5 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors"
                >
                  <Icon className="w-7 h-7 text-primary" />
                </motion.div>

                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
