'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const teamMembers = [
  {
    name: 'Gul Mohammad',
    role: 'Founder & Principal Engineer',
    avatar: '/avatar_gul.png',
    bio: 'Full Stack expert with 5+ years building modern digital solutions. Specializes in Next.js, Node.js, and server architectures.',
  },
  {
    name: 'Sarah Vance',
    role: 'Senior UI/UX Architect',
    avatar: '/avatar_sarah.png',
    bio: 'Crafts high-converting, accessible user interfaces. Experienced in establishing Figma design systems for fast-growing startups.',
  },
  {
    name: 'Vikram Malhotra',
    role: 'Lead SEO & Growth Strategist',
    avatar: '/avatar_vikram.png',
    bio: 'Optimizes content strategies and technical setups to guarantee top page rankings on Google and boost organic conversions.',
  },
  {
    name: 'Emma Watson',
    role: 'Lead Video & Motion Designer',
    avatar: '/avatar_emma.png',
    bio: 'Creates engaging brand storytelling and high-converting video advertisements for social channels and websites.',
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
              {/* Member Avatar (Image Graphic) */}
              <div className="w-24 h-24 rounded-full mb-6 flex items-center justify-center overflow-hidden border-2 border-border shadow-md group-hover:scale-105 group-hover:border-primary/50 transition-all duration-300 relative bg-muted select-none">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-secondary mb-4">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                {member.bio}
              </p>

              {/* Hover highlight background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none group-hover:bg-primary/10 transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
