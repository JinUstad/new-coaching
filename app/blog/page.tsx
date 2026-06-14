'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { blogs, BlogPost } from '@/lib/blogs-data'
import { Calendar, Clock, ArrowLeft, Filter, BookOpen, X, Share2, CornerDownRight } from 'lucide-react'
import Link from 'next/link'

type FilterCategory = 'All' | 'Development' | 'Design' | 'Production' | 'Academy'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('All')
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null)
  const [copiedLink, setCopiedLink] = useState(false)

  // Listen for hash parameter to auto-open specific blog from homepage links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash) {
        const found = blogs.find((b) => b.id === hash)
        if (found) {
          setActiveArticle(found)
        }
      }
    }

    // Run on mount
    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const filteredBlogs = selectedCategory === 'All'
    ? blogs
    : blogs.filter((b) => b.category === selectedCategory)

  const categories: FilterCategory[] = ['All', 'Development', 'Design', 'Production']

  const handleShare = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    const url = `${window.location.origin}/blog#${id}`
    navigator.clipboard.writeText(url)
    setCopiedLink(true)
    setTimeout(() => setCopiedLink(false), 2000)
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col overflow-x-hidden relative">
      <Navbar />

      {/* Page Content */}
      <div className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold mb-4"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>THE ACADEMY JOURNAL</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-extrabold text-foreground mb-4"
            >
              Latest Insights & Tutorials
            </motion.h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Deep dives into modern tech stacks, visual design components, video splicing principles, and online growth strategies.
            </motion.p>
          </div>

          {/* Filters Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2.5 mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mr-1 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5" />
              Filter by:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-primary border-primary text-white shadow-md shadow-primary/20'
                    : 'bg-card border-border hover:border-primary/40 text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Blogs Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredBlogs.map((post) => (
                <motion.div
                  layout
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setActiveArticle(post)}
                  className={`group rounded-2xl bg-card border border-border p-6 flex flex-col justify-between cursor-pointer transition-all hover:shadow-xl ${post.borderColor}`}
                >
                  <div>
                    {/* Meta info */}
                    <div className="flex justify-between items-center mb-5">
                      <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md bg-background border border-border ${post.color}`}>
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-4">
                      {post.excerpt}
                    </p>
                  </div>

                  <div>
                    {/* Bottom Metadata row */}
                    <div className="border-t border-border/60 pt-4 flex items-center justify-between">
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

                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => handleShare(post.id, e)}
                          className="p-1.5 rounded-lg border border-border hover:border-primary bg-background text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                          title="Copy Link"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                        </button>
                        <span className="flex items-center gap-1 text-[11px] text-muted-foreground font-semibold bg-background px-2.5 py-1 rounded border border-border">
                          <Clock className="w-3.5 h-3.5 text-secondary" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Arrow Indicator */}
                    <div className="mt-4 flex justify-end">
                      <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:underline">
                        Read Article
                        <CornerDownRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredBlogs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground">No articles found matching this category.</p>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />

      {/* Copy Alert Toast */}
      <AnimatePresence>
        {copiedLink && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-slate-900 border border-white/10 text-white font-semibold text-xs px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2"
          >
            <span>✓ Link copied to clipboard! Share it anywhere.</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Premium overlay Modal Reader */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-3xl max-h-[85vh] bg-background border border-border rounded-2xl shadow-2xl overflow-y-auto flex flex-col"
            >
              {/* Header controls (sticky on top of modal scroll) */}
              <div className="sticky top-0 bg-background/95 backdrop-blur-md border-b border-border/80 px-6 py-4 flex items-center justify-between z-20">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Journal
                </button>
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={(e) => handleShare(activeArticle.id, e)}
                    className="p-2 rounded-xl border border-border bg-card hover:bg-primary/10 hover:border-primary text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    Share Link
                  </button>
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="p-2 rounded-xl bg-card border border-border hover:border-destructive hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Modal scroll content */}
              <div className="p-6 sm:p-10 z-10">
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-6">
                  <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md bg-card border border-border ${activeArticle.color}`}>
                    {activeArticle.category}
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    {activeArticle.date}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-border" />
                  <span className="flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    {activeArticle.readTime}
                  </span>
                </div>

                {/* Main title */}
                <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground leading-tight mb-8">
                  {activeArticle.title}
                </h2>

                {/* Excerpt panel */}
                <div className="p-5 rounded-xl bg-card border border-border/80 text-muted-foreground italic text-sm leading-relaxed mb-8 border-l-4 border-l-primary">
                  "{activeArticle.excerpt}"
                </div>

                {/* Author Info header block */}
                <div className="flex items-center gap-3 bg-card border border-border/50 p-4 rounded-xl mb-8">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary text-white font-bold flex items-center justify-center shadow-inner">
                    {activeArticle.author.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-foreground">
                      {activeArticle.author.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {activeArticle.author.role}
                    </p>
                  </div>
                </div>

                {/* Main Paragraphs */}
                <div className="space-y-6 text-foreground/90 text-base leading-relaxed tracking-normal">
                  {activeArticle.content.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Closing CTA */}
                <div className="border-t border-border/80 pt-8 mt-12 text-center">
                  <h4 className="font-extrabold text-sm text-foreground mb-2">Want personal hands-on training?</h4>
                  <p className="text-xs text-muted-foreground mb-5 max-w-md mx-auto">
                    Gul Mohammad holds 1-on-1 feedback sessions, review sprints, and video cutting programs in the academy courses.
                  </p>
                  <Link href="/contact" passHref legacyBehavior>
                    <a
                      onClick={() => setActiveArticle(null)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-xs font-bold rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all cursor-pointer"
                    >
                      Connect & Apply Now
                    </a>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  )
}
