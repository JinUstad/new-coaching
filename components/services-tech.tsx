'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Settings, Palette, Search } from 'lucide-react'

const techCategories = [
  {
    title: 'Frontend Tech',
    icon: Code2,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    skills: ['Next.js (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion'],
  },
  {
    title: 'Backend & APIs',
    icon: Settings,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    skills: ['Node.js & Express', 'REST & GraphQL', 'MongoDB & Mongoose', 'PostgreSQL / Prisma', 'JWT & OAuth Authorizations'],
  },
  {
    title: 'Creative Suite',
    icon: Palette,
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    skills: ['Figma UX systems', 'Adobe Premiere Pro', 'Adobe After Effects', 'Photoshop & Illustrator', 'Cinematic sound structures'],
  },
  {
    title: 'Audits & Strategy',
    icon: Search,
    color: 'text-teal-500',
    bgColor: 'bg-teal-500/10',
    skills: ['Google Search Console', 'Technical site audits', 'Google Analytics 4', 'Schema JSON-LD injection', 'PageSpeed optimization'],
  },
]

export function ServicesTech() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-4">
            Our Technology Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The modern frameworks, creative software suites, and indexing toolsets we deploy for client delivery.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, catIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border flex flex-col items-start hover:border-primary/40 transition-colors"
              >
                {/* Title and Icon */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-lg ${category.bgColor} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${category.color}`} />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">{category.title}</h3>
                </div>

                {/* Skills List */}
                <ul className="space-y-3 w-full">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-muted-foreground flex items-center gap-2 border-b border-border/40 pb-2 last:border-0 last:pb-0"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
