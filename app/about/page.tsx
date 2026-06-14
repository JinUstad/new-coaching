import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { AboutHero } from '@/components/about-hero'
import { AboutStory } from '@/components/about-story'
import { AboutValues } from '@/components/about-values'
import { AboutTeam } from '@/components/about-team'
import { AboutFaq } from '@/components/about-faq'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'About DevforDevs - Modern Design & Development',
  description: 'Learn about DevforDevs\'s story, values, team members, and find answers to frequently asked questions about our Next.js design, development, and marketing process.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutTeam />
        <AboutFaq />
      </div>
      <Footer />
    </main>
  )
}
