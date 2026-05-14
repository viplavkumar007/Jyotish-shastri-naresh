import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import About from './sections/About'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import CTAStrip from './sections/CTAStrip'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  const [language, setLanguage] = useState('hi')
  const handleToggleLanguage = () => setLanguage(prev => (prev === 'hi' ? 'en' : 'hi'))

  return (
    <div className="min-h-screen text-cream overflow-x-hidden">
      <Navbar language={language} onToggleLanguage={handleToggleLanguage} />
      <main>
        <Hero language={language} />
        <Services language={language} />
        <About language={language} />
        <Testimonials language={language} />
        <CTAStrip language={language} />
        <FAQ language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
      <WhatsAppFloat language={language} />
    </div>
  )
}
