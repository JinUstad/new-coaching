'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { BookOpen, Clock, Users, ArrowRight, Globe, PenTool, Code2, Compass, Server, Cpu, Smartphone, Video } from 'lucide-react'

const allCourses = [
  {
    id: 'web-dev',
    title: 'Web Development Core',
    category: 'Development',
    icon: Globe,
    level: 'Beginner',
    duration: '6 Weeks',
    students: '100+ Enrolled',
    description: 'Learn the foundational languages of the web. Build clean, static websites and understand responsive rendering.',
    syllabus: ['HTML5 Semantic structures', 'CSS3 Flexbox & Grid layouts', 'Modern ES6 JavaScript rules', 'Git & GitHub deployment workflows'],
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'hover:border-blue-500/40',
  },
  {
    id: 'figma-dev',
    title: 'Figma Development Systems',
    category: 'Design Systems',
    icon: PenTool,
    level: 'Beginner to Intermediate',
    duration: '8 Weeks',
    students: '80+ Enrolled',
    description: 'Design digital layouts from scratch. Master design systems, auto-layout architectures, and components.',
    syllabus: ['Auto Layout v5 & Variables', 'Component variants & properties', 'Design system token setups', 'Developer handoff & spec sheets'],
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    borderColor: 'hover:border-pink-500/40',
  },
  {
    id: 'frontend-dev',
    title: 'Frontend Engineering (React)',
    category: 'Development',
    icon: Code2,
    level: 'Intermediate',
    duration: '10 Weeks',
    students: '120+ Enrolled',
    description: 'Build fast, interactive user interfaces with React, Next.js, Tailwind CSS, and Framer Motion.',
    syllabus: ['React component state lifecycle', 'Next.js App Router & server components', 'Tailwind CSS v4 & custom properties', 'Framer Motion web animations'],
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'hover:border-purple-500/40',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Visual Design',
    category: 'Design',
    icon: Compass,
    level: 'Beginner to Intermediate',
    duration: '8 Weeks',
    students: '90+ Enrolled',
    description: 'Understand the core psychology of layouts. Design interfaces that are intuitive, clean, and accessible.',
    syllabus: ['User persona research & wireframing', 'Color theory & visual hierarchy', 'Typography systems', 'Interactive micro-transitions'],
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'hover:border-orange-500/40',
  },
  {
    id: 'backend-dev',
    title: 'Backend Development & Databases',
    category: 'Development',
    icon: Server,
    level: 'Intermediate to Advanced',
    duration: '10 Weeks',
    students: '75+ Enrolled',
    description: 'Design robust APIs, schema databases, and authentication handlers. Learn server systems logic.',
    syllabus: ['Node.js & Express REST servers', 'MongoDB & Mongoose modeling', 'JWT & cookies authorization rules', 'Relational PostgreSQL with Prisma'],
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'hover:border-indigo-500/40',
  },
  {
    id: 'fullstack-dev',
    title: 'Full-Stack Software Engineering',
    category: 'Development',
    icon: Cpu,
    level: 'Advanced',
    duration: '12 Weeks',
    students: '140+ Enrolled',
    description: 'Combine frontend design with backend database systems to deploy complete SaaS applications.',
    syllabus: ['Full MERN & Next.js deployments', 'Server Actions & optimistic updates', 'API integration audits', 'Websocket real-time connections'],
    color: 'text-teal-500',
    bgColor: 'bg-teal-500/10',
    borderColor: 'hover:border-teal-500/40',
  },
  {
    id: 'app-dev',
    title: 'App Development (React Native)',
    category: 'Development',
    icon: Smartphone,
    level: 'Advanced',
    duration: '10 Weeks',
    students: '85+ Enrolled',
    description: 'Build native, cross-platform mobile apps for iOS and Android using React Native and Expo frameworks.',
    syllabus: ['React Native layout structures', 'Expo routing & configurations', 'Native device API integrations', 'App store optimization & building'],
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'hover:border-emerald-500/40',
  },
  {
    id: 'video-editing',
    title: 'Video Editing & Content Creation',
    category: 'Production',
    icon: Video,
    level: 'Beginner to Professional',
    duration: '8 Weeks',
    students: '95+ Enrolled',
    description: 'Master storytelling through video. Learn timeline pacing, audio engineering, custom transitions, color grading, and dynamic text effects.',
    syllabus: ['Premiere Pro timeline pacing & cuts', 'After Effects keyframe animations', 'Color grading with cinematic LUTs', 'Sound design, mixing & EQ rules'],
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'hover:border-amber-500/40',
  },
]

export function CoursesCatalog() {
  const { ref, inView } = useInView({
    threshold: 0.05,
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
          {allCourses.map((course) => {
            const Icon = course.icon
            return (
              <motion.div
                key={course.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className={`p-6 rounded-2xl bg-background border border-border flex flex-col justify-between transition-all hover:shadow-lg ${course.borderColor} group`}
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
                        <li key={topic} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 bg-primary shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Enroll button */}
                <Link href="/contact" passHref legacyBehavior>
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-card border border-border hover:border-primary/50 hover:bg-primary/5 text-foreground hover:text-primary rounded-xl text-center text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    Request Syllabus
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
