'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Code, Eye, Rocket, Server, TrendingUp } from 'lucide-react'

const storyMilestones = [
  {
    year: '2021',
    icon: Code,
    title: 'The Spark & First Line of Code',
    description:
      'Began the coding journey by diving into front-end languages. Built countless simple responsive layouts and developed a deep fascination with web tech.',
  },
  {
    year: '2022',
    icon: Eye,
    title: 'UI/UX & Creative Design',
    description:
      'Recognized that high-performance code needs premium design. Expanded skills into UI/UX wireframing, Figma design systems, and video content production.',
  },
  {
    year: '2023',
    icon: Server,
    title: 'Transition to Full Stack',
    description:
      'Mastered the MERN & Next.js ecosystem. Created scalable backends, database models, and dynamic web architectures. Delivered first client projects.',
  },
  {
    year: '2024',
    icon: TrendingUp,
    title: 'SEO & Growth Strategy',
    description:
      'Shifted focus toward performance and marketing. Integrated search engine optimization and analytics to ensure client platforms attract actual business.',
  },
  {
    year: '2025',
    icon: Rocket,
    title: 'DevforDevs Collective',
    description:
      'Scaled operations to build a collaborative network of designers, marketers, and developers. Delivering full-suite digital strategies globally.',
  },
]

function TimelineCard({
  milestone,
  index,
}: {
  milestone: (typeof storyMilestones)[0]
  index: number
}) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const Icon = milestone.icon

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center justify-between w-full mb-12 last:mb-0 ${
        index % 2 === 0 ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Invisible placeholder for alignment on desktop */}
      <div className="hidden md:block w-[45%]" />

      {/* Center Line and Node */}
      <div className="relative flex items-center justify-center my-4 md:my-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center shadow-lg relative z-20"
        >
          <Icon className="w-5 h-5" />
        </motion.div>
        {/* Year Tag on Timeline */}
        <div className="absolute top-14 text-sm font-bold bg-muted px-2 py-0.5 rounded-md border border-border">
          {milestone.year}
        </div>
      </div>

      {/* Card Content */}
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full md:w-[45%] p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all"
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="text-sm font-semibold text-primary uppercase tracking-wide flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {milestone.year}
          </span>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">
          {milestone.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
          {milestone.description}
        </p>
      </motion.div>
    </div>
  )
}

export function AboutStory() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-4">
            Our Journey & Story
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From humble beginnings of self-education to assembling a collaborative creative circle delivering high-performance software.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative mt-16">
          {/* Vertical center line (Desktop) */}
          <div className="absolute left-[50%] transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-muted-foreground/30 hidden md:block" />



          <div className="flex flex-col items-center">
            {storyMilestones.map((milestone, index) => (
              <TimelineCard
                key={milestone.year}
                milestone={milestone}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
