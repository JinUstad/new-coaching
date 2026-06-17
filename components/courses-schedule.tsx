'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sun, Calendar, MessageSquare, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function CoursesSchedule() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const schedules = [
    {
      title: 'Weekday Day Classes',
      tag: 'Regular Sprints',
      description: 'Accelerate your career with structured, daily lessons. Best for students looking for intensive daily commitment and rapid progress.',
      features: [
        'Monday – Friday schedules',
        'Daily homework reviews & feedback',
        'Direct async support during the day',
        'Intensive hands-on labs & tasks'
      ],
      icon: Sun,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      title: 'Weekend Classes',
      tag: 'Professional Track',
      description: 'Designed for working professionals. Level up your engineering skills without quitting your current job.',
      features: [
        'Saturday & Sunday workshops',
        'Live group code & design reviews',
        'Weekly milestones & deliverables',
        'Collaborative pair-programming sessions'
      ],
      icon: Calendar,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      title: 'English Speaking & Technical Pitching',
      tag: 'Coming Soon',
      description: 'Master the soft skills needed to work with international clients. Learn interview pacing, async writing, and visual deck pitching.',
      features: [
        'Mock technical interviews & Q&As',
        'Asynchronous communication & slack etiquette',
        'Resume & portfolio review workshops',
        'Client-ready presentation mock drills'
      ],
      icon: MessageSquare,
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
      isComingSoon: true,
    }
  ]

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>FLEXIBLE STUDY PLAN</span>
          </motion.div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-4">
            WEEKDAY & WEEKEND SCHEDULES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer day-sprint schedules for full-time learners, weekend workshops for working professionals, and upcoming technical communication courses.
          </p>
        </div>

        {/* Schedule Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
        >
          {schedules.map((sched, index) => {
            const Icon = sched.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className={`group relative rounded-2xl bg-card border border-border p-6 flex flex-col justify-between transition-all hover:shadow-xl hover:border-primary/40 ${
                  index === 2 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Icon & Tag */}
                  <div className="flex justify-between items-center mb-6">
                    <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md bg-background border border-border ${sched.isComingSoon ? 'text-amber-500 border-amber-500/20' : 'text-primary border-primary/20'}`}>
                      {sched.tag}
                    </span>
                    <div className={`w-10 h-10 rounded-lg ${sched.bgColor} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${sched.color}`} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                    {sched.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {sched.description}
                  </p>

                  {/* List highlights */}
                  <div className="border-t border-border/60 pt-5 mb-8">
                    <ul className="space-y-2">
                      {sched.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                          <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${sched.isComingSoon ? 'bg-amber-500' : 'bg-primary'}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer action or teaser */}
                <div className="mt-auto">
                  {sched.isComingSoon ? (
                    <div className="w-full py-3 bg-amber-500/5 border border-amber-500/10 rounded-xl text-center text-xs font-semibold text-amber-500 select-none">
                      Pre-Registrations Opening Soon
                    </div>
                  ) : (
                    <Link href="/contact" passHref legacyBehavior>
                      <motion.a
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 bg-background border border-border hover:border-primary/50 hover:bg-primary/5 text-foreground hover:text-primary rounded-xl text-center text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        Inquire Class Timings
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </motion.a>
                    </Link>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
