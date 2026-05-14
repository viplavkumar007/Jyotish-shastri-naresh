import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'
import { brand } from '../data/siteContent'

const navLinks = [
  { label: 'होम', href: '#home' },
  { label: 'सेवाएं', href: '#services' },
  { label: 'परिचय', href: '#about' },
  { label: 'समीक्षाएं', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'संपर्क', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const sections = navLinks.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`hidden md:flex fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white border-b border-gold-700/25 shadow-[0_10px_28px_rgba(122,76,24,0.14)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNav('#home') }} className="flex items-center gap-3 group">
            <img src={logo} alt="Logo" className="h-14 w-14 object-contain drop-shadow-[0_0_12px_rgba(212,175,55,0.6)] group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.9)] transition-all duration-300" />
            <div className="flex flex-col">
              <span className={`font-hindi text-base leading-tight transition-colors duration-300 ${scrolled ? 'text-gold-700 drop-shadow-none' : 'text-[#ffe39a] drop-shadow-[0_3px_10px_rgba(45,27,15,0.95)]'}`}>ज्योतिष शास्त्री</span>
              <span className={`font-hindi text-lg font-semibold leading-tight transition-colors duration-300 ${scrolled ? 'text-[#4b2f1a] drop-shadow-none' : 'text-white drop-shadow-[0_4px_14px_rgba(45,27,15,0.95)]'}`}>नरेश भाई रावल</span>
            </div>
          </a>

          {/* Nav links */}
          <div className="flex items-center gap-3">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`nav-link px-4 py-2.5 rounded-full text-base font-sans font-extrabold tracking-[0.01em] backdrop-blur-sm border transition-all duration-300 ${
                  scrolled
                    ? activeSection === link.href.slice(1)
                      ? 'active border-gold-500/70 bg-[rgba(255,245,214,0.95)] text-[#5a3415] shadow-[0_8px_18px_rgba(122,76,24,0.12)]'
                      : 'border-[#d6c29b]/80 bg-[rgba(255,252,245,0.74)] text-[#412615] hover:bg-[rgba(255,250,240,0.95)] hover:text-[#8f6321] shadow-[0_6px_16px_rgba(122,76,24,0.08)]'
                    : activeSection === link.href.slice(1)
                      ? 'active border-[#f3d37a]/70 bg-[rgba(255,243,205,0.92)] text-[#4a2a12] shadow-[0_10px_24px_rgba(20,10,4,0.28)]'
                      : 'border-white/15 bg-[rgba(34,20,12,0.26)] text-[#fff4d0] hover:bg-[rgba(52,31,18,0.38)] hover:text-white shadow-[0_8px_22px_rgba(20,10,4,0.18)]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href={`tel:${brand.phone1}`}
            className={`font-sans font-extrabold text-base px-6 py-3 inline-flex items-center gap-2 rounded-full transition-all duration-300 ${scrolled ? 'bg-[rgba(255,248,230,0.96)] border border-gold-500/60 text-[#3f2818] shadow-[0_8px_22px_rgba(122,76,24,0.14)]' : 'bg-[rgba(255,248,230,0.92)] border border-gold-500/60 text-[#3f2818] shadow-[0_10px_26px_rgba(45,27,15,0.28)] backdrop-blur-md hover:bg-[rgba(255,251,240,0.98)]'}`}
          >
            <span>📞</span>
            <span>अभी कॉल करें</span>
          </a>
        </div>
      </motion.nav>

      {/* MOBILE NAVBAR - above hero */}
      <div className="md:hidden bg-[#fff7ea]/98 backdrop-blur-xl border-b border-gold-700/35 shadow-[0_10px_24px_rgba(184,134,11,0.12)] sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNav('#home') }} className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-10 w-10 object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
            <div>
              <div className="font-hindi text-gold-700 text-xs leading-tight">ज्योतिष शास्त्री</div>
              <div className="font-hindi text-[#4b2f1a] text-sm font-semibold leading-tight">नरेश भाई रावल</div>
            </div>
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl border border-gold-700/30 bg-white/55"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              className="block w-5 h-0.5 bg-gold-500"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="block w-5 h-0.5 bg-gold-500"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              className="block w-5 h-0.5 bg-gold-500"
            />
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden bg-[#fff3df] border-t border-gold-700/20"
            >
              <div className="px-4 py-3 flex flex-col gap-1">
                {navLinks.map(link => (
                  <button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className={`text-left py-3 px-4 rounded-xl text-sm font-sans font-medium transition-all ${
                      activeSection === link.href.slice(1)
                        ? 'bg-gold-700/20 text-gold-700'
                        : 'text-[#5a3920] hover:bg-white/60 hover:text-gold-700'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href={`tel:${brand.phone1}`}
                  className="btn-glossy text-[#3f2818] font-sans font-bold text-sm px-5 py-3 text-center mt-2 rounded-xl"
                >
                  📞 अभी कॉल करें — {brand.phone1}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
