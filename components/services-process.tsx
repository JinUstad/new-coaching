'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Search, PenTool, Braces, Rocket } from 'lucide-react'

const processSteps = [
  {
    step: 'Stage 01',
    title: 'Audit & Strategy',
    description: 'We run technical audits, perform user mapping, and map out your project timelines and pricing proposal.',
    deliverable: 'Deliverable: Proposal Document',
    icon: Search,
  },
  {
    step: 'Stage 02',
    title: 'UX/UI Sprints',
    description: 'We translate scope guidelines into modern visual layout boards and clickable wireframes in Figma.',
    deliverable: 'Deliverable: Figma Design Link',
    icon: PenTool,
  },
  {
    step: 'Stage 03',
    title: 'Next.js Development',
    description: 'We code components, hook up backend databases, optimize for mobile sizes, and run API audits.',
    deliverable: 'Deliverable: Weekly Staging URL',
    icon: Braces,
  },
  {
    step: 'Stage 04',
    title: 'Launch & Indexing',
    description: 'We check pages for SEO keyword targets, confirm Lighthouse speed scores, and hand over source repos.',
    deliverable: 'Deliverable: Live Site & Code Keys',
    icon: Rocket,
  },
]

export function ServicesProcess() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-4">
            Our Service Blueprint
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial strategy draft to live site optimization, here is what you receive at every checkpoint.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-background border border-border flex flex-col justify-between hover:border-primary/40 transition-all group hover:shadow-lg"
              >
                <div>
                  {/* Step Code */}
                  <span className="text-[11px] font-extrabold tracking-widest text-primary uppercase block mb-3">
                    {step.step}
                  </span>

                  {/* Header Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <Icon className="w-5 h-5 text-primary shrink-0" />
                    {step.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverable Badge */}
                <div className="mt-auto pt-4 border-t border-border/60 text-xs font-semibold text-secondary">
                  {step.deliverable}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
