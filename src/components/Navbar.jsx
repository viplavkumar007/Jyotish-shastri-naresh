import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../assets/logo.png'
import { brand } from '../data/siteContent'

export default function Navbar({ language = 'hi' }) {
  const isEnglish = language === 'en'
  const navLinks = isEnglish
    ? [
        { label: 'Home', href: '#home' },
        { label: 'Services', href: '#services' },
        { label: 'About', href: '#about' },
        { label: 'Reviews', href: '#testimonials' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' },
      ]
    : [
        { label: 'होम', href: '#home' },
        { label: 'सेवाएं', href: '#services' },
        { label: 'परिचय', href: '#about' },
        { label: 'समीक्षाएं', href: '#testimonials' },
        { label: 'FAQ', href: '#faq' },
        { label: 'संपर्क', href: '#contact' },
      ]

  const brandTitle = isEnglish ? 'Astrology Shastri' : 'ज्योतिष शास्त्री'
  const brandName = isEnglish ? 'Naresh Bhai Raval' : 'नरेश भाई रावल'
  const callNowLabel = isEnglish ? 'Call Now' : 'अभी कॉल करें'

  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const sections = navLinks.map(link => link.href.slice(1))
      for (let index = sections.length - 1; index >= 0; index -= 1) {
        const el = document.getElementById(sections[index])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[index])
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [navLinks])

  const handleNav = (href) => {
    setMenuOpen(false)
    window.setTimeout(() => {
      const el = document.querySelector(href)
      if (!el) return
      const navOffset = window.innerWidth >= 768 ? 88 : 76
      const targetTop = el.getBoundingClientRect().top + window.scrollY - navOffset
      window.scrollTo({ top: Math.max(targetTop, 0), behavior: 'smooth' })
    }, 10)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed left-0 right-0 top-0 z-50 hidden transition-all duration-500 md:flex ${
          scrolled ? 'border-b border-gold-700/25 bg-white shadow-[0_10px_28px_rgba(122,76,24,0.14)]' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNav('#home') }} className="group flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="h-14 w-14 object-contain drop-shadow-[0_0_12px_rgba(212,175,55,0.6)] transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.9)]"
            />
            <div key={`desktop-brand-${language}`} className="flex flex-col">
              <span className={`text-base leading-tight transition-colors duration-300 ${isEnglish ? 'font-sans font-bold tracking-[0.04em]' : 'font-hindi'} ${scrolled ? 'text-gold-700 drop-shadow-none' : 'text-[#ffe39a] drop-shadow-[0_3px_10px_rgba(45,27,15,0.95)]'}`}>
                {brandTitle}
              </span>
              <span className={`text-lg font-semibold leading-tight transition-colors duration-300 ${isEnglish ? 'font-sans tracking-[0.02em]' : 'font-hindi'} ${scrolled ? 'text-[#4b2f1a] drop-shadow-none' : 'text-white drop-shadow-[0_4px_14px_rgba(45,27,15,0.95)]'}`}>
                {brandName}
              </span>
            </div>
          </a>

          <div className="flex items-center gap-3">
            {navLinks.map(link => (
              <button
                key={`${language}-${link.href}`}
                onClick={() => handleNav(link.href)}
                className={`nav-link rounded-full border px-4 py-2.5 text-base font-sans font-extrabold tracking-[0.01em] backdrop-blur-sm transition-all duration-300 ${
                  scrolled
                    ? activeSection === link.href.slice(1)
                      ? 'active border-gold-500/70 bg-[rgba(255,245,214,0.95)] text-[#5a3415] shadow-[0_8px_18px_rgba(122,76,24,0.12)]'
                      : 'border-[#d6c29b]/80 bg-[rgba(255,252,245,0.74)] text-[#412615] shadow-[0_6px_16px_rgba(122,76,24,0.08)] hover:bg-[rgba(255,250,240,0.95)] hover:text-[#8f6321]'
                    : activeSection === link.href.slice(1)
                      ? 'active border-[#f3d37a]/70 bg-[rgba(255,243,205,0.92)] text-[#4a2a12] shadow-[0_10px_24px_rgba(20,10,4,0.28)]'
                      : 'border-white/15 bg-[rgba(34,20,12,0.26)] text-[#fff4d0] shadow-[0_8px_22px_rgba(20,10,4,0.18)] hover:bg-[rgba(52,31,18,0.38)] hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <a
            href={`tel:${brand.phone1}`}
            className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-sans text-base font-extrabold transition-all duration-300 ${
              scrolled
                ? 'border border-gold-500/60 bg-[rgba(255,248,230,0.96)] text-[#3f2818] shadow-[0_8px_22px_rgba(122,76,24,0.14)]'
                : 'border border-gold-500/60 bg-[rgba(255,248,230,0.92)] text-[#3f2818] shadow-[0_10px_26px_rgba(45,27,15,0.28)] backdrop-blur-md hover:bg-[rgba(255,251,240,0.98)]'
            }`}
          >
            <span>📞</span>
            <span>{callNowLabel}</span>
          </a>
        </div>
      </motion.nav>

      <div className="sticky top-0 z-50 border-b border-gold-700/35 bg-[#fff7ea]/98 shadow-[0_10px_24px_rgba(184,134,11,0.12)] backdrop-blur-xl md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNav('#home') }} className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-10 w-10 object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
            <div key={`mobile-brand-${language}`}>
              <div className={`text-xs leading-tight text-gold-700 ${isEnglish ? 'font-sans font-bold tracking-[0.04em]' : 'font-hindi'}`}>
                {brandTitle}
              </div>
              <div className={`text-sm font-semibold leading-tight text-[#4b2f1a] ${isEnglish ? 'font-sans tracking-[0.02em]' : 'font-hindi'}`}>
                {brandName}
              </div>
            </div>
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-gold-700/30 bg-white/55"
            aria-label="Toggle menu"
          >
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} className="block h-0.5 w-5 bg-gold-500" />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block h-0.5 w-5 bg-gold-500" />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} className="block h-0.5 w-5 bg-gold-500" />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-gold-700/20 bg-[#fff3df]"
            >
              <div className="flex flex-col gap-1 px-4 py-3">
                {navLinks.map(link => (
                  <button
                    key={`${language}-mobile-${link.href}`}
                    onClick={() => handleNav(link.href)}
                    className={`rounded-xl px-4 py-3 text-left text-sm font-sans font-medium transition-all ${
                      activeSection === link.href.slice(1)
                        ? 'bg-gold-700/20 text-gold-700'
                        : 'text-[#5a3920] hover:bg-white/60 hover:text-gold-700'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}

                <a href={`tel:${brand.phone1}`} className="btn-glossy mt-2 rounded-xl px-5 py-3 text-center font-sans text-sm font-bold text-[#3f2818]">
                  📞 {callNowLabel} - {brand.phone1}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
