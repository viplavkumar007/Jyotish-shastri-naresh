import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs } from '../data/siteContent'

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`faq-item ${isOpen ? 'open' : ''}`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-full bg-gold-900/50 border border-gold-700/40 flex items-center justify-center text-gold-400 text-xs font-sans font-bold flex-shrink-0">
            {index + 1}
          </span>
          <span className="font-hindi text-[#4b2f1a] text-base md:text-lg font-medium">{faq.q}</span>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gold-400 flex-shrink-0 text-xl"
        >
          ⌄
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
              <div className="ml-10 pl-3 border-l-2 border-gold-700/40">
                <p className="font-body text-[#6b4a2b]/85 text-sm md:text-base leading-relaxed">{faq.a}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-dark-800/40">
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-gold-700/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-sans text-gold-500 text-sm tracking-[4px] uppercase mb-3">FAQ</p>
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">सामान्य प्रश्न</h2>
          <div className="gold-divider w-32 mx-auto mb-5" />
          <p className="section-subtitle text-lg">आपके मन में उठे हर सवाल का जवाब</p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
