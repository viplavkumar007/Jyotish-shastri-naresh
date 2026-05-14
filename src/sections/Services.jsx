import React from 'react'
import { motion } from 'framer-motion'
import { services } from '../data/siteContent'

const useScrollReveal = () => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
})

const englishDescriptions = {
  1: 'Deep and accurate analysis of planets, dashas, life situations, and future through Vedic astrology.',
  2: 'Quick and clear astrological guidance for current questions, confusion, and important decisions.',
  3: 'Vastu guidance for home, shop, office, and workplace to improve harmony, peace, and prosperity.',
}

export default function Services({ language = 'hi' }) {
  const isEnglish = language === 'en'

  return (
    <section id="services" className="py-24 bg-mandala relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-700/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...useScrollReveal()} transition={{ duration: 0.7 }} className="text-center mb-16">
          <p className="font-sans text-gold-500 text-sm tracking-[4px] uppercase mb-3">Our Services</p>
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">{isEnglish ? 'Our Services' : 'हमारी सेवाएं'}</h2>
          <div className="gold-divider w-32 mx-auto mb-5" />
          <p className="section-subtitle text-lg max-w-2xl mx-auto">
            {isEnglish
              ? 'Traditional astrological wisdom for modern life decisions and guidance.'
              : 'वैदिक ज्योतिष की प्राचीन विद्या से आधुनिक जीवन की हर समस्या का समाधान'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div key={service.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}>
              <ServiceCard service={service} isEnglish={isEnglish} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, isEnglish }) {
  return (
    <div className="service-card p-6 h-full group cursor-pointer" style={{ '--card-border': service.border }}>
      <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-[20px] bg-gradient-to-r ${service.color.replace('/40', '').replace('/20', '')}`} style={{ opacity: 0.7 }} />
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300 border`} style={{ borderColor: service.border }}>
        {service.icon}
      </div>
      <h3 className="font-hindi text-[#4b2f1a] text-xl font-semibold mb-1 group-hover:text-gold-700 transition-colors duration-300">
        {isEnglish ? service.titleEn : service.title}
      </h3>
      <p className="font-sans text-gold-700/80 text-xs uppercase tracking-wider mb-3">{isEnglish ? service.title : service.titleEn}</p>
      <p className="font-body text-[#6b4a2b]/85 text-sm leading-relaxed">
        {isEnglish ? englishDescriptions[service.id] : service.description}
      </p>
      <div className="mt-5 flex items-center gap-2 text-gold-500 text-sm font-sans font-medium group-hover:gap-3 transition-all duration-300">
        <span>{isEnglish ? 'Learn More' : 'अधिक जानें'}</span>
        <span className="text-base">→</span>
      </div>
    </div>
  )
}
