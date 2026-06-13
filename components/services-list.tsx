'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Laptop, Server, Smartphone, Compass, LineChart, Film } from 'lucide-react'

const serviceItems = [
  {
    icon: Laptop,
    title: 'Website Development',
    description: 'Stunning marketing sites, portfolio directories, and interactive landing pages. Optimized for fast load times, perfect responsiveness, and semantic code structures.',
  },
  {
    icon: Server,
    title: 'Full Stack Development',
    description: 'Custom SaaS dashboards, dynamic databases, and API console integrations. Built with Next.js, Node.js, Express, MongoDB, and secure token authentication.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Fluid, cross-platform mobile solutions matching native experiences. Focused on smooth touch dynamics, performance optimization, and clean state operations.',
  },
  {
    icon: Compass,
    title: 'UI/UX Design',
    description: 'High-fidelity figma mockups, interactive wireframes, and standardized component-based design languages built from scratch to establish your product brand.',
  },
  {
    icon: LineChart,
    title: 'SEO & Growth Audits',
    description: 'Technical page audits, schema configuration, site maps, speed indexing, and organic keyword targeting to rank your company at the top of Google searches.',
  },
  {
    icon: Film,
    title: 'Video & Motion Production',
    description: 'Cinematic commercials, short-form reels, typography animations, and video adjustments. Designed to capture customer interest within the first 3 seconds.',
  },
]

export function ServicesList() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-4">
            Services We Provide
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A look at our digital toolkit and production standards. Every project is crafted to perform exceptionally.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {serviceItems.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 25px -5px rgba(37, 99, 235, 0.08)',
                }}
                className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all group flex flex-col items-start"
              >
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 group-hover:from-primary/25 group-hover:to-secondary/25 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
