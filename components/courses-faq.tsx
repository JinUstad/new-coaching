'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'Who are these tuition courses designed for?',
    answer:
      'Our courses are built for absolute beginners looking to break into digital development or visual design, as well as intermediate developers/designers trying to master production-grade systems (such as Next.js server actions, Figma design tokens, or advanced video sound systems).',
  },
  {
    question: 'What is the schedule format of the classes?',
    answer:
      'We run a hybrid sprint format: pre-recorded lectures are released at the start of each week, and we hold live code/design review sessions on weekends. You also schedule 1-on-1 feedback slots with Gul Mohammad to review your personal projects.',
  },
  {
    question: 'What if I get stuck while working on my coding homework?',
    answer:
      'No one learns alone here. You can post your code repos, Figma drafts, or video timelines directly in our private Discord/Slack workspaces. Gul and our senior collaborators provide walkthrough feedback within 12 hours.',
  },
  {
    question: 'Do I work on real client projects during the course?',
    answer:
      'Yes! The final 4 weeks of the advanced Frontend, UI/UX, and Full-Stack tracks involve working on real-world freelance briefs or simulated client sprints, giving you actual portfolio experience before graduation.',
  },
  {
    question: 'Do you offer certificates and portfolio reviews?',
    answer:
      'Absolutely. Upon successfully building and launching all project sprint checkpoints, you receive a digital certificate, a detailed technical portfolio review, and a personal recommendation letter to showcase to recruiters.',
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

export function CoursesFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-4">
            Tuition FAQs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to commonly asked questions about tuition packages, course formats, and cohort options.
          </p>
        </div>

        {/* FAQs List */}
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
