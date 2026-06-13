import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Statistics } from '@/components/statistics'
import { WhyChooseMe } from '@/components/why-choose-me'
import { Courses } from '@/components/courses'
import { Testimonials } from '@/components/testimonials'
import { Process } from '@/components/process'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Statistics />
      <WhyChooseMe />
      <Courses />
      <Testimonials />
      <Process />
      <Footer />
    </main>
  )
}
