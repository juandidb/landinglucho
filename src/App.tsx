import { useEffect } from 'react'
import Hero from './sections/Hero'
import StickyHeader from './StickyHeader'
import Services from './sections/Services'
import About from './sections/About'
import Confidence from './sections/Confidence'
import Process from './sections/Process'
import Contact from './sections/Contact'
import Footer from './components/Footer'

const whatsappUrl =
  'https://wa.me/5492317409836?text=Hola%2C%20quisiera%20coordinar%20una%20consulta%20de%20agrimensura.'
const currentYear = new Date().getFullYear()

function App() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('.reveal')) as Element[]
    if (!nodes.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    nodes.forEach((n) => observer.observe(n))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="page-shell bg-base-900 text-slate-100">
      <StickyHeader />
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full border border-white/15 bg-base-900/80 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:border-white/40 hover:bg-base-900/95"
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="h-5 w-5 text-green-400" aria-hidden>
          <path
            fill="currentColor"
            d="M16 4.5A11.4 11.4 0 0 0 4.5 15.9a11.1 11.1 0 0 0 1.6 5.8L5 27l5.5-1.1a11.7 11.7 0 0 0 5.5 1.4h.1A11.4 11.4 0 0 0 27.5 15.9 11.2 11.2 0 0 0 16 4.5Zm0 20.6a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.3.7.7-3.2-.2-.3a9 9 0 0 1-1.4-4.7 9.2 9.2 0 0 1 9.2-9.2 9.2 9.2 0 0 1 9.2 9.2A9.2 9.2 0 0 1 16 25.1Zm4.8-6.8c-.3-.2-1.8-.9-2-.9s-.5-.1-.7.2-.8.9-1 1.1-.4.2-.7.1a7.4 7.4 0 0 1-2.2-1.4 8 8 0 0 1-1.5-2.1c-.2-.4 0-.6.2-.8l.5-.6.2-.5v-.4l-.3-.8c-.1-.4-.3-.9-.5-.9s-.5 0-.7 0-.7.1-1 .5a1.9 1.9 0 0 0-.6 1.4 3.4 3.4 0 0 0 .7 1.8 13 13 0 0 0 4.8 4.4 5.4 5.4 0 0 0 2.3.8 2 2 0 0 0 1.7-1 1.6 1.6 0 0 0 .1-1c-.1-.2-.2-.2-.5-.4Z"
          />
        </svg>
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
      <Hero />
      <Services />
      <About />
      <Confidence />
      <Process />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
