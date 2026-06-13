'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

interface Stat {
  label: string
  value: number
  suffix: string
}

const stats: Stat[] = [
  { label: 'Projects Completed', value: 15, suffix: '+' },
  { label: 'Students Trained', value: 25, suffix: '+' },
  { label: 'Years Experience', value: 5, suffix: '+' },
  { label: 'Happy Clients', value: 10, suffix: '+' },
]

function AnimatedCounter({
  value,
  suffix,
  inView,
  delay,
}: {
  value: number
  suffix: string
  inView: boolean
  delay: number
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) {
      setCount(0)
      return
    }

    let start = 0
    const end = value
    const duration = 2000 + delay * 100
    const incrementPerMs = end / (duration / 16.67)

    const timer = setInterval(() => {
      start += incrementPerMs
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16.67)

    return () => clearInterval(timer)
  }, [inView, value, delay])

  return (
    <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
      {count}
      <span className="text-3xl">{suffix}</span>
    </div>
  )
}

export function Statistics() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section
      id="stats"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            By The Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real projects and satisfied clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="text-center p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
            >
              <motion.div
                animate={inView ? { scale: [1, 1.05, 1] } : {}}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                  repeat: Infinity,
                }}
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={inView}
                  delay={index}
                />
              </motion.div>

              <p className="text-foreground font-semibold mt-4">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
