import React from 'react'
import logo from '../assets/logo.png'
import { brand } from '../data/siteContent'

export default function Footer({ language = 'hi' }) {
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

  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#f7ecd8] border-t border-gold-700/25 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="Logo" className="h-16 w-16 object-contain drop-shadow-[0_0_12px_rgba(212,175,55,0.5)]" />
              <div>
                <p className="font-hindi text-gold-700 text-sm leading-tight">ज्योतिष शास्त्री</p>
                <p className="font-hindi text-[#4b2f1a] font-semibold text-base leading-tight">नरेश भाई रावल</p>
                <p className="font-sans text-[#6b4a2b]/80 text-xs">University Topper in Astrology</p>
              </div>
            </div>
            <p className="font-hindi text-gold-700/80 text-base italic mb-4">{isEnglish ? 'The movement of planets, the condition of life' : brand.tagline}</p>
            <p className="font-body text-[#6b4a2b]/85 text-sm leading-relaxed">
              {isEnglish
                ? 'Trusted astrology and vastu guidance with 10 years of experience across Rajasthan and Gujarat.'
                : 'वैदिक ज्योतिष और वास्तु शास्त्र में 10 वर्षों के अनुभव के साथ, राजस्थान और गुजरात में विश्वसनीय ज्योतिषाचार्य।'}
            </p>
          </div>

          <div>
            <h4 className="font-display text-gold-700 text-sm uppercase tracking-widest mb-5">{isEnglish ? 'Quick Links' : 'Quick Links'}</h4>
            <div className="flex flex-col gap-2.5">
              {navLinks.map(link => (
                <button key={link.href} onClick={() => handleNav(link.href)} className="font-sans text-[#5b3920]/85 text-sm text-left hover:text-gold-700 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-700/50 group-hover:bg-gold-500 transition-colors" />
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-gold-700 text-sm uppercase tracking-widest mb-5">{isEnglish ? 'Contact' : 'संपर्क'}</h4>
            <div className="flex flex-col gap-3">
              {[
                { icon: '📞', text: brand.phone1, href: `tel:${brand.phone1}` },
                { icon: '📞', text: brand.phone2, href: `tel:${brand.phone2}` },
                { icon: '📧', text: brand.email, href: `mailto:${brand.email}` },
                { icon: '📍', text: brand.addressEn, href: '#' },
              ].map((item, i) => (
                <a key={i} href={item.href} className="flex items-start gap-2 font-sans text-[#5b3920]/85 text-sm hover:text-gold-700 transition-colors duration-200">
                  <span className="flex-shrink-0">{item.icon}</span>
                  <span className="leading-tight">{item.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="gold-divider mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center">
          <p className="font-sans text-[#6b4a2b]/75 text-xs">
            © {new Date().getFullYear()} {isEnglish ? 'Jyotish Shastri Naresh Bhai Rawal' : 'ज्योतिष शास्त्री नरेश भाई रावल'} · {brand.website} · All Rights Reserved
          </p>
          <p className="font-sans text-[#6b4a2b]/65 text-xs">Jawai Bandh Road, Sumerpur, Pali, Rajasthan 306902</p>
        </div>
      </div>
    </footer>
  )
}
