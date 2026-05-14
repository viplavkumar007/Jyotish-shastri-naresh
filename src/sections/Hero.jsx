import React from 'react'
import { motion } from 'framer-motion'
import heroBg from '../assets/hero-bg.png'
import { brand, hero } from '../data/siteContent'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero({ language = 'hi', onToggleLanguage }) {
  const isEnglish = language === 'en'
  const whatsappMsg = encodeURIComponent(
    isEnglish
      ? 'Hello Pandit ji, I need astrology consultation.'
      : 'नमस्ते पंडित जी, मुझे ज्योतिष परामर्श चाहिए।'
  )

  return (
    <section id="home" className="relative min-h-[86svh] md:min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover object-[64%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fff9ef]/86 via-[#f8ecd7]/66 to-[#f0d9af]/78" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fffaf0]/88 via-transparent to-[#f6e4c3]/74" />
      </div>

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

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 pt-24 pb-10 sm:px-6 md:pt-36 md:pb-20">
        <motion.div
          {...fadeUp(0.12)}
          className="absolute left-1/2 top-24 z-20 flex w-[calc(100%-2rem)] max-w-[220px] -translate-x-1/2 flex-col items-center gap-3 sm:top-28 md:left-auto md:right-6 md:top-24 md:w-auto md:max-w-none md:translate-x-0 md:items-end md:gap-4 lg:right-10 lg:top-28"
        >
          <div className="inline-flex items-center rounded-full border border-gold-500/35 bg-[rgba(255,248,235,0.86)] px-3 py-2 backdrop-blur-sm shadow-[0_12px_28px_rgba(122,76,24,0.14)] md:px-5 md:py-2.5">
            <span className="text-center font-sans text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#7a4c18] md:text-sm md:tracking-[0.18em]">
              Love Relationship Expert
            </span>
          </div>

          <button
            type="button"
            onClick={onToggleLanguage}
            aria-pressed={isEnglish}
            className={`relative flex h-[42px] w-[132px] items-center rounded-full border-[3px] px-3 transition-all duration-300 md:h-[54px] md:w-[170px] md:border-[4px] md:px-4 ${
              isEnglish
                ? 'justify-start border-[#b9ffbf] bg-[#10db53] shadow-[0_12px_28px_rgba(16,219,83,0.24)]'
                : 'justify-end border-[#f3e6c8] bg-[#d8c8a6] shadow-[0_12px_28px_rgba(122,76,24,0.14)]'
            }`}
          >
            <span className={`absolute text-[12px] font-black leading-none transition-all duration-300 md:text-[20px] ${
              isEnglish ? 'right-3 text-[#05963a] md:right-4' : 'left-3 text-[#8b6b39] md:left-4'
            }`}>
              {isEnglish ? 'English' : 'Hindi'}
            </span>
            <span className="relative z-10 block h-[28px] w-[28px] rounded-full border border-[#d8d8d8] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.18)] md:h-[40px] md:w-[40px]" />
            <span className="sr-only">{isEnglish ? 'Switch to Hindi' : 'Switch to English'}</span>
          </button>
        </motion.div>

        <div className="flex min-h-[68svh] items-end justify-center md:min-h-[72vh] md:justify-start">
          <motion.div
            {...fadeUp(0.2)}
            className="mx-auto mb-1 flex w-full max-w-[720px] flex-nowrap items-stretch justify-center gap-2 rounded-[1.4rem] border border-white/50 bg-white/46 px-3 py-3 backdrop-blur-md shadow-[0_20px_50px_rgba(122,76,24,0.18)] md:mb-6 md:ml-4 md:mr-0 md:flex-wrap md:justify-start md:gap-4 md:rounded-[2rem] md:px-5 md:py-5"
          >
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-glossy inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 px-2.5 py-2.5 text-[11px] font-bold leading-tight text-[#3f2818] shadow-gold md:flex-none md:gap-2 md:px-7 md:py-3.5 md:text-base"
            >
              <span>🔮</span>
              <span className="truncate">{isEnglish ? 'Book Consultation' : hero.cta1}</span>
            </a>
            <a
              href={`https://wa.me/${brand.whatsapp}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 px-2.5 py-2.5 text-[11px] font-bold leading-tight text-white md:flex-none md:gap-2 md:px-7 md:py-3.5 md:text-base"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="truncate">{isEnglish ? 'Chat on WhatsApp' : hero.cta2}</span>
            </a>
            <a
              href={`tel:${brand.phone1}`}
              className="btn-outline-gold inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 px-2.5 py-2.5 text-[11px] font-bold leading-tight md:flex-none md:gap-2 md:px-7 md:py-3.5 md:text-base"
            >
              <span>📞</span>
              <span className="truncate">{brand.phone1}</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
