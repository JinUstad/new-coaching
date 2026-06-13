'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function About() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-card"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold mb-12 text-center text-balance"
          >
            About Me
          </motion.h2>

          <div className="max-w-6xl mx-auto ">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6 ">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                I am Gul Mohammad, a Full Stack Developer, UI/UX Designer, Video
                Editor, and Digital Marketing Professional. I help businesses,
                startups, and content creators build modern digital solutions that
                increase visibility, engagement, and revenue.
              </p>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                With over 5 years of learning and practical experience, I&apos;ve
                worked with startups, mid-size companies, and individual creators to
                transform their digital presence. My approach combines technical
                excellence with creative design to deliver solutions that not only
                look great but perform exceptionally.
              </p>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                I specialize in building scalable web applications, designing
                intuitive user experiences, optimizing for search engines, and
                creating compelling visual content. Every project is approached with
                dedication to quality, innovation, and measurable results.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
