'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Compass,
  Lightbulb,
  Palette,
  Code2,
  CheckCircle2,
  Rocket,
} from 'lucide-react'

const steps = [
  {
    number: 1,
    title: 'Discovery',
    description: 'Understanding your needs, goals, and target audience in detail.',
    icon: Compass,
  },
  {
    number: 2,
    title: 'Planning',
    description: 'Creating a strategic plan and roadmap for the project.',
    icon: Lightbulb,
  },
  {
    number: 3,
    title: 'Design',
    description: 'Crafting beautiful, user-friendly designs with your input.',
    icon: Palette,
  },
  {
    number: 4,
    title: 'Development',
    description: 'Building robust, scalable solutions with clean code.',
    icon: Code2,
  },
  {
    number: 5,
    title: 'Testing',
    description: 'Thorough testing to ensure quality and functionality.',
    icon: CheckCircle2,
  },
  {
    number: 6,
    title: 'Launch',
    description: 'Deploying to production with ongoing support.',
    icon: Rocket,
  },
]

export function Process() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section
      id="process"
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
            My Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to deliver exceptional results, every single
            time.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent" />

          {/* Steps Grid */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex gap-8 items-start md:grid md:grid-cols-2 md:gap-8 ${
                    index % 2 === 1 ? 'md:text-right' : ''
                  }`}
                >
                  {/* Content */}
                  <motion.div
                    className={`flex-1 ${index % 2 === 1 ? 'md:order-2' : ''}`}
                  >
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Circle with Icon */}
                  <div className="hidden md:flex md:justify-center">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className="relative z-10"
                    >
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute inset-0 w-20 h-20 rounded-full bg-primary/20 animate-pulse" />
                    </motion.div>
                  </div>

                  {/* Mobile Circle */}
                  <div className="md:hidden flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg flex-shrink-0"
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
