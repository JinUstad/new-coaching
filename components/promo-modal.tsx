'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, BookOpen, Laptop, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export function PromoModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if the user has already dismissed the popup
    try {
      const isDismissed = localStorage.getItem('coaching_promo_dismissed')
      if (!isDismissed) {
        // Show popup after 1.8 seconds delay for better UX
        const timer = setTimeout(() => {
          setIsOpen(true)
        }, 1800)
        return () => clearTimeout(timer)
      }
    } catch (e) {
      // LocalStorage fallback
      setIsOpen(true)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    try {
      localStorage.setItem('coaching_promo_dismissed', 'true')
    } catch (e) {}
  }

  const flagshipCourses = [
    'Web Development Core',
    'Figma Systems & Auto Layout',
    'Frontend React Engineering',
    'Video Editing & Content Creation'
  ]

  const coreServices = [
    'Next.js Full-Stack Web Apps',
    'Figma UI/UX Vector Prototyping',
    'Technical SEO & Growth Sprints',
    'Cinematic Social Video Editing'
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-x-hidden">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-950/75 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 35 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 35 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative w-full max-w-2xl bg-background border border-border rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
          >
            {/* Corner Decorative Glowing elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-full blur-2xl pointer-events-none" />

            {/* Sticky Header with Close button */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-border/80 bg-background/95 backdrop-blur-sm z-10">
              <div className="flex items-center gap-1.5 text-primary">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider">Welcome Offer & Updates</span>
              </div>
              <button
                onClick={handleClose}
                className="p-1.5 rounded-lg border border-border hover:border-destructive hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-all flex items-center gap-1 cursor-pointer text-xs font-bold"
                aria-label="Close popup"
              >
                <X className="w-4 h-4" />
                <span>Dismiss</span>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow">
              {/* Promo Intro */}
              <div className="text-center sm:text-left">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground leading-tight mb-3">
                  Transform Your{' '}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Digital Skills
                  </span>
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Join DevforDevs Academy for hands-on, live-sprint technical coaching, or hire our Digital Studio to design, code, and deploy premium web applications.
                </p>
              </div>

              {/* Grid split: Courses vs Services */}
              <div className="grid sm:grid-cols-2 gap-6 pt-2">
                {/* Column 1: Courses */}
                <div className="p-5 rounded-xl bg-card border border-border/80 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-extrabold text-foreground mb-4 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      Academy Courses
                    </h3>
                    <ul className="space-y-2.5">
                      {flagshipCourses.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Link href="/courses" passHref legacyBehavior>
                      <a
                        onClick={handleClose}
                        className="w-full py-2.5 bg-primary hover:bg-primary/95 text-white text-xs font-bold rounded-lg text-center flex items-center justify-center gap-1 hover:shadow-lg transition-all cursor-pointer"
                      >
                        Explore Syllabus
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </Link>
                  </div>
                </div>

                {/* Column 2: Services */}
                <div className="p-5 rounded-xl bg-card border border-border/80 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-extrabold text-foreground mb-4 flex items-center gap-2">
                      <Laptop className="w-4 h-4 text-secondary" />
                      Studio Services
                    </h3>
                    <ul className="space-y-2.5">
                      {coreServices.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Link href="/contact" passHref legacyBehavior>
                      <a
                        onClick={handleClose}
                        className="w-full py-2.5 bg-card border border-border hover:border-secondary/30 hover:bg-secondary/5 text-foreground hover:text-secondary text-xs font-bold rounded-lg text-center flex items-center justify-center gap-1 transition-all cursor-pointer"
                      >
                        Book Consultation
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer bar */}
            <div className="px-6 py-4 border-t border-border/80 bg-card/60 flex flex-col sm:flex-row justify-between items-center gap-3">
              <span className="text-[10px] text-muted-foreground font-medium text-center sm:text-left">
                ✓ 1-on-1 Feedback Sprints • Day & Weekend Slots Available
              </span>
              <button
                onClick={handleClose}
                className="text-xs font-bold text-muted-foreground hover:text-foreground cursor-pointer transition-colors underline"
              >
                No thanks, dismiss updates
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
