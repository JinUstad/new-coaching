import { courses } from '@/lib/courses-data'
import CourseDetailsClient from './course-details-client'

interface PageProps {
  params: Promise<{ id: string }>
}

// Next.js 16 Dynamic Metadata Resolution
export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const course = courses.find((c) => c.id === id)
  
  return {
    title: course ? `${course.title} - DevforDevs Academy` : 'Course Detail - DevforDevs',
    description: course ? course.description : 'Explore professional coaching syllabus programs offered by DevforDevs.',
  }
}

// Next.js 16 Dynamic Route Page
export default async function CourseDetailPage({ params }: PageProps) {
  const { id } = await params
  return <CourseDetailsClient courseId={id} />
}
