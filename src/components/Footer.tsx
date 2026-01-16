
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-base-900 border-t border-white/10 text-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:py-20 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 border-b border-white/10 pb-10">
          <div className="flex items-center gap-4">
            <img
              src={import.meta.env.BASE_URL + 'assets/logo-navbar.svg'}
              alt="Luciano Clerico - Estudio de Agrimensura"
              className="h-14 w-auto drop-shadow-lg"
              loading="lazy"
            />
            <div>
              <span className="block font-display text-2xl font-bold text-white tracking-tight leading-tight">Luciano Clerico</span>
              <span className="block text-base font-medium text-sky-400 tracking-widest mt-1">Estudio de Agrimensura</span>
            </div>
          </div>
          <div className="flex flex-col md:items-end gap-2 text-base">
            <span className="font-semibold text-white">Contacto directo</span>
            <a href="tel:+542317409836" className="hover:text-sky-400 transition">(2317) 409836</a>
            <a href="mailto:lucianoclerico@gmail.com" className="hover:text-sky-400 transition">lucianoclerico@gmail.com</a>
            <span className="text-xs text-slate-400 mt-1">MP 3012 — Provincia de Buenos Aires</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">Servicios</h4>
            <ul className="space-y-2 text-base">
              <li><a href="#servicios" className="hover:text-sky-400 transition">Servicios</a></li>
              <li><a href="#proceso" className="hover:text-sky-400 transition">Proceso</a></li>
              <li><a href="#sobre" className="hover:text-sky-400 transition">Sobre nosotros</a></li>
              <li><a href="#contacto" className="hover:text-sky-400 transition">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">Redes y consulta</h4>
            <div className="flex flex-col gap-2">
              <a href="https://wa.me/5492317409836" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-base text-green-400 hover:bg-green-500/20 transition">
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden><path fill="currentColor" d="M16.67 7.33c-.4-.4-1.05-.4-1.45 0l-.33.33c-.18.18-.44.26-.7.22-.45-.06-.9-.09-1.35-.09a5.37 5.37 0 0 0-1.9.33 5.3 5.3 0 0 0-1.63.92A5.16 5.16 0 0 0 8.5 10c0 .35.04.7.12 1.03.07.29.2.56.38.8l.2.25c.16.2.2.48.1.73l-.52 1.3c-.18.45.06.95.5 1.12.5.2 1.02.3 1.55.3 3.4 0 6.17-2.77 6.17-6.17 0-.53-.1-1.03-.3-1.5-.14-.36-.46-.68-.86-1.02z"/></svg>
                WhatsApp
              </a>
              <a href="#contacto" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-base text-white hover:border-sky-400 hover:text-sky-400 transition">Solicitar propuesta</a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">Ubicación</h4>
            <p className="text-base text-slate-300">Pcia. de Buenos Aires<br />Atención regional y provincial</p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p className="text-center md:text-left">© {currentYear} Luciano Clerico — Estudio de Agrimensura. Todos los derechos reservados.</p>
          <p className="text-center md:text-right">Desarrollado por <a href="https://divstudio.me" target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">DivStudio</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
