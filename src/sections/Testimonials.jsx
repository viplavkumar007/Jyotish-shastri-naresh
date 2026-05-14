import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '../data/siteContent'

const testimonialsEn = [
  { text: 'Pandit ji accurately guided my career phase. His prediction about job growth proved right.', location: 'Jodhpur, Rajasthan', service: 'Vedic Astrology' },
  { text: 'I was facing marriage delays. His guidance helped bring clarity and a good proposal soon after.', location: 'Ahmedabad, Gujarat', service: 'Prashna Kundali' },
  { text: 'My business space felt blocked. After vastu guidance, things improved and confidence returned.', location: 'Pali, Rajasthan', service: 'Vastu Shastra' },
  { text: 'The consultation felt honest, calm, and practical. I got helpful remedies and direction.', location: 'Surat, Gujarat', service: 'Vedic Astrology' },
  { text: 'His gemstone and planetary advice was clear and easy to follow. Very reassuring session.', location: 'Udaipur, Rajasthan', service: 'Vedic Astrology' },
  { text: 'We received useful family and vastu guidance that brought visible peace at home.', location: 'Indore, Madhya Pradesh', service: 'Vastu Shastra' },
]

export default function Testimonials({ language = 'hi' }) {
  const [active, setActive] = useState(0)
  const isEnglish = language === 'en'

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-900/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7 }} className="text-center mb-16">
          <p className="font-sans text-gold-500 text-sm tracking-[4px] uppercase mb-3">Testimonials</p>
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">{isEnglish ? 'Client Reviews' : 'ग्राहकों की राय'}</h2>
          <div className="gold-divider w-32 mx-auto mb-5" />
          <p className="section-subtitle text-lg">{isEnglish ? 'Experiences shared by our satisfied clients' : 'हमारे संतुष्ट ग्राहकों के अनुभव'}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-10">
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="bg-white/72 border border-gold-700/30 rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute top-4 left-8 text-gold-600/20 font-serif text-9xl leading-none select-none">"</div>
              <div className="absolute bottom-0 right-8 text-gold-600/20 font-serif text-9xl leading-none select-none">"</div>
              <div className="stars text-2xl mb-4">{'★'.repeat(testimonials[active].rating)}</div>
              <p className="font-hindi text-[#4b2f1a] text-lg md:text-xl leading-relaxed mb-6 relative z-10">
                "{isEnglish ? testimonialsEn[active].text : testimonials[active].text}"
              </p>
              <div className="flex flex-col items-center gap-1">
                <div className="w-12 h-1 bg-gradient-to-r from-gold-600 to-gold-400 rounded-full mb-3" />
                <p className="font-sans text-gold-700 font-semibold text-base">{testimonials[active].name}</p>
                <p className="font-sans text-[#6b4a2b]/75 text-sm flex items-center gap-1">
                  <span>📍</span>{isEnglish ? testimonialsEn[active].location : testimonials[active].location}
                </p>
                <span className="mt-2 px-3 py-1 rounded-full text-xs font-sans font-medium bg-gold-900/30 border border-gold-700/30 text-gold-400">
                  {isEnglish ? testimonialsEn[active].service : testimonials[active].service}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className={`transition-all duration-300 rounded-full ${i === active ? 'w-8 h-3 bg-gold-500' : 'w-3 h-3 bg-gold-700/40 hover:bg-gold-600/60'}`} aria-label={`Testimonial ${i + 1}`} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div key={t.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: i * 0.08 }} onClick={() => setActive(i)} className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${i === active ? 'bg-white/80 border-gold-500/60 shadow-gold' : 'bg-white/55 border-gold-700/20 hover:border-gold-600/40 hover:bg-white/75'}`}>
              <div className="stars text-sm mb-2">{'★'.repeat(t.rating)}</div>
              <p className="font-hindi text-[#5b3920]/90 text-sm leading-relaxed mb-3 line-clamp-3">"{isEnglish ? testimonialsEn[i].text : t.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-sans text-gold-700 text-xs font-semibold">{t.name}</p>
                  <p className="font-sans text-[#6b4a2b]/70 text-xs">{isEnglish ? testimonialsEn[i].location : t.location}</p>
                </div>
                <span className="px-2 py-0.5 rounded-full text-xs font-sans bg-gold-900/30 border border-gold-700/30 text-gold-500/70">
                  {isEnglish ? testimonialsEn[i].service : t.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
