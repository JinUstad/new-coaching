'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle, Search, Compass, Cpu, Rocket } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: Search,
    title: 'Discovery & Audit',
    timeframe: 'Day 1–3',
    description:
      'We audit your digital objectives, analyze competitors, structure your information architecture, and align on a detailed roadmap proposal.',
  },
  {
    step: '02',
    icon: Compass,
    title: 'UX/UI Wireframing',
    timeframe: 'Week 1',
    description:
      'We construct premium visual interactive mockups in Figma, mapping out frictionless customer journeys and layout options for your approval.',
  },
  {
    step: '03',
    icon: Cpu,
    title: 'Sprint Development',
    timeframe: 'Week 2–4',
    description:
      'We convert designs into semantic, lightning-fast Next.js components, deploy databases, edit assets, and deliver weekly visual reviews.',
  },
  {
    step: '04',
    icon: Rocket,
    title: 'Launch & SEO Audit',
    timeframe: 'Delivery',
    description:
      'We run performance speed checks, deploy search engine optimizations, handover code ownership repositories, and go live.',
  },
]

export function ContactProcess() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-4">
            How We Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From the initial introductory call to project delivery, here is our streamlined partnership pipeline.
          </p>
        </div>

        {/* Steps Roadmap Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-4 gap-8 relative"
        >
          {steps.map((stepItem, index) => {
            const Icon = stepItem.icon
            return (
              <motion.div
                key={stepItem.step}
                variants={itemVariants}
                className="relative flex flex-col items-start p-6 rounded-2xl bg-card border border-border hover:border-secondary/40 hover:shadow-lg transition-all group"
              >
                {/* Connector line on desktop */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(100%-12px)] w-[calc(100%-32px)] h-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 z-0" />
                )}

                {/* Step Circle */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors relative z-10">
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                {/* Step Count Badge */}
                <span className="absolute top-6 right-6 text-3xl font-extrabold text-muted-foreground/15 select-none font-mono">
                  {stepItem.step}
                </span>

                {/* Text Content */}
                <span className="text-[11px] font-bold uppercase tracking-wider text-secondary mb-2 block">
                  {stepItem.timeframe}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {stepItem.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {stepItem.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
