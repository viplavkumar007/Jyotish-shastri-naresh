import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { brand } from '../data/siteContent'

function Toast({ message, type, onClose }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className={`toast ${type === 'success' ? 'toast-success' : 'toast-error'}`}
          role="alert"
          aria-live="polite"
        >
          <span>{type === 'success' ? '✅' : '❌'}</span>
          <span>{message}</span>
          <button onClick={onClose} className="ml-auto text-current opacity-60 hover:opacity-100 text-lg">&times;</button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState({ message: '', type: '' })

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'नाम आवश्यक है'
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'सही मोबाइल नंबर दर्ज करें'
    if (!form.message.trim()) e.message = 'संदेश आवश्यक है'
    return e
  }

  const showToast = (message, type) => {
    setToast({ message, type })
    setTimeout(() => setToast({ message: '', type: '' }), 4000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setLoading(true)

    // Build WhatsApp message
    const waMsg = encodeURIComponent(
      `🙏 *नई परामर्श अनुरोध*\n\n` +
      `👤 *नाम:* ${form.name}\n` +
      `📱 *मोबाइल:* ${form.phone}\n` +
      `🔮 *सेवा:* ${form.service || 'अनिर्दिष्ट'}\n` +
      `💬 *संदेश:* ${form.message}\n\n` +
      `_nareshpandit.com से भेजा गया_`
    )

    // Build mailto link
    const mailSubject = encodeURIComponent(`परामर्श अनुरोध — ${form.name}`)
    const mailBody = encodeURIComponent(
      `नाम: ${form.name}\nमोबाइल: ${form.phone}\nसेवा: ${form.service || 'अनिर्दिष्ट'}\nसंदेश: ${form.message}`
    )

    setTimeout(() => {
      setLoading(false)
      // Open WhatsApp
      window.open(`https://wa.me/${brand.whatsapp}?text=${waMsg}`, '_blank')
      // Open email
      window.location.href = `mailto:${brand.email}?subject=${mailSubject}&body=${mailBody}`
      setForm({ name: '', phone: '', service: '', message: '' })
      showToast('आपका संदेश WhatsApp और Email पर भेजा गया!', 'success')
    }, 1200)
  }

  const services = ['वेदिक ज्योतिष', 'प्रश्न कुंडली', 'वास्तु शास्त्र']

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <Toast message={toast.message} type={toast.type} onClose={() => setToast({ message: '', type: '' })} />

      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold-700/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-gold-500 text-sm tracking-[4px] uppercase mb-3">Contact Us</p>
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">संपर्क करें</h2>
          <div className="gold-divider w-32 mx-auto mb-5" />
          <p className="section-subtitle text-lg">आज ही परामर्श बुक करें — पहली बातचीत निःशुल्क</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-hindi text-[#4b2f1a] text-2xl font-bold mb-8">सीधे संपर्क करें</h3>

            <div className="flex flex-col gap-5 mb-8">
              {[
                { icon: '📞', label: 'मोबाइल नंबर 1', value: brand.phone1, href: `tel:${brand.phone1}` },
                { icon: '📞', label: 'मोबाइल नंबर 2', value: brand.phone2, href: `tel:${brand.phone2}` },
                { icon: '📧', label: 'ईमेल', value: brand.email, href: `mailto:${brand.email}` },
                { icon: '📍', label: 'पता', value: brand.addressEn, href: `https://maps.google.com/?q=Sumerpur+Pali+Rajasthan` },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.label === 'पता' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/68 border border-gold-700/20 hover:border-gold-500/50 hover:bg-white/82 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gold-900/40 border border-gold-700/30 flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-sans text-gold-700/80 text-xs uppercase tracking-wider mb-0.5">{item.label}</p>
                    <p className="font-sans text-[#4b2f1a] text-sm group-hover:text-gold-700 transition-colors">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-col gap-3">
              <a
                href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent('नमस्ते पंडित जी, मुझे ज्योतिष परामर्श चाहिए।')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-white font-sans font-bold text-base px-6 py-4 inline-flex items-center justify-center gap-3"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp पर तुरंत संपर्क करें
              </a>
              <a
                href={`tel:${brand.phone1}`}
                className="btn-glossy text-[#3f2818] font-sans font-bold text-base px-6 py-4 inline-flex items-center justify-center gap-3"
              >
                📞 अभी कॉल करें — {brand.phone1}
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="bg-white/72 border border-gold-700/25 rounded-3xl p-7 md:p-8">
              <h3 className="font-hindi text-[#4b2f1a] text-2xl font-bold mb-6">परामर्श अनुरोध</h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                {/* Name */}
                <div>
                  <label className="font-sans text-[#6b4a2b]/85 text-xs uppercase tracking-wider mb-1.5 block">आपका नाम *</label>
                  <input
                    type="text"
                    placeholder="अपना पूरा नाम दर्ज करें"
                    value={form.name}
                    onChange={e => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: '' }) }}
                    className="form-input"
                  />
                  {errors.name && <p className="font-sans text-red-400 text-xs mt-1.5">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="font-sans text-[#6b4a2b]/85 text-xs uppercase tracking-wider mb-1.5 block">मोबाइल नंबर *</label>
                  <input
                    type="tel"
                    placeholder="10 अंकों का मोबाइल नंबर"
                    value={form.phone}
                    onChange={e => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: '' }) }}
                    className="form-input"
                    maxLength="10"
                  />
                  {errors.phone && <p className="font-sans text-red-400 text-xs mt-1.5">{errors.phone}</p>}
                </div>

                {/* Service */}
                <div>
                  <label className="font-sans text-[#6b4a2b]/85 text-xs uppercase tracking-wider mb-1.5 block">सेवा चुनें</label>
                  <select
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    className="form-input"
                    style={{ appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23D4AF37' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                  >
                    <option value="">सेवा चुनें (वैकल्पिक)</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="font-sans text-[#6b4a2b]/85 text-xs uppercase tracking-wider mb-1.5 block">आपका संदेश *</label>
                  <textarea
                    placeholder="अपनी समस्या या प्रश्न यहाँ लिखें..."
                    value={form.message}
                    onChange={e => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: '' }) }}
                    rows={4}
                    className="form-input resize-none"
                  />
                  {errors.message && <p className="font-sans text-red-400 text-xs mt-1.5">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-glossy text-[#3f2818] font-sans font-bold text-base py-4 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-[#3f2818] border-t-transparent rounded-full"
                      />
                      <span>भेजा जा रहा है...</span>
                    </>
                  ) : (
                    <>
                      <span>🚀</span>
                      <span>WhatsApp & Email पर भेजें</span>
                    </>
                  )}
                </button>

                <p className="font-sans text-[#6b4a2b]/75 text-xs text-center">
                  फॉर्म submit होने पर WhatsApp और Email दोनों खुलेंगे।
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
