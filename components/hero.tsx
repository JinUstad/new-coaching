'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const techBadges = [
  'Next.js',
  'React',
  'Node.js',
  'Tailwind CSS',
  'UI/UX',
  'SEO',
  'Video Editing',
]

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Floating background shapes */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"
      />

      <div className="w-full max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center w-full"
        >
          {/* Content */}
          <div className="w-full flex flex-col items-center text-center">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-center"
            >
              Building Digital{' '}
              <span className="block md:inline-block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Experiences That Drive Results
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-center max-w-3xl"
            >
              We help businesses and creators grow online through modern websites,
              mobile applications, UI/UX design, video editing, SEO, and digital
              marketing solutions.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center w-full sm:w-auto"
            >
              <Link href="/contact" passHref legacyBehavior>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:shadow-xl transition-shadow w-full sm:w-auto text-center cursor-pointer block"
                >
                  Hire Us
                </motion.a>
              </Link>
              <Link href="#services" passHref legacyBehavior>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-center cursor-pointer block"
                >
                  View Portfolio
                  <ArrowRight size={20} />
                </motion.a>
              </Link>
            </motion.div>

            {/* Tech Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 justify-center max-w-3xl"
            >
              {techBadges.map((badge, index) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-primary transition-colors"
                >
                  {badge}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
