'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Eye, HeartHandshake, ShieldCheck } from 'lucide-react'

const values = [
  {
    icon: Eye,
    title: 'Relentless Innovation',
    description:
      'We stay at the cutting edge of tech, creative directions, and marketing algorithms. We don\'t just follow trends; we set them.',
  },
  {
    icon: Award,
    title: 'Precision & Quality',
    description:
      'From semantic HTML structures and database normalization to video frame edits, we execute with absolute attention to detail.',
  },
  {
    icon: HeartHandshake,
    title: 'Client-Centric Growth',
    description:
      'We build digital products designed to convert. We focus on business objectives, user experience, and measurable returns on investment.',
  },
  {
    icon: ShieldCheck,
    title: 'Absolute Transparency',
    description:
      'No hidden clauses or tech jargon. We provide weekly visual updates, direct communication, and 100% intellectual property ownership.',
  },
]

export function AboutValues() {
  const { ref, inView } = useInView({
    threshold: 0.15,
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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-4">
            Our Core Values
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The guiding principles that dictate how we approach design, development, and collaboration.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((val) => {
            const Icon = val.icon
            return (
              <motion.div
                key={val.title}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 25px -5px rgba(124, 58, 237, 0.08)',
                }}
                className="p-8 rounded-2xl bg-background border border-border hover:border-secondary/50 transition-all group flex flex-col items-start"
              >
                {/* Icon Wrapper */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center mb-6 group-hover:from-primary/25 group-hover:to-secondary/25 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {val.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
