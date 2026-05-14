import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { about, brand } from '../data/siteContent'
import photo1 from '../assets/pandit-photo1.jpg'
import photo2 from '../assets/pandit-photo2.png'
import cert1 from '../assets/certificates/image-d365b566-b485-4750-9db2-2fcb7e2b9fe3.jpg.jpeg'
import cert2 from '../assets/certificates/IMG_20211121_191052.jpg.jpeg'
import cert3 from '../assets/certificates/IMG_20211121_191109.jpg.jpeg'
import cert4 from '../assets/certificates/IMG_20211128_081430.jpg.jpeg'
import cert5 from '../assets/certificates/IMG_20211128_081445.jpg (1).jpeg'
import cert6 from '../assets/certificates/IMG_20211128_081445.jpg.jpeg'
import cert7 from '../assets/certificates/IMG_20211128_081502.jpg.jpeg'
import cert8 from '../assets/certificates/IMG_20211128_081514.jpg (1).jpeg'
import cert9 from '../assets/certificates/IMG_20211128_081514.jpg.jpeg'

const certificates = [
  { id: 1, image: cert1, title: 'Astrology Degree Certificate' },
  { id: 2, image: cert2, title: 'Sanskrit Competition Certificate' },
  { id: 3, image: cert3, title: 'N.S.S. Certificate' },
  { id: 4, image: cert4, title: 'Certificate of Merit', rotateLeft: true },
  { id: 5, image: cert5, title: 'Vidyapariksha Certificate' },
  { id: 6, image: cert6, title: 'Academic Certificate' },
  { id: 7, image: cert7, title: 'University Certificate' },
  { id: 8, image: cert8, title: 'Traditional Scholarship Certificate' },
  { id: 9, image: cert9, title: 'Achievement Certificate' },
]

