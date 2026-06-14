'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { courses } from '@/lib/courses-data'
import {
  BookOpen,
  Clock,
  Users,
  Globe,
  PenTool,
  Code2,
  Compass,
  Server,
  Cpu,
  Smartphone,
  Video,
  CheckCircle2,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Info
} from 'lucide-react'
import Link from 'next/link'

// Map icon string names to Lucide icons
const iconMap: { [key: string]: any } = {
  BookOpen,
  Clock,
  Users,
  Globe,
  PenTool,
  Code2,
  Compass,
  Server,
  Cpu,
  Smartphone,
  Video
}

export default function CourseDetailsClient({ courseId }: { courseId: string }) {
  const course = courses.find((c) => c.id === courseId)

  const [expandedSyllabus, setExpandedSyllabus] = useState<number | null>(0)

  if (!course) {
    return (
      <main className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center pt-32 pb-24 px-4 text-center">
          <Info className="w-16 h-16 text-destructive mb-6" />
          <h1 className="text-3xl font-extrabold mb-4">Course Not Found</h1>
          <p className="text-muted-foreground mb-8 max-w-md">
            We couldn't find the course program you are looking for. It might have been updated or renamed.
          </p>
          <Link href="/courses">
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all cursor-pointer">
              <ArrowLeft className="w-4 h-4" />
              Back to Catalog
            </span>
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const IconComponent = iconMap[course.iconName] || BookOpen

  const handleToggleSyllabus = (index: number) => {
    setExpandedSyllabus(expandedSyllabus === index ? null : index)
  }



  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col overflow-x-hidden relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-border overflow-hidden">
        {/* Background glow specific to course branding */}
        <div className={`absolute top-0 left-0 right-0 h-96 bg-gradient-to-b ${course.colorFrom || 'from-primary/5'} ${course.colorTo || 'to-transparent'} opacity-40 z-0 pointer-events-none`} />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Back breadcrumb */}
          <Link href="/courses" className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors mb-6 cursor-pointer group">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Back to Syllabus Programs
          </Link>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
              {/* Category Badge & Level */}
              <div className="flex flex-wrap gap-2.5 items-center">
                <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-md bg-card border border-border ${course.color}`}>
                  {course.category}
                </span>
                <span className="text-xs text-muted-foreground bg-card px-2.5 py-1 rounded-md border border-border font-medium">
                  {course.level}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground leading-tight tracking-tight">
                {course.title}
              </h1>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {course.description}
              </p>

              {/* Badges Row */}
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground bg-card border border-border px-3.5 py-2 rounded-xl">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span>Duration: <strong className="text-foreground">{course.duration}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground bg-card border border-border px-3.5 py-2 rounded-xl">
                  <Users className="w-4 h-4 text-secondary shrink-0" />
                  <span>Enrolled: <strong className="text-foreground">{course.students}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground bg-card border border-border px-3.5 py-2 rounded-xl">
                  <div className={`w-4 h-4 rounded flex items-center justify-center ${course.bgColor}`}>
                    <IconComponent className={`w-3 h-3 ${course.color}`} />
                  </div>
                  <span>Focus: <strong className="text-foreground">{course.category}</strong></span>
                </div>
              </div>
            </div>

            {/* Icon Graphic box on Hero */}
            <div className="lg:col-span-4 hidden lg:flex justify-end pt-6">
              <motion.div
                initial={{ rotate: -5, scale: 0.95 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`w-36 h-36 rounded-2xl ${course.bgColor} border border-border/80 flex items-center justify-center shadow-lg relative group`}
              >
                <IconComponent className={`w-16 h-16 ${course.color} transition-transform group-hover:scale-110`} />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-white">
                  <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content column (Overview, Learnings, Syllabus) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Overview */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Program Overview</h2>
                <div className="w-16 h-1 bg-primary rounded-full" />
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                  {course.longDescription}
                </p>
              </div>

              {/* What You'll Learn */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">What You'll Achieve</h2>
                <div className="w-16 h-1 bg-primary rounded-full mb-2" />
                <div className="grid sm:grid-cols-2 gap-4">
                  {course.whatYouWillLearn.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/90 font-medium leading-normal">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Syllabus Accordion */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Syllabus Breakdown</h2>
                  <div className="w-16 h-1 bg-primary rounded-full mb-3" />
                  <p className="text-sm text-muted-foreground mt-2">
                    Our weekly sprint checkpoints ensure hands-on milestone delivery.
                  </p>
                </div>

                <div className="space-y-3">
                  {course.syllabus.map((week, index) => {
                    const isExpanded = expandedSyllabus === index
                    return (
                      <div
                        key={index}
                        className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                          isExpanded ? 'bg-card border-primary/40 shadow-md' : 'bg-card border-border hover:border-primary/20'
                        }`}
                      >
                        <button
                          onClick={() => handleToggleSyllabus(index)}
                          className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer"
                        >
                          <div className="space-y-1">
                            <span className={`text-[10px] font-extrabold uppercase tracking-widest ${course.color}`}>
                              {week.week}
                            </span>
                            <h3 className="text-base sm:text-lg font-bold text-foreground">
                              {week.title}
                            </h3>
                          </div>
                          <span className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center shrink-0">
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4 text-primary" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-primary" />
                            )}
                          </span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{
                                height: 'auto',
                                opacity: 1,
                                transition: { height: { duration: 0.3, ease: 'easeOut' }, opacity: { duration: 0.2 } },
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                                transition: { height: { duration: 0.25, ease: 'easeIn' }, opacity: { duration: 0.15 } },
                              }}
                            >
                              <div className="p-5 pt-0 border-t border-border/60 bg-background/40">
                                <ul className="space-y-2.5 mt-4">
                                  {week.topics.map((topic, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                                      <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${course.bgColor.split(' ')[0] || 'bg-primary'}`} style={{ backgroundColor: 'currentColor' }} />
                                      <span>{topic}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Right Column (Prerequisites, Tools, Form) */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Technical Stack Card */}
              <div className="p-6 rounded-2xl bg-card border border-border space-y-5">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <Cpu className="w-4.5 h-4.5 text-secondary" />
                  Program Stack & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {course.tools.map((tool) => (
                    <span key={tool} className="px-3 py-1.5 rounded-lg bg-background border border-border text-xs font-semibold text-foreground/80">
                      {tool}
                    </span>
                  ))}
                </div>
                
                <div className="h-px bg-border" />

                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <Info className="w-4.5 h-4.5 text-primary" />
                  Prerequisites
                </h3>
                <ul className="space-y-2">
                  {course.prerequisites.map((prereq, index) => (
                    <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-secondary shrink-0 mt-2" />
                      <span>{prereq}</span>
                    </li>
                  ))}
                </ul>
              </div>



            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
