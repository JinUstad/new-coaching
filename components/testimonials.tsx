'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star } from 'lucide-react'
import { useState } from 'react'

interface Testimonial {
  id: number
  name: string
  company: string
  content: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'Tech Startup Inc',
    content:
      'DevforDevs delivered an exceptional website that exceeded our expectations. Their attention to detail and professional approach made the entire process smooth and efficient.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Mike Chen',
    company: 'Digital Agency Pro',
    content:
      'Working with DevforDevs was a pleasure. They created a mobile app that our users absolutely love. The code quality and design are top-notch.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Davis',
    company: 'E-Commerce Solutions',
    content:
      'The SEO optimization work DevforDevs did for our site increased our organic traffic by 300%. Highly recommend for any digital marketing needs.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Wilson',
    company: 'Creative Studios',
    content:
      'Excellent UI/UX design work. DevforDevs understood our brand vision perfectly and delivered designs that are both beautiful and functional.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    company: 'Marketing Collective',
    content:
      'The video editing work was incredible! Our promotional videos got amazing engagement and DevforDevs was great to work with.',
    rating: 5,
  },
]

export function Testimonials() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (index: number) => {
    setCurrentIndex(index % testimonials.length)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            What Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from clients who have experienced our work and
            professionalism.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            key={testimonials[currentIndex].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border"
          >
            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Star
                    size={20}
                    className="fill-accent text-accent"
                  />
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <p className="text-xl text-foreground mb-8 leading-relaxed">
              "{testimonials[currentIndex].content}"
            </p>

            {/* Author Info */}
            <div>
              <h4 className="text-lg font-bold text-foreground">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-muted-foreground">
                {testimonials[currentIndex].company}
              </p>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors"
            >
              ← Previous
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
            >
              Next →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
