'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ShieldCheck, MessageSquare, BookOpen, HeartHandshake } from 'lucide-react'

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Live Sandbox Reviews',
    description: 'Submit your weekly assignments via GitHub and receive comprehensive video code reviews highlighting architecture and speed optimizations.',
  },
  {
    icon: MessageSquare,
    title: '1-on-1 Debugging Calls',
    description: 'Get personal help resolving visual CSS layout blocks, server route issues, or figma vector rules directly from DevforDevs.',
  },
  {
    icon: BookOpen,
    title: 'Lifetime Resource Library',
    description: 'Gain immediate access to premium Figma component variables, visual wireframe blueprints, backend authorization code modules, and edit assets.',
  },
  {
    icon: HeartHandshake,
    title: 'Vetted Peer Community',
    description: 'Join a private network of designers, full-stack engineers, and visual editors to collaborate on startup hackathons and freelance gigs.',
  },
]

export function CoursesBenefits() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-4">
            The Student Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We do not just hand over video courses. We build a guided educational environment to make sure you succeed.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-secondary/40 hover:shadow-lg transition-all flex flex-col items-start"
              >
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
