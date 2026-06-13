'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Globe,
  Code2,
  Smartphone,
  Palette,
  Zap,
  Search,
  TrendingUp,
  Film,
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description:
      'Business websites, landing pages, portfolios, and corporate websites built for performance and conversions.',
  },
  {
    icon: Code2,
    title: 'Full Stack Development',
    description:
      'Modern scalable web applications using latest technologies and best practices.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Native and cross-platform Android and iOS applications with seamless user experience.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Modern user experiences and intuitive interfaces that users love to interact with.',
  },
  {
    icon: Zap,
    title: 'API Integration',
    description:
      'Payment gateways, third-party APIs, and automation systems integration.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description:
      'Technical SEO, on-page optimization, and strategies for better search engine visibility.',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description:
      'Growth strategies, content marketing, and online branding solutions.',
  },
  {
    icon: Film,
    title: 'Video Editing',
    description:
      'YouTube videos, reels, shorts, motion graphics, and promotional content.',
  },
]

export function Services() {
  const { ref, inView } = useInView({
    threshold: 0.2,
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
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Services I Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to help your business grow
            and succeed in the online space.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                >
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
