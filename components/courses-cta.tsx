'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CoursesCta() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="p-10 sm:p-16 rounded-3xl bg-card border border-border flex flex-col items-center hover:border-primary/45 hover:shadow-xl transition-all"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-4 leading-tight">
            Start Your Learning Journey
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mb-8 leading-relaxed">
            Get in touch to check class availability, cohort schedules, and syllabus requirements. Build real projects under direct 1-on-1 supervision.
          </p>

          <Link href="/contact" passHref legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white hover:bg-primary/95 rounded-xl font-bold flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              Request Syllabus & Register
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
