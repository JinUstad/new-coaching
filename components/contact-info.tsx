'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MessageSquare, MapPin, Clock, Globe } from 'lucide-react'

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
)

export function ContactInfo() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  })

  const socialLinks = [
    { icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
    { icon: GithubIcon, label: 'GitHub', href: '#' },
    { icon: TwitterIcon, label: 'Twitter', href: '#' },
  ]

  return (
    <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Location & Map Section (Replaces Form) */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col space-y-6"
          >
            <div className="p-8 rounded-2xl bg-background border border-border flex flex-col justify-between h-full hover:border-primary/40 transition-colors group">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  Our Studio Location
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  DevforDevs operates as a hybrid studio. We host design sprints and consultation sessions at our collaborative tech workspace.
                </p>

                {/* Stylized Visual Mock Map */}
                <motion.a
                  href="https://share.google/0t65AmET8QjgGfcKs"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.01 }}
                  className="relative w-full h-56 rounded-xl border border-border bg-slate-900 overflow-hidden mb-6 flex items-center justify-center group cursor-pointer block"
                >
                  {/* Grid background representing map lines */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
                  {/* Abstract roads lines using CSS */}
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10" />
                  <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white/10" />
                  <div className="absolute left-2/3 top-0 bottom-0 w-px bg-white/10" />

                  {/* Pulsing Pin Indicator */}
                  <div className="relative flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 2.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute w-8 h-8 rounded-full bg-primary/30"
                    />
                    <div className="w-4 h-4 rounded-full bg-primary border-2 border-white relative z-10 shadow-lg" />
                  </div>

                  {/* Coordinates Overlay */}
                  <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-[11px] font-mono text-white/90">
                    LAT: 28.6276° N | LON: 77.2166° E
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                    <span className="bg-primary text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-lg flex items-center gap-1.5 border border-white/10">
                      Open in Google Maps ↗
                    </span>
                  </div>
                </motion.a>

                {/* Details List */}
                <div className="space-y-3">
                  <div className="flex gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <a
                      href="https://share.google/0t65AmET8QjgGfcKs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground font-medium hover:text-primary transition-colors cursor-pointer"
                    >
                      DevforDevs Space, Delhi, India (Click to open map)
                    </a>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <Clock className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Monday – Saturday: 9:00 AM – 7:00 PM (IST)
                    </span>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <Globe className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Real-time interactive and hands-on coaching classes
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Direct Channels & Contacts */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-between space-y-6"
          >
            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/918512889586"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="block p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <MessageSquare className="w-7 h-7 text-green-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground mb-0.5">Quick WhatsApp Chat</h4>
                  <p className="text-muted-foreground text-sm">+91 8512889586 — instant response</p>
                </div>
              </div>
            </motion.a>

            {/* Email Contact */}
            <motion.a
              href="mailto:devfordevs001@gmail.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="block p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground mb-0.5">Direct Email Desk</h4>
                  <p className="text-muted-foreground text-sm">devfordevs001@gmail.com — reply within 12 hours</p>
                </div>
              </div>
            </motion.a>

            {/* Call Center */}
            <motion.a
              href="tel:+918512889586"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="block p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Phone className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground mb-0.5">Voice Consultation</h4>
                  <p className="text-muted-foreground text-sm">Call us directly at +91 8512889586</p>
                </div>
              </div>
            </motion.a>

            {/* Connect block */}
            <div className="p-6 rounded-2xl bg-background border border-border flex flex-col justify-between">
              <h4 className="font-bold text-foreground mb-3">Connect on Social Portfolios</h4>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-card border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-colors group"
                    title={label}
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
