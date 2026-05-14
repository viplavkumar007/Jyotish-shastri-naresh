import React from 'react'
import { motion } from 'framer-motion'
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

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-900 border-t border-gold-700/25 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="Logo" className="h-16 w-16 object-contain drop-shadow-[0_0_12px_rgba(212,175,55,0.5)]" />
              <div>
                <p className="font-hindi text-gold-500 text-sm leading-tight">ज्योतिष शास्त्री</p>
                <p className="font-hindi text-cream font-semibold text-base leading-tight">नरेश भाई रावल</p>
                <p className="font-sans text-cream/40 text-xs">University Topper in Astrology</p>
              </div>
            </div>
            <p className="font-hindi text-gold-500/80 text-base italic mb-4">{brand.tagline}</p>
            <p className="font-body text-cream/50 text-sm leading-relaxed">
              वैदिक ज्योतिष और वास्तु शास्त्र में 10 वर्षों के अनुभव के साथ, राजस्थान और गुजरात में विश्वसनीय ज्योतिषाचार्य।
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-gold-500 text-sm uppercase tracking-widest mb-5">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="font-sans text-cream/55 text-sm text-left hover:text-gold-400 transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-700/50 group-hover:bg-gold-500 transition-colors" />
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-gold-500 text-sm uppercase tracking-widest mb-5">संपर्क</h4>
            <div className="flex flex-col gap-3">
              {[
                { icon: '📞', text: brand.phone1, href: `tel:${brand.phone1}` },
                { icon: '📞', text: brand.phone2, href: `tel:${brand.phone2}` },
                { icon: '📧', text: brand.email, href: `mailto:${brand.email}` },
                { icon: '📍', text: brand.addressEn, href: '#' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-start gap-2 font-sans text-cream/55 text-sm hover:text-gold-400 transition-colors duration-200"
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  <span className="leading-tight">{item.text}</span>
                </a>
              ))}
            </div>

            {/* Social / WhatsApp */}
            <div className="flex gap-3 mt-6">
              <a
                href={`https://wa.me/${brand.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-green-900/30 border border-green-700/30 flex items-center justify-center text-green-400 hover:bg-green-800/40 hover:scale-110 transition-all duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <a
                href={`tel:${brand.phone1}`}
                className="w-10 h-10 rounded-xl bg-gold-900/30 border border-gold-700/30 flex items-center justify-center text-gold-400 hover:bg-gold-800/40 hover:scale-110 transition-all duration-300"
              >
                📞
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="w-10 h-10 rounded-xl bg-blue-900/30 border border-blue-700/30 flex items-center justify-center text-blue-400 hover:bg-blue-800/40 hover:scale-110 transition-all duration-300"
              >
                📧
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="gold-divider mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center">
          <p className="font-sans text-cream/35 text-xs">
            © {new Date().getFullYear()} ज्योतिष शास्त्री नरेश भाई रावल · {brand.website} · All Rights Reserved
          </p>
          <p className="font-sans text-cream/25 text-xs">
            Jawai Bandh Road, Sumerpur, Pali, Rajasthan 306902
          </p>
        </div>
      </div>
    </footer>
  )
}
