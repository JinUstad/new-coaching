'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { BookOpen, Clock, Users, ArrowRight, Code, Video, Layout } from 'lucide-react'

const courses = [
  {
    id: 'web-dev',
    title: 'Full-Stack Next.js & React Mastery',
    category: 'Development',
    icon: Code,
    level: 'Beginner to Advanced',
    duration: '12 Weeks',
    students: '180+ Enrolled',
    description: 'Learn to build modern, database-backed web applications with Tailwind CSS, Server Actions, and REST/GraphQL APIs.',
    topics: ['Next.js App Router & React 19', 'Tailwind CSS v4 styling', 'Node.js & MongoDB integrations', 'Deployment & Vercel optimization'],
    colorFrom: 'from-blue-500/10',
    colorTo: 'to-indigo-500/10',
    borderColor: 'group-hover:border-blue-500/50',
    accentColor: 'text-blue-500',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Visual Design Systems',
    category: 'Design',
    icon: Layout,
    level: 'Intermediate',
    duration: '8 Weeks',
    students: '120+ Enrolled',
    description: 'Master professional design systems in Figma. Understand color psychology, typography hierarchy, and interactive wireframes.',
    topics: ['Figma Auto Layout & Variables', 'Component variant architectures', 'Interactive wireframing & mapping', 'Developer handoff standards'],
    colorFrom: 'from-purple-500/10',
    colorTo: 'to-pink-500/10',
    borderColor: 'group-hover:border-purple-500/50',
    accentColor: 'text-purple-500',
  },
  {
    id: 'video-motion',
    title: 'Cinematic Video Editing & Motion Graphics',
    category: 'Production',
    icon: Video,
    level: 'Beginner to Professional',
    duration: '10 Weeks',
    students: '150+ Enrolled',
    description: 'Create high-converting video advertisements and cinematic short-form content with Adobe Premiere Pro and After Effects.',
    topics: ['Premiere Pro timeline pacing', 'After Effects keyframe animation', 'Audio design & sound effects', 'Color grading & cinematic lighting'],
    colorFrom: 'from-teal-500/10',
    colorTo: 'to-emerald-500/10',
    borderColor: 'group-hover:border-teal-500/50',
    accentColor: 'text-teal-500',
  },
]

export function Courses() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="courses"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-card border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>LEARN FROM AN EXPERT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-4">
            FLAGSHIP TUITION COURSES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical, project-driven training designed to take you from a curious beginner to a highly employable digital creator.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
        >
          {courses.map((course) => {
            const Icon = course.icon
            return (
              <motion.div
                key={course.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className={`group relative rounded-2xl bg-background border border-border p-6 flex flex-col justify-between transition-all overflow-hidden hover:shadow-xl ${course.borderColor}`}
              >
                {/* Background Accent glow */}
                <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${course.colorFrom} ${course.colorTo} opacity-60 z-0`} />

                <div className="relative z-10">
                  {/* Category & Icon */}
                  <div className="flex justify-between items-center mb-6">
                    <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md bg-card border border-border ${course.accentColor}`}>
                      {course.category}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${course.accentColor}`} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Badges */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground bg-card border border-border p-2 rounded-lg">
                      <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground bg-card border border-border p-2 rounded-lg">
                      <Users className="w-3.5 h-3.5 text-secondary shrink-0" />
                      <span>{course.students}</span>
                    </div>
                  </div>

                  {/* Curriculum list */}
                  <div className="border-t border-border/60 pt-5 mb-8">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                      Curriculum Highlights:
                    </h4>
                    <ul className="space-y-2">
                      {course.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                          <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-primary`} />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <Link href="/contact" passHref legacyBehavior>
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-card border border-border hover:border-primary/50 hover:bg-primary/5 text-foreground hover:text-primary rounded-xl text-center text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 relative z-10"
                  >
                    Enroll Now
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
