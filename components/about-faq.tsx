'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'What services does GM Digital provide?',
    answer:
      'We offer complete end-to-end digital creation. This includes full-stack web and mobile development (primarily using Next.js, React, and Node.js), UI/UX system design in Figma, digital marketing & SEO audit strategy, and professional video editing/motion graphics for brands and social channels.',
  },
  {
    question: 'Who will be working on my project?',
    answer:
      'Gul Mohammad oversees all engineering, system architecture, and quality assurance. Depending on the size, scale, and requirements of the project, selected specialists from our vetted network of creators (such as UI/UX designers, copywriters, or video editors) collaborate directly to ensure premium delivery.',
  },
  {
    question: 'How do you handle project communication and updates?',
    answer:
      'Transparency is key. We set up shared Slack/Discord channels and offer weekly demo releases on a staging URL. You will see progress step-by-step and have a direct line of communication with Gul and the team.',
  },
  {
    question: 'Do I get full ownership of the code and design files?',
    answer:
      'Yes, 100%. Once final payments are settled, all source code, Figma design files, assets, databases, and hosting controls are fully transferred to you. We write clean, commented code so that any team can easily maintain it in the future.',
  },
  {
    question: 'What is your timeline for a typical web development project?',
    answer:
      'A standard marketing or landing page project takes 1 to 2 weeks, while a more complex custom SaaS MVP or full e-commerce system averages 4 to 8 weeks. We define precise milestones and deliverables in our initial proposal so you know exactly when to expect each phase.',
  },
]

function FaqItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card transition-colors duration-300 hover:border-primary/50">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left font-bold text-foreground text-sm sm:text-lg focus:outline-none transition-colors"
      >
        <span className="flex items-center gap-3 pr-4">
          <HelpCircle className="w-5 h-5 text-primary shrink-0" />
          {question}
        </span>
        <span className="w-8 h-8 rounded-lg bg-background flex items-center justify-center shrink-0 border border-border">
          {isOpen ? (
            <Minus className="w-4 h-4 text-primary" />
          ) : (
            <Plus className="w-4 h-4 text-primary" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: { height: { duration: 0.35, ease: 'easeOut' }, opacity: { duration: 0.25 } },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { height: { duration: 0.3, ease: 'easeIn' }, opacity: { duration: 0.15 } },
            }}
            className="overflow-hidden bg-background/50"
          >
            <div className="p-5 border-t border-border/60 text-muted-foreground text-sm sm:text-base leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function AboutFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We have answers. If you do not see your query here, feel free to reach out.
          </p>
        </div>

        {/* FAQs list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
