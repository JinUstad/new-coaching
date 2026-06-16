'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Briefcase, Code, Heart, Play, Mail, ArrowUp, Phone } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    Services: [
      'Website Development',
      'Full Stack Development',
      'Mobile Apps',
      'UI/UX Design',
    ],
    Resources: [
      'Blog',
      'Tutorials',
      'Case Studies',
      'FAQ',
    ],
    Social: [
      'LinkedIn',
      'GitHub',
      'Instagram',
      'YouTube',
    ],
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid md:grid-cols-5 gap-12 mb-12">
            {/* Logo & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                DevforDevs
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Building digital experiences that drive results. Full-stack development,
                design, and digital marketing solutions.
              </p>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2">
                {footerLinks.Services.map((item) => (
                  <li key={item}>
                    <Link href="/services">
                      <span className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">
                        {item}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.Resources.map((item) => (
                  <li key={item}>
                    <Link href={item === 'FAQ' ? '/about#faq' : '/blog'}>
                      <span className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer">
                        {item}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="md:col-span-1"
            >
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+918512889586"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <span>+91 8512889586</span>
                </a>
                <a
                  href="mailto:gulmohammad8512@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 break-all"
                >
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <span>gulmohammad8512@gmail.com</span>
                </a>
                <div className="mt-2 text-xs text-muted-foreground border-t border-border/60 pt-3">
                  <div className="font-semibold text-foreground mb-1">Our Experience</div>
                  <p className="leading-relaxed">
                    5+ years of delivering high-performance full-stack web applications, custom UI/UX design, and hands-on developer training.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-px bg-border mb-8 origin-left"
          />

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-sm"
            >
              © 2026 DevforDevs. All Rights Reserved.
            </motion.p>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-background border border-border hover:border-primary hover:bg-primary/10 transition-colors group"
              title="Back to top"
            >
              <ArrowUp className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
