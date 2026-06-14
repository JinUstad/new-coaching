'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { BookOpen, Clock, Users, ArrowRight, Globe, PenTool, Code2, Compass, Server, Cpu, Smartphone, Video } from 'lucide-react'
import { courses } from '@/lib/courses-data'

const iconMap: { [key: string]: any } = {
  Globe,
  PenTool,
  Code2,
  Compass,
  Server,
  Cpu,
  Smartphone,
  Video
}

export function CoursesCatalog() {
  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true,
  })

  const catalogIds = ['web-dev', 'figma-dev', 'frontend-dev', 'ui-ux', 'backend-dev', 'fullstack-dev', 'app-dev', 'video-editing']
  const catalogCourses = courses.filter((c) => catalogIds.includes(c.id))

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
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-4">
            Our Syllabus Programs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our specialized programs. Structured timelines, live coding review sprints, and hands-on deliverables.
          </p>
        </div>

        {/* Catalog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {catalogCourses.map((course) => {
            const Icon = iconMap[course.iconName] || BookOpen
            return (
              <motion.div
                key={course.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className={`p-6 rounded-2xl bg-background border border-border flex flex-col justify-between transition-all hover:shadow-lg hover:border-primary/40 group`}
              >
                <div>
                  {/* Category and Icon */}
                  <div className="flex justify-between items-center mb-5">
                    <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md bg-card border border-border ${course.color}`}>
                      {course.category}
                    </span>
                    <div className={`w-10 h-10 rounded-lg ${course.bgColor} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${course.color}`} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {course.description}
                  </p>

                  {/* Meta Badges */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-card border border-border p-2 rounded-lg">
                      <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-card border border-border p-2 rounded-lg">
                      <Users className="w-3.5 h-3.5 text-secondary shrink-0" />
                      <span>{course.students}</span>
                    </div>
                  </div>

                  {/* Syllabus outline */}
                  <div className="border-t border-border/40 pt-4 mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                      Syllabus Outline:
                    </h4>
                    <ul className="space-y-2">
                      {course.syllabus.map((topic) => (
                        <li key={topic.title} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 bg-primary shrink-0" />
                          <span>{topic.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Enroll button */}
                <Link href={`/courses/${course.id}`} passHref legacyBehavior>
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-card border border-border hover:border-primary/50 hover:bg-primary/5 text-foreground hover:text-primary rounded-xl text-center text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

