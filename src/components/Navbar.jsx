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
            ? 'bg-dark-900/95 backdrop-blur-xl border-b border-gold-700/30 shadow-[0_4px_30px_rgba(212,175,55,0.1)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNav('#home') }} className="flex items-center gap-3 group">
            <img src={logo} alt="Logo" className="h-14 w-14 object-contain drop-shadow-[0_0_12px_rgba(212,175,55,0.6)] group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.9)] transition-all duration-300" />
            <div className="flex flex-col">
              <span className="font-hindi text-gold-500 text-base leading-tight">ज्योतिष शास्त्री</span>
              <span className="font-hindi text-cream font-semibold text-lg leading-tight">नरेश भाई रावल</span>
            </div>
          </a>

          {/* Nav links */}
          <div className="flex items-center gap-8">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`nav-link text-sm font-sans font-medium ${activeSection === link.href.slice(1) ? 'active' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href={`tel:${brand.phone1}`}
            className="btn-glossy text-dark-900 font-sans font-bold text-sm px-5 py-2.5 inline-flex items-center gap-2"
          >
            <span>📞</span>
            <span>अभी कॉल करें</span>
          </a>
        </div>
      </motion.nav>

      {/* MOBILE NAVBAR - above hero */}
      <div className="md:hidden bg-dark-800/98 backdrop-blur-xl border-b border-gold-700/30 sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNav('#home') }} className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-10 w-10 object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
            <div>
              <div className="font-hindi text-gold-500 text-xs leading-tight">ज्योतिष शास्त्री</div>
              <div className="font-hindi text-cream text-sm font-semibold leading-tight">नरेश भाई रावल</div>
            </div>
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl border border-gold-700/30 bg-dark-700/50"
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
              className="overflow-hidden bg-dark-800 border-t border-gold-700/20"
            >
              <div className="px-4 py-3 flex flex-col gap-1">
                {navLinks.map(link => (
                  <button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className={`text-left py-3 px-4 rounded-xl text-sm font-sans font-medium transition-all ${
                      activeSection === link.href.slice(1)
                        ? 'bg-gold-700/20 text-gold-400'
                        : 'text-cream/80 hover:bg-dark-700/50 hover:text-gold-400'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href={`tel:${brand.phone1}`}
                  className="btn-glossy text-dark-900 font-sans font-bold text-sm px-5 py-3 text-center mt-2 rounded-xl"
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
