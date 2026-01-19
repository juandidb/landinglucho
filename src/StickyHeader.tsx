import { useEffect, useState } from 'react';

export default function StickyHeader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const target = document.getElementById('servicios');
    if (!target) return;
    const onScroll = () => {
      const rect = target.getBoundingClientRect();
      setShow(rect.top <= 0);
    };
    window.addEventListener('scroll', onScroll);
    onScroll(); // inicializa
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        show ? 'backdrop-blur-md bg-base-900/70 border-b border-white/10 shadow-lg' : 'pointer-events-none opacity-0'
      }`}
      style={{height: '3.5rem'}}
      aria-label="Navegación principal sticky"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 h-full">
        <a
          href="#inicio"
          className="group flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-slate-300 transition hover:text-white"
          aria-label="Volver al inicio"
        >
          <span className="relative flex items-center justify-center text-white">
            <img
              src={import.meta.env.BASE_URL + '1.png'}
              alt="Logo"
              className="block h-10 w-auto md:h-12 lg:h-14 transition-opacity duration-150 ease-out group-hover:opacity-0"
              loading="lazy"
              decoding="async"
              aria-hidden
            />
            <img
              src={import.meta.env.BASE_URL + '2.png'}
              alt="Logo hover"
              className="absolute inset-0 m-auto h-10 w-auto md:h-12 lg:h-14 opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100"
              loading="lazy"
              decoding="async"
              aria-hidden
            />
          </span>
        </a>
        {/* Desktop links */}
        <div className="hidden gap-6 md:flex">
          <a href="#servicios" className="transition hover:text-sky-400">
            Servicios
          </a>
          <a href="#proceso" className="transition hover:text-sky-400">
            Proceso
          </a>
          <a href="#galeria" className="transition hover:text-sky-400">
            Galería
          </a>
          <a href="#opiniones" className="transition hover:text-sky-400">
            Opiniones
          </a>
          <a href="#contacto" className="transition hover:text-sky-400">
            Contacto
          </a>
        </div>

        {/* Mobile hamburger & CTA */}
        <div className="flex items-center gap-3 md:hidden">
          <a href="#contacto" className="cta-secondary px-3 py-2 text-xs">Consultar</a>
          <button
            className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 text-white bg-white/6"
            aria-label="Abrir menú"
            onClick={(e) => window.dispatchEvent(new CustomEvent('mobile-menu-toggle', { detail: { trigger: e.currentTarget } }))}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}