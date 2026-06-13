'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowDown } from 'lucide-react'

export function AboutHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      {/* Decorative Blob Backgrounds */}
      <motion.div
        animate={{
          scale: [1, 1.15, 0.95, 1],
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 right-[10%] w-80 h-80 bg-primary/10 rounded-full blur-[80px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 0.9, 1.1, 1],
          x: [0, -30, 30, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 left-[10%] w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide"
          >
            <Sparkles className="w-4 h-4" />
            <span>GET TO KNOW US</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-balance"
          >
            Transforming Ideas Into{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Digital Realities
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance"
          >
            GM Digital is a modern design & development collective. Led by{' '}
            <span className="text-foreground font-semibold">Gul Mohammad</span>,
            we blend full-stack technology, premium UI/UX, video production, and SEO strategy to build immersive products that drive results.
          </motion.p>

          {/* Interactive Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center pt-4"
          >
            <div className="px-5 py-3 rounded-xl bg-card border border-border flex flex-col items-center min-w-[120px] shadow-sm">
              <span className="text-2xl font-bold text-primary">5+</span>
              <span className="text-xs text-muted-foreground font-medium">Years Active</span>
            </div>
            <div className="px-5 py-3 rounded-xl bg-card border border-border flex flex-col items-center min-w-[120px] shadow-sm">
              <span className="text-2xl font-bold text-secondary">15+</span>
              <span className="text-xs text-muted-foreground font-medium">Global Projects</span>
            </div>
            <div className="px-5 py-3 rounded-xl bg-card border border-border flex flex-col items-center min-w-[120px] shadow-sm">
              <span className="text-2xl font-bold text-accent">25+</span>
              <span className="text-xs text-muted-foreground font-medium">Trained Minds</span>
            </div>
          </motion.div>

          {/* Scroll Down Hint */}
          <motion.div
            variants={itemVariants}
            className="pt-10 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-2 text-muted-foreground text-sm cursor-pointer hover:text-primary transition-colors"
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight * 0.8,
                  behavior: 'smooth',
                })
              }}
            >
              <span>Explore our story</span>
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
