'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowDown } from 'lucide-react'

export function CoursesHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      {/* Background blobs */}
      <div className="absolute top-10 right-[15%] w-72 h-72 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 left-[15%] w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide"
          >
            <Sparkles className="w-4 h-4" />
            <span>LEARNING PROGRAMS</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl font-extrabold leading-tight text-balance text-foreground"
          >
            Elevate Your{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Digital Craft
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance"
          >
            Master industry-standard coding languages and creative frameworks. Our syllabus combines theory lectures with live coding sprint execution.
          </motion.p>

          {/* Scroll Hint */}
          <motion.div
            variants={itemVariants}
            className="pt-6 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-2 text-muted-foreground text-xs cursor-pointer hover:text-primary transition-colors"
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight * 0.55,
                  behavior: 'smooth',
                })
              }}
            >
              <span>Explore course catalog</span>
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
