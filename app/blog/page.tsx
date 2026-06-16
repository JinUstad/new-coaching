'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { blogs, BlogPost } from '@/lib/blogs-data'
import { Calendar, Clock, ArrowLeft, Filter, BookOpen, X, Share2, CornerDownRight, Sparkles, Code, Layout, Cpu } from 'lucide-react'
import Link from 'next/link'

function ExpressSubscriptionForm() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubscribed(true)
      setEmail('')
    }, 1200)
  }

  return (
    <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-pink-500/10 border border-primary/20 relative overflow-hidden shadow-2xl mt-16">
      <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -left-24 -bottom-24 w-72 h-72 rounded-full bg-secondary/20 blur-3xl" />
      
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {!subscribed ? (
          <>
            <h3 className="text-3xl font-extrabold text-foreground mb-4">
              Get DevforDevs Express Weekly
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base mb-8 leading-relaxed">
              Join 5,000+ developers receiving our premium micro-learning snippets, AI prompts, and Figma files every Tuesday. Free forever, unsubscribe in one click.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-5 py-3.5 rounded-xl bg-background border border-border focus:border-primary focus:outline-none text-sm transition-all shadow-inner text-foreground placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3.5 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all text-sm cursor-pointer disabled:opacity-50 shrink-0"
              >
                {loading ? 'Subscribing...' : 'Subscribe Now'}
              </button>
            </form>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-6 flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mb-6 animate-pulse">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-extrabold text-foreground mb-2">You're Subscribed!</h3>
            <p className="text-muted-foreground text-sm sm:text-base mb-6">
              Welcome to the DevforDevs Express feed. Check your inbox this Tuesday for your first micro-tutorial drop!
            </p>
            <button
              onClick={() => setSubscribed(false)}
              className="text-xs font-semibold text-primary hover:underline"
            >
              Subscribe another email
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

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
          {/* DEVFORDEVS EXPRESS SECTIONS */}
          <div className="mt-32 pt-24 border-t border-border/80">
            {/* Section 1: Intro Hub */}
            <div className="mb-24">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>MICRO-LEARNING ECOSYSTEM</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-4">
                  DevforDevs Express
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A high-velocity micro-learning program delivering actionable code, design systems, and AI workflows straight to your screen in under 5 minutes.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-2xl bg-card border border-border flex flex-col justify-between hover:border-blue-500/40 transition-all shadow-md cursor-pointer"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6">
                      <Code className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Code Bites</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      Bite-sized, production-ready React hooks, API patterns, and Tailwind v4 CSS variables. Copy, paste, and deploy in minutes.
                    </p>
                  </div>
                  <div className="text-xs font-semibold text-blue-500 flex items-center gap-1.5">
                    <span>Weekly delivery</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-2xl bg-card border border-border flex flex-col justify-between hover:border-purple-500/40 transition-all shadow-md cursor-pointer"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6">
                      <Layout className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Design Drops</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      Figma UI kits, responsive layout guidelines, auto-layout variables, and micro-interaction tokens designed to eliminate design-to-code friction.
                    </p>
                  </div>
                  <div className="text-xs font-semibold text-purple-500 flex items-center gap-1.5">
                    <span>Weekly delivery</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-2xl bg-card border border-border flex flex-col justify-between hover:border-teal-500/40 transition-all shadow-md cursor-pointer"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-500 flex items-center justify-center mb-6">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">AI Workflows</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      Advanced Cursor prompts, v0.dev UI orchestration blueprints, and LLM automation recipes to multiply your coding speed.
                    </p>
                  </div>
                  <div className="text-xs font-semibold text-teal-500 flex items-center gap-1.5">
                    <span>Weekly delivery</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Section 2: Perks & Features */}
            <div className="mb-24 py-16 px-8 rounded-3xl bg-gradient-to-br from-card to-background border border-border relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
              <div className="relative z-10 max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-foreground mb-4">
                    The DevforDevs Express Advantage
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
                    Why developers, designers, and visual creators are joining our fast-paced tech digest.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="p-6">
                    <div className="text-4xl font-extrabold text-primary mb-3">0%</div>
                    <h4 className="font-bold text-foreground mb-2">Fluff & Noise</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      No spam, no lengthy theoretical essays. Only actionable insights, clean files, and verified code snippets.
                    </p>
                  </div>
                  <div className="p-6 border-y md:border-y-0 md:border-x border-border/80">
                    <div className="text-4xl font-extrabold text-secondary mb-3">10x</div>
                    <h4 className="font-bold text-foreground mb-2">AI Acceleration</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Stay updated with daily advancements in Cursor workflows, LLM code integrations, and generative tools.
                    </p>
                  </div>
                  <div className="p-6">
                    <div className="text-4xl font-extrabold text-emerald-500 mb-3">1:1</div>
                    <h4 className="font-bold text-foreground mb-2">Code Feedback</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Submit your components or design files for live audit runs and expert optimizations from DevforDevs coaches.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Subscription CTA */}
            <ExpressSubscriptionForm />
          </div>
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
                    DevforDevs holds 1-on-1 feedback sessions, review sprints, and video cutting programs in the academy courses.
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
