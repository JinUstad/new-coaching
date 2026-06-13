import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { ServicesHero } from '@/components/services-hero'
import { ServicesList } from '@/components/services-list'
import { ServicesTech } from '@/components/services-tech'
import { ServicesProcess } from '@/components/services-process'
import { ServicesPricing } from '@/components/services-pricing'
import { ServicesCta } from '@/components/services-cta'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Our Services - GM Digital',
  description: 'Explore the digital services provided by Gul Mohammad and the GM Digital collective, including Next.js web application development, Figma UI/UX prototyping, SEO, and video editing.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <ServicesHero />
        <ServicesList />
        <ServicesTech />
        <ServicesProcess />
        <ServicesPricing />
        <ServicesCta />
      </div>
      <Footer />
    </main>
  )
}
