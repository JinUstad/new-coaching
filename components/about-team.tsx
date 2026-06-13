'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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

const teamMembers = [
  {
    name: 'Gul Mohammad',
    role: 'Founder & Principal Engineer',
    initials: 'GM',
    colorFrom: 'from-blue-500',
    colorTo: 'to-indigo-600',
    bio: 'Full Stack expert with 5+ years building modern digital solutions. Specializes in Next.js, Node.js, and server architectures.',
    socials: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
  {
    name: 'Sarah Vance',
    role: 'Senior UI/UX Architect',
    initials: 'SV',
    colorFrom: 'from-purple-500',
    colorTo: 'to-pink-600',
    bio: 'Crafts high-converting, accessible user interfaces. Experienced in establishing Figma design systems for fast-growing startups.',
    socials: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
  {
    name: 'Vikram Malhotra',
    role: 'Lead SEO & Growth Strategist',
    initials: 'VM',
    colorFrom: 'from-orange-500',
    colorTo: 'to-red-600',
    bio: 'Optimizes content strategies and technical setups to guarantee top page rankings on Google and boost organic conversions.',
    socials: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
  {
    name: 'Emma Watson',
    role: 'Lead Video & Motion Designer',
    initials: 'EW',
    colorFrom: 'from-teal-400',
    colorTo: 'to-emerald-600',
    bio: 'Creates engaging brand storytelling and high-converting video advertisements for social channels and websites.',
    socials: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
]

export function AboutTeam() {
  const { ref, inView } = useInView({
    threshold: 0.1,
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
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-4">
            Meet the Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The collaborative creative network combining code, design, SEO, and video marketing.
          </p>
        </div>

        {/* Members Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl bg-card border border-border p-6 flex flex-col items-center text-center transition-all overflow-hidden hover:border-primary/50 hover:shadow-xl"
            >
              {/* Member Avatar (Initials Graphic) */}
              <div className="w-24 h-24 rounded-full mb-6 flex items-center justify-center text-3xl font-extrabold text-white bg-gradient-to-tr shadow-md select-none group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                <span className={`absolute inset-0 bg-gradient-to-tr ${member.colorFrom} ${member.colorTo}`} />
                <span className="relative z-10">{member.initials}</span>
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-secondary mb-4">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Social Connections */}
              <div className="flex gap-4 mt-auto relative z-10">
                <a
                  href={member.socials.linkedin}
                  className="p-2 rounded-lg bg-background border border-border hover:border-primary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={member.socials.github}
                  className="p-2 rounded-lg bg-background border border-border hover:border-primary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`${member.name}'s GitHub`}
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={member.socials.twitter}
                  className="p-2 rounded-lg bg-background border border-border hover:border-primary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`${member.name}'s Twitter`}
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              </div>

              {/* Hover highlight background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none group-hover:bg-primary/10 transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
