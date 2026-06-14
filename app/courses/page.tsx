import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { CoursesHero } from '@/components/courses-hero'
import { CoursesCatalog } from '@/components/courses-catalog'
import { CoursesBenefits } from '@/components/courses-benefits'
import { CoursesSchedule } from '@/components/courses-schedule'
import { CoursesFaq } from '@/components/courses-faq'
import { CoursesCta } from '@/components/courses-cta'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Our Courses - GM Academy',
  description: 'Explore professional tuition programs offered by Gul Mohammad. Master Web Development, Figma layouts, React Frontend, UI/UX designing, Backend database servers, Full-Stack engineering, and App Development.',
}

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <CoursesHero />
        <CoursesCatalog />
        <CoursesBenefits />
        <CoursesSchedule />
        <CoursesFaq />
        <CoursesCta />
      </div>
      <Footer />
    </main>
  )
}
