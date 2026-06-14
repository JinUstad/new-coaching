'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

export function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show buttons after a small delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const phoneNumber = '8512889586'
  const formattedWhatsAppUrl = `https://wa.me/91${phoneNumber}`
  const formattedCallUrl = `tel:+91${phoneNumber}`

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
          {/* WhatsApp Button */}
          <motion.a
            href={formattedWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba59] transition-colors group cursor-pointer"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
          >
            {/* Pulsing glow effect */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
            
            {/* Custom WhatsApp Icon or MessageCircle */}
            <MessageCircle className="w-7 h-7 relative z-10 fill-current" />

            {/* Hover Tooltip */}
            <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-md">
              WhatsApp Us
            </span>
          </motion.a>

          {/* Call Button */}
          <motion.a
            href={formattedCallUrl}
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
            className="relative flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-2xl hover:bg-primary/95 transition-colors group cursor-pointer"
            aria-label="Call Us Directly"
            title="Call Us Directly"
          >
            {/* Pulsing glow effect */}
            <span className="absolute inset-0 rounded-full bg-primary opacity-30 animate-ping [animation-delay:0.2s]" />

            <Phone className="w-6 h-6 relative z-10" />

            {/* Hover Tooltip */}
            <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-md">
              Call Us: 8512889586
            </span>
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  )
}
