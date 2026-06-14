'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { ArrowRight, BookOpen, Calendar, Clock } from 'lucide-react'
import { blogs } from '@/lib/blogs-data'

export function LatestBlogs() {
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
      id="blog-preview"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-card border-t border-border overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>LEARN & GROW</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-4">
            LATEST INSIGHTS & BLOGS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical tutorials, visual system strategies, and editing workflows written to accelerate your creative engineering skills.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16"
        >
          {blogs.slice(0, 3).map((post) => (
            <motion.div
              key={post.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`group relative rounded-2xl bg-background border border-border p-6 flex flex-col justify-between transition-all overflow-hidden hover:shadow-xl ${post.borderColor}`}
            >
              {/* Background Accent glow */}
              <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/5 to-transparent opacity-40 z-0`} />

              <div className="relative z-10 flex-grow">
                {/* Category & Metadata */}
                <div className="flex justify-between items-center mb-5">
                  <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md bg-card border border-border ${post.color}`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-muted-foreground text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Author & Read Time */}
              <div className="relative z-10 border-t border-border/60 pt-4 mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary text-white font-bold text-xs flex items-center justify-center">
                    {post.author.avatar}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-foreground leading-none mb-0.5">
                      {post.author.name}
                    </h4>
                    <p className="text-[10px] text-muted-foreground leading-none">
                      {post.author.role}
                    </p>
                  </div>
                </div>
                
                <span className="flex items-center gap-1 text-[11px] text-muted-foreground font-medium bg-card px-2 py-1 rounded border border-border shrink-0">
                  <Clock className="w-3 h-3 text-secondary" />
                  {post.readTime}
                </span>
              </div>

              {/* Read Link */}
              <div className="mt-5 relative z-10">
                <Link href={`/blog#${post.id}`} passHref legacyBehavior>
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2.5 bg-card border border-border hover:border-primary/50 hover:bg-primary/5 text-foreground hover:text-primary rounded-xl text-center text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/blog" passHref legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg transition-shadow cursor-pointer text-sm"
            >
              Explore the Main Blog
              <ArrowRight size={16} />
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
