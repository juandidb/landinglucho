const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-base-900/90 border-t border-white/5 text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <a href="#inicio" className="inline-flex items-center gap-3">
              <img src="/assets/logo-navbar.svg" alt="Estudio de Agrimensura" className="h-10 w-auto" loading="lazy" />
              <div className="text-left">
                <div className="font-display font-semibold text-white">Estudio de Agrimensura</div>
                <div className="text-sm tracking-widest text-slate-400">Servicios profesionales</div>
              </div>
            </a>
            <p className="mt-4 max-w-sm text-sm text-slate-400">
              Servicios profesionales de agrimensura, mensuras y subdivisiones con alta
              precisión técnica y cumplimiento normativo.
            </p>
          </div>

          <div className="flex justify-center">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Enlaces</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#servicios" className="hover:text-white transition">Servicios</a>
                </li>
                <li>
                  <a href="#proceso" className="hover:text-white transition">Proceso</a>
                </li>
                <li>
                  <a href="#sobre" className="hover:text-white transition">Sobre nosotros</a>
                </li>
                <li>
                  <a href="#contacto" className="hover:text-white transition">Contacto</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Contacto</h4>
            <div className="mt-4 text-sm text-slate-300">
              <p>Tel: <a href="tel:+5492317409836" className="hover:text-white">(0231) 740-9836</a></p>
              <p className="mt-2">Email: <a href="mailto:contacto@lucianoclerico.com" className="hover:text-white">contacto@lucianoclerico.com</a></p>
              <p className="mt-2 text-slate-400 text-sm">MP 3012 — Provincia de Buenos Aires</p>
            </div>
            <div className="mt-4 flex gap-3">
              <a href="https://wa.me/5492317409836" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/6 px-3 py-2 text-sm hover:bg-white/10 transition">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-green-400" aria-hidden>
                  <path fill="currentColor" d="M16.67 7.33c-.4-.4-1.05-.4-1.45 0l-.33.33c-.18.18-.44.26-.7.22-.45-.06-.9-.09-1.35-.09a5.37 5.37 0 0 0-1.9.33 5.3 5.3 0 0 0-1.63.92A5.16 5.16 0 0 0 8.5 10c0 .35.04.7.12 1.03.07.29.2.56.38.8l.2.25c.16.2.2.48.1.73l-.52 1.3c-.18.45.06.95.5 1.12.5.2 1.02.3 1.55.3 3.4 0 6.17-2.77 6.17-6.17 0-.53-.1-1.03-.3-1.5-.14-.36-.46-.68-.86-1.02z"/>
                </svg>
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
              <a href="#contacto" className="inline-flex items-center gap-2 rounded-full border border-white/6 px-3 py-2 text-sm hover:border-white/20 transition">Consultar</a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p className="text-center md:text-left">© {currentYear} Estudio de Agrimensura — MP 3012</p>
          <p className="mt-3 md:mt-0">Desarrollado por <a href="https://divstudio.me" target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">DivStudio</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
