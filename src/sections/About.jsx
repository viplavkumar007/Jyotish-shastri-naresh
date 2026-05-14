import React from 'react'
import { motion } from 'framer-motion'
import { about, brand } from '../data/siteContent'
import photo1 from '../assets/pandit-photo1.jpg'
import photo2 from '../assets/pandit-photo2.png'

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-800/40">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-700/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-700/5 rounded-full blur-[80px] pointer-events-none" />

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
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
              {/* Bottom overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-hindi text-gold-400 text-xl font-bold">ज्योतिष शास्त्री नरेश भाई रावल</p>
                <p className="font-sans text-cream/70 text-sm mt-1">|| ग्रहों की चाल, जीवन का हाल ||</p>
              </div>
            </div>
            {/* Small photo badge */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl overflow-hidden border-2 border-gold-500 shadow-gold">
              <img src={photo1} alt="Naresh Rawal" className="w-full h-full object-cover object-top" />
            </div>

            {/* Experience badge */}
            <div className="absolute top-6 -left-4 bg-gradient-to-br from-gold-600 to-gold-800 rounded-2xl p-4 text-center shadow-gold animate-pulse-gold">
              <div className="font-display text-dark-900 text-3xl font-black leading-none">{brand.experience}</div>
              <div className="font-sans text-dark-800 text-xs font-bold mt-1">वर्षों का<br/>अनुभव</div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-900/30 border border-gold-700/30 mb-6">
              <span className="text-gold-400 text-sm">🏆</span>
              <span className="font-sans text-gold-400 text-sm font-medium">University Topper in Astrology</span>
            </div>

            <h3 className="font-hindi text-cream text-3xl font-bold mb-5 leading-relaxed">
              10 वर्षों के अनुभव के साथ,<br />
              <span className="text-gold-gradient">आपके विश्वस्त ज्योतिषाचार्य</span>
            </h3>

            <p className="font-body text-cream/75 text-base leading-relaxed mb-4">{about.intro}</p>
            <p className="font-body text-cream/70 text-base leading-relaxed mb-8">{about.story}</p>

            {/* Trust points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: '🎓', title: 'विश्वविद्यालय टॉपर', desc: 'ज्योतिष में स्नातक' },
                { icon: '🏛️', title: 'वास्तु विशेषज्ञ', desc: 'डिप्लोमा प्रमाणित' },
                { icon: '👨‍👩‍👧‍👦', title: '5000+ परिवार', desc: 'संतुष्ट सेवाएं' },
                { icon: '📍', title: 'सुमेरपुर, राजस्थान', desc: 'व्यक्तिगत परामर्श' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-dark-700/40 border border-gold-700/20 hover:border-gold-600/40 transition-colors duration-300">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-sans text-cream text-sm font-semibold">{item.title}</div>
                    <div className="font-sans text-cream/55 text-xs mt-0.5">{item.desc}</div>
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
                className="bg-dark-700/50 border border-gold-700/25 rounded-2xl p-5 hover:border-gold-500/50 hover:bg-dark-700/70 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-900/40 border border-gold-700/30 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {edu.icon}
                  </div>
                  <div>
                    <p className="font-sans text-gold-400 text-sm font-semibold mb-1 leading-tight">{edu.degree}</p>
                    <p className="font-hindi text-cream/85 text-sm leading-tight">{edu.institution}</p>
                    <p className="font-sans text-cream/50 text-xs mt-1 flex items-center gap-1">
                      <span>📍</span>{edu.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
