import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { ContactHero } from '@/components/contact-hero'
import { ContactInfo } from '@/components/contact-info'
import { ContactProcess } from '@/components/contact-process'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Contact DevforDevs - Let\'s Work Together',
  description: 'Reach out to DevforDevs. Find our workspace location, operational hours, and direct communication channels.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <ContactHero />
        <ContactInfo />
        <ContactProcess />
      </div>
      <Footer />
    </main>
  )
}
