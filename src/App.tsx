import Hero from './sections/Hero'
import StickyHeader from './StickyHeader'
import Services from './sections/Services'
import About from './sections/About'
import Confidence from './sections/Confidence'
import Process from './sections/Process'
import Contact from './sections/Contact'

const whatsappUrl =
  'https://wa.me/5492317409836?text=Hola%20Luciano%2C%20quisiera%20coordinar%20una%20consulta%20de%20agrimensura.'
const currentYear = new Date().getFullYear()

function App() {
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
      <footer className="border-t border-white/5 bg-base-900/80 py-10 text-center text-xs uppercase tracking-[0.4em] text-slate-500">
        <p>&copy; {currentYear} Luciano Clerico - Profesional matriculado en Buenos Aires - MP 3012</p>
        <p className="mt-4 text-[0.6rem] tracking-[0.35em] text-slate-500">Todos los derechos reservados</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 tracking-[0.3em] text-slate-400">
          <span className="font-semibold">Desarrollado por</span>
          <a
            href="#"
            aria-label="Visitar DivDesign"
            className="group relative inline-flex items-center transition duration-300 hover:opacity-100"
          >
            <img
              src="/logo.png"
              alt="DivDesign"
              className="h-6 w-auto filter brightness-125 contrast-125 drop-shadow-[0_0_0.75rem_rgba(255,255,255,0.4)] transition duration-300 ease-out group-hover:scale-110 group-hover:drop-shadow-[0_0_1.5rem_rgba(59,130,246,0.7)] group-hover:rotate-1"
              loading="lazy"
            />
          </a>
        </div>
        <div className="mt-6 flex items-center justify-center">
          <a
            href="#inicio"
            className="group flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-slate-300 transition hover:text-white"
            aria-label="Volver al inicio"
          >
            <span className="flex items-center justify-center text-white">
              <img
                src="/assets/logo-navbar.svg"
                alt=""
                className="h-6 w-6"
                loading="lazy"
                aria-hidden
              />
            </span>
            <span className="font-display text-left leading-tight">
              Luciano Clerico
              <span className="block text-[0.55rem] tracking-[0.5em] text-slate-400 group-hover:text-white/80">
                Estudio de Agrimensura
              </span>
            </span>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
