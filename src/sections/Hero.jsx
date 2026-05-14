import React from 'react'
import { motion } from 'framer-motion'
import heroBg from '../assets/hero-bg.png'
import { brand, hero, stats } from '../data/siteContent'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const whatsappMsg = encodeURIComponent('नमस्ते पंडित जी, मुझे ज्योतिष परामर्श चाहिए।')

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Hero background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/75 via-dark-900/55 to-dark-900/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/80 via-transparent to-dark-900/70" />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-gold-500/50 z-10"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{ y: [-10, 10, -10], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 mb-6">
            <span className="px-4 py-1.5 rounded-full border border-gold-600/50 bg-gold-900/20 text-gold-400 font-sans text-sm font-medium tracking-widest backdrop-blur-sm">
              {hero.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div {...fadeUp(0.2)}>
            <h1 className="font-hindi leading-tight mb-2">
              <span className="block text-cream/90 text-2xl md:text-3xl mb-1">{hero.headline}</span>
              <span className="block text-gold-gradient text-5xl md:text-7xl font-bold drop-shadow-[0_4px_20px_rgba(212,175,55,0.4)]">
                {hero.headlineName}
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div {...fadeUp(0.3)} className="flex items-center gap-3 my-4">
            <span className="h-px flex-1 max-w-16 bg-gradient-to-r from-transparent to-gold-600" />
            <span className="font-display text-gold-400 text-sm md:text-base tracking-wider uppercase">
              {hero.subheadline}
            </span>
            <span className="h-px flex-1 max-w-16 bg-gradient-to-l from-transparent to-gold-600" />
          </motion.div>

          {/* Tagline */}
          <motion.p {...fadeUp(0.35)} className="font-hindi text-cream/80 text-xl md:text-2xl mb-4">
            {brand.tagline}
          </motion.p>

          {/* Description */}
          <motion.p {...fadeUp(0.4)} className="font-body text-cream/70 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            {hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4 mb-12">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-glossy text-dark-900 font-sans font-bold text-base px-7 py-3.5 inline-flex items-center gap-2 shadow-gold"
            >
              <span>🔮</span>
              <span>{hero.cta1}</span>
            </a>
            <a
              href={`https://wa.me/${brand.whatsapp}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-white font-sans font-bold text-base px-7 py-3.5 inline-flex items-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>{hero.cta2}</span>
            </a>
            <a
              href={`tel:${brand.phone1}`}
              className="btn-outline-gold font-sans font-bold text-base px-7 py-3.5 inline-flex items-center gap-2"
            >
              <span>📞</span>
              <span>{brand.phone1}</span>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="bg-dark-800/70 backdrop-blur-sm border border-gold-700/25 rounded-2xl p-4 text-center hover:border-gold-500/50 transition-all duration-300"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="font-display text-gold-400 text-xl font-bold">{stat.value}</div>
                <div className="font-hindi text-cream/60 text-xs leading-tight mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="font-sans text-cream/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold-600/60 to-transparent" />
      </motion.div>
    </section>
  )
}
