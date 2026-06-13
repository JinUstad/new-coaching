'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { Check, Sparkles } from 'lucide-react'

const pricingTiers = [
  {
    name: 'Starter Launch',
    price: '$499',
    period: 'Per Project',
    description: 'Perfect for landing pages, portfolio sites, and creative creators looking for a fast launch.',
    features: [
      'Single landing page design',
      'Figma UX prototyping',
      'Tailwind CSS v4 coding',
      'Basic SEO page tag setups',
      '5-day delivery window',
      '1 revision iteration cycle',
    ],
    popular: false,
    ctaText: 'Get Started',
  },
  {
    name: 'Growth Studio',
    price: '$1,499',
    period: 'Per Project',
    description: 'Best for startups, businesses, and creators needing custom web apps and backend services.',
    features: [
      'Up to 5 custom page designs',
      'Full-stack Next.js/Node.js setup',
      'Database integration (MongoDB)',
      'Technical SEO audit & indexing',
      '14-day delivery window',
      'Unlimited design revisions',
      '14 days post-launch support',
    ],
    popular: true,
    ctaText: 'Request Sprint',
  },
  {
    name: 'Enterprise Custom',
    price: 'Custom',
    period: 'Varies',
    description: 'For large SaaS platforms, e-commerce networks, and brands requiring continuous design & code.',
    features: [
      'Unlimited pages and scope scale',
      'Dedicated backend infrastructure',
      'Video production & motion graphics',
      'Lifetime technical updates',
      'Flexible sprint deliverables',
      '24/7 dedicated Slack channel',
    ],
    popular: false,
    ctaText: 'Book Audit Call',
  },
]

export function ServicesPricing() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-4">
            Transparent Pricing
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a plan that fits your business scale. No hidden fees, clear scope structures, and full source code ownership.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 items-stretch">
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 35 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl bg-card border p-8 flex flex-col justify-between transition-all hover:shadow-xl ${
                tier.popular
                  ? 'border-primary shadow-lg scale-102 lg:scale-105 z-10'
                  : 'border-border'
              }`}
            >
              {/* Popular tag overlay */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>MOST POPULAR</span>
                </div>
              )}

              <div>
                {/* Header */}
                <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-6">
                  {tier.description}
                </p>

                {/* Price block */}
                <div className="flex items-baseline gap-1.5 mb-8">
                  <span className="text-4xl sm:text-5xl font-extrabold text-foreground">{tier.price}</span>
                  <span className="text-muted-foreground text-sm font-semibold">/ {tier.period}</span>
                </div>

                {/* Features divider */}
                <div className="h-px bg-border/60 mb-8" />

                {/* Features list */}
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to action button */}
              <Link href="/contact" passHref legacyBehavior>
                <motion.a
                  whileTap={{ scale: 0.96 }}
                  className={`w-full py-3 rounded-xl text-center text-sm font-bold transition-all cursor-pointer block ${
                    tier.popular
                      ? 'bg-primary text-white hover:bg-primary/90 hover:shadow-md'
                      : 'bg-background border border-border text-foreground hover:border-primary/50 hover:bg-primary/5'
                  }`}
                >
                  {tier.ctaText}
                </motion.a>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
