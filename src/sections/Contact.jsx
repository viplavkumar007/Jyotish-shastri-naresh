import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { brand } from '../data/siteContent'

function Toast({ message, type, onClose }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }} className={`toast ${type === 'success' ? 'toast-success' : 'toast-error'}`} role="alert" aria-live="polite">
          <span>{type === 'success' ? '✅' : '❌'}</span>
          <span>{message}</span>
          <button onClick={onClose} className="ml-auto text-current opacity-60 hover:opacity-100 text-lg">&times;</button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Contact({ language = 'hi' }) {
  const isEnglish = language === 'en'
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState({ message: '', type: '' })

  const copy = isEnglish
    ? {
        heading: 'Contact Us',
        sub: 'Book your consultation today',
        direct: 'Direct Contact',
        request: 'Consultation Request',
        name: 'Your Name *',
        phone: 'Mobile Number *',
        service: 'Choose Service',
        message: 'Your Message *',
        namePh: 'Enter your full name',
        phonePh: '10-digit mobile number',
        servicePh: 'Choose service (optional)',
        msgPh: 'Write your issue or question here...',
        send: 'Send to WhatsApp & Email',
        sending: 'Sending...',
        note: 'On submit, both WhatsApp and Email will open.',
        success: 'Your message was sent to WhatsApp and Email!',
        errors: {
          name: 'Name is required',
          phone: 'Enter a valid mobile number',
          message: 'Message is required',
        },
      }
    : {
        heading: 'संपर्क करें',
        sub: 'आज ही परामर्श बुक करें',
        direct: 'सीधे संपर्क करें',
        request: 'परामर्श अनुरोध',
        name: 'आपका नाम *',
        phone: 'मोबाइल नंबर *',
        service: 'सेवा चुनें',
        message: 'आपका संदेश *',
        namePh: 'अपना पूरा नाम दर्ज करें',
        phonePh: '10 अंकों का मोबाइल नंबर',
        servicePh: 'सेवा चुनें (वैकल्पिक)',
        msgPh: 'अपनी समस्या या प्रश्न यहाँ लिखें...',
        send: 'WhatsApp & Email पर भेजें',
        sending: 'भेजा जा रहा है...',
        note: 'फॉर्म submit होने पर WhatsApp और Email दोनों खुलेंगे।',
        success: 'आपका संदेश WhatsApp और Email पर भेजा गया!',
        errors: {
          name: 'नाम आवश्यक है',
          phone: 'सही मोबाइल नंबर दर्ज करें',
          message: 'संदेश आवश्यक है',
        },
      }

  const services = isEnglish
    ? ['Vedic Astrology', 'Prashna Kundali', 'Vastu Shastra']
    : ['वेदिक ज्योतिष', 'प्रश्न कुंडली', 'वास्तु शास्त्र']

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = copy.errors.name
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) e.phone = copy.errors.phone
    if (!form.message.trim()) e.message = copy.errors.message
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

    const waMsg = encodeURIComponent(
      isEnglish
        ? `New consultation request\n\nName: ${form.name}\nMobile: ${form.phone}\nService: ${form.service || 'Not specified'}\nMessage: ${form.message}`
        : `नई परामर्श अनुरोध\n\nनाम: ${form.name}\nमोबाइल: ${form.phone}\nसेवा: ${form.service || 'अनिर्दिष्ट'}\nसंदेश: ${form.message}`
    )

    const mailSubject = encodeURIComponent(isEnglish ? `Consultation Request — ${form.name}` : `परामर्श अनुरोध — ${form.name}`)
    const mailBody = encodeURIComponent(
      `${isEnglish ? 'Name' : 'नाम'}: ${form.name}\n${isEnglish ? 'Mobile' : 'मोबाइल'}: ${form.phone}\n${isEnglish ? 'Service' : 'सेवा'}: ${form.service || (isEnglish ? 'Not specified' : 'अनिर्दिष्ट')}\n${isEnglish ? 'Message' : 'संदेश'}: ${form.message}`
    )

    setTimeout(() => {
      setLoading(false)
      window.open(`https://wa.me/${brand.whatsapp}?text=${waMsg}`, '_blank')
      window.location.href = `mailto:${brand.email}?subject=${mailSubject}&body=${mailBody}`
      setForm({ name: '', phone: '', service: '', message: '' })
      showToast(copy.success, 'success')
    }, 1200)
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <Toast message={toast.message} type={toast.type} onClose={() => setToast({ message: '', type: '' })} />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold-700/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7 }} className="text-center mb-16">
          <p className="font-sans text-gold-500 text-sm tracking-[4px] uppercase mb-3">{isEnglish ? 'Contact Us' : 'Contact Us'}</p>
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">{copy.heading}</h2>
          <div className="gold-divider w-32 mx-auto mb-5" />
          <p className="section-subtitle text-lg">{copy.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8 }}>
            <h3 className="font-hindi text-[#4b2f1a] text-2xl font-bold mb-8">{copy.direct}</h3>

            <div className="flex flex-col gap-5 mb-8">
              {[
                { icon: '📞', label: isEnglish ? 'Mobile Number 1' : 'मोबाइल नंबर 1', value: brand.phone1, href: `tel:${brand.phone1}` },
                { icon: '📞', label: isEnglish ? 'Mobile Number 2' : 'मोबाइल नंबर 2', value: brand.phone2, href: `tel:${brand.phone2}` },
                { icon: '📧', label: isEnglish ? 'Email' : 'ईमेल', value: brand.email, href: `mailto:${brand.email}` },
                { icon: '📍', label: isEnglish ? 'Address' : 'पता', value: brand.addressEn, href: `https://maps.google.com/?q=Sumerpur+Pali+Rajasthan` },
              ].map((item, i) => (
                <motion.a key={i} href={item.href} target={item.label === 'Address' || item.label === 'पता' ? '_blank' : undefined} rel="noopener noreferrer" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-4 p-4 rounded-2xl bg-white/68 border border-gold-700/20 hover:border-gold-500/50 hover:bg-white/82 transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-gold-900/40 border border-gold-700/30 flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div>
                    <p className="font-sans text-gold-700/80 text-xs uppercase tracking-wider mb-0.5">{item.label}</p>
                    <p className="font-sans text-[#4b2f1a] text-sm group-hover:text-gold-700 transition-colors">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <a href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(isEnglish ? 'Hello Pandit ji, I need astrology consultation.' : 'नमस्ते पंडित जी, मुझे ज्योतिष परामर्श चाहिए।')}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-white font-sans font-bold text-base px-6 py-4 inline-flex items-center justify-center gap-3">
                WhatsApp
              </a>
              <a href={`tel:${brand.phone1}`} className="btn-glossy text-[#3f2818] font-sans font-bold text-base px-6 py-4 inline-flex items-center justify-center gap-3">
                📞 {isEnglish ? 'Call Now' : 'अभी कॉल करें'} — {brand.phone1}
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8, delay: 0.1 }}>
            <div className="bg-white/72 border border-gold-700/25 rounded-3xl p-7 md:p-8">
              <h3 className="font-hindi text-[#4b2f1a] text-2xl font-bold mb-6">{copy.request}</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div>
                  <label className="font-sans text-[#6b4a2b]/85 text-xs uppercase tracking-wider mb-1.5 block">{copy.name}</label>
                  <input type="text" placeholder={copy.namePh} value={form.name} onChange={e => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: '' }) }} className="form-input" />
                  {errors.name && <p className="font-sans text-red-400 text-xs mt-1.5">{errors.name}</p>}
                </div>
                <div>
                  <label className="font-sans text-[#6b4a2b]/85 text-xs uppercase tracking-wider mb-1.5 block">{copy.phone}</label>
                  <input type="tel" placeholder={copy.phonePh} value={form.phone} onChange={e => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: '' }) }} className="form-input" maxLength="10" />
                  {errors.phone && <p className="font-sans text-red-400 text-xs mt-1.5">{errors.phone}</p>}
                </div>
                <div>
                  <label className="font-sans text-[#6b4a2b]/85 text-xs uppercase tracking-wider mb-1.5 block">{copy.service}</label>
                  <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} className="form-input" style={{ appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23D4AF37' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}>
                    <option value="">{copy.servicePh}</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="font-sans text-[#6b4a2b]/85 text-xs uppercase tracking-wider mb-1.5 block">{copy.message}</label>
                  <textarea placeholder={copy.msgPh} value={form.message} onChange={e => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: '' }) }} rows={4} className="form-input resize-none" />
                  {errors.message && <p className="font-sans text-red-400 text-xs mt-1.5">{errors.message}</p>}
                </div>
                <button type="submit" disabled={loading} className="btn-glossy text-[#3f2818] font-sans font-bold text-base py-4 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed">
                  {loading ? copy.sending : <><span>🚀</span><span>{copy.send}</span></>}
                </button>
                <p className="font-sans text-[#6b4a2b]/75 text-xs text-center">{copy.note}</p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