export default function About() {
  const [showAllCertificates, setShowAllCertificates] = useState(false)

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,250,240,0.95),rgba(247,236,216,0.92))]">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-700/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#d7b57a]/18 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-gold-500 text-sm tracking-[4px] uppercase mb-3">About Us</p>
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">हमारा परिचय</h2>
          <div className="gold-divider w-32 mx-auto mb-5" />
          <p className="section-subtitle text-lg max-w-xl mx-auto">
            ज्ञान, अनुभव और आस्था का संगम
          </p>
        </motion.div>

        {/* Main about layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Photos */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main photo */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-gold-700/40 shadow-gold-lg">
              <img
                src={photo2}
                alt="Jyotish Shastri Naresh Bhai Rawal"
                className="w-full object-cover"
                style={{ maxHeight: '520px', objectPosition: 'top' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d1b0f]/82 via-[#2d1b0f]/12 to-transparent" />
              {/* Bottom overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-hindi text-gold-400 text-xl font-bold">ज्योतिष शास्त्री नरेश भाई रावल</p>
                <p className="font-sans text-[#f8edd8] text-sm mt-1">|| ग्रहों की चाल, जीवन का हाल ||</p>
              </div>
            </div>
            {/* Small photo badge */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl overflow-hidden border-2 border-gold-500 shadow-gold">
              <img src={photo1} alt="Naresh Rawal" className="w-full h-full object-cover object-top" />
            </div>

            {/* Experience badge */}
            <div className="absolute top-6 -left-4 bg-gradient-to-br from-gold-600 to-gold-800 rounded-2xl p-4 text-center shadow-gold animate-pulse-gold">
              <div className="font-display text-[#3f2818] text-3xl font-black leading-none">{brand.experience}</div>
              <div className="font-sans text-[#5c4028] text-xs font-bold mt-1">वर्षों का<br/>अनुभव</div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-[2rem] border border-white/50 bg-white/38 p-6 md:p-8 backdrop-blur-sm shadow-[0_22px_60px_rgba(122,76,24,0.1)]"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-900/30 border border-gold-700/30 mb-6">
              <span className="text-gold-700 text-sm">🏆</span>
              <span className="font-sans text-gold-700 text-sm font-medium">University Topper in Astrology</span>
            </div>

            <h3 className="font-hindi text-[#4b2f1a] text-3xl font-bold mb-5 leading-relaxed">
              10 वर्षों के अनुभव के साथ,<br />
              <span className="text-gold-gradient">आपके विश्वस्त ज्योतिषाचार्य</span>
            </h3>

            <p className="font-body text-[#6b4a2b]/90 text-base leading-relaxed mb-4">{about.intro}</p>
            <p className="font-body text-[#6b4a2b]/85 text-base leading-relaxed mb-8">{about.story}</p>

            {/* Trust points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: '🎓', title: 'विश्वविद्यालय टॉपर', desc: 'ज्योतिष में स्नातक' },
                { icon: '🏛️', title: 'वास्तु विशेषज्ञ', desc: 'डिप्लोमा प्रमाणित' },
                { icon: '👨‍👩‍👧‍👦', title: '5000+ परिवार', desc: 'संतुष्ट सेवाएं' },
                { icon: '📍', title: 'सुमेरपुर, राजस्थान', desc: 'व्यक्तिगत परामर्श' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/88 border border-gold-700/20 hover:border-gold-600/40 transition-colors duration-300">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-sans text-[#4b2f1a] text-sm font-semibold">{item.title}</div>
                    <div className="font-sans text-[#6b4a2b]/80 text-xs mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent('नमस्ते पंडित जी, परामर्श चाहिए।')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-white font-sans font-bold text-sm px-6 py-3 inline-flex items-center gap-2"
              >
                <span>💬</span> WhatsApp करें
              </a>
              <a
                href={`tel:${brand.phone1}`}
                className="btn-outline-gold font-sans font-bold text-sm px-6 py-3 inline-flex items-center gap-2"
              >
                📞 {brand.phone1}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Education section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-10">
            <h3 className="section-title text-3xl md:text-4xl font-bold mb-3">शैक्षणिक योग्यता</h3>
            <div className="gold-divider w-24 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {about.education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/88 border border-gold-700/25 rounded-2xl p-5 hover:border-gold-500/50 hover:bg-white transition-all duration-300 group shadow-[0_12px_28px_rgba(122,76,24,0.06)]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-900/40 border border-gold-700/30 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {edu.icon}
                  </div>
                  <div>
                    <p className="font-sans text-gold-700 text-sm font-semibold mb-1 leading-tight">{edu.degree}</p>
                    <p className="font-hindi text-[#4b2f1a] text-sm leading-tight">{edu.institution}</p>
                    <p className="font-sans text-[#6b4a2b]/75 text-xs mt-1 flex items-center gap-1">
                      <span>📍</span>{edu.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-16"
        >
          <div className="text-center mb-10">
            <h3 className="section-title text-3xl md:text-4xl font-bold mb-3">Certificates</h3>
            <div className="gold-divider w-24 mx-auto mb-4" />
            <p className="section-subtitle text-base md:text-lg">प्रमाणपत्र और शैक्षणिक उपलब्धियां</p>
          </div>

          <div className="rounded-[2rem] border border-white/55 bg-white/45 p-5 md:p-7 backdrop-blur-sm shadow-[0_20px_50px_rgba(122,76,24,0.1)]">
            <button
              type="button"
              onClick={() => setShowAllCertificates(prev => !prev)}
              className="w-full flex items-center justify-between gap-4 rounded-2xl border border-gold-700/20 bg-white/70 px-5 py-4 text-left hover:border-gold-500/40 transition-colors duration-300"
              aria-expanded={showAllCertificates}
            >
              <div>
                <p className="font-display text-[#4b2f1a] text-lg md:text-xl font-bold">Certificate Gallery</p>
                <p className="font-sans text-[#6b4a2b]/80 text-sm mt-1">
                  {showAllCertificates ? 'सभी प्रमाणपत्र दिख रहे हैं' : 'एक पंक्ति का पूर्वावलोकन दिख रहा है'}
                </p>
              </div>
              <span className="font-sans text-gold-700 text-sm md:text-base font-bold">
                {showAllCertificates ? 'Show Less' : 'Show All'}
              </span>
            </button>

            <div className={`mt-6 overflow-hidden transition-all duration-500 ${showAllCertificates ? 'max-h-[4000px]' : 'max-h-[320px]'}`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {certificates.map((certificate, index) => (
                  <motion.div
                    key={certificate.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.45, delay: index * 0.04 }}
                    className={`${!showAllCertificates && index > 2 ? 'hidden lg:hidden' : ''} rounded-[1.5rem] border border-gold-700/20 bg-white/88 p-3 shadow-[0_14px_32px_rgba(122,76,24,0.08)]`}
                  >
                    <div className="overflow-hidden rounded-[1rem] border border-gold-700/15 bg-[#fff9ef]">
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className={`w-full h-[220px] md:h-[240px] object-cover object-center ${certificate.rotateLeft ? '-rotate-90 scale-[0.82]' : ''}`}
                      />
                    </div>
                    <p className="font-sans text-[#4b2f1a] text-sm font-semibold mt-3 px-1">
                      {certificate.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
