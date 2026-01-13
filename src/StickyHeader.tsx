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
              src="/1.png"
              alt="Logo"
              className="block h-10 w-auto md:h-12 lg:h-14 transition-opacity duration-150 ease-out group-hover:opacity-0"
              loading="lazy"
              decoding="async"
              aria-hidden
            />
            <img
              src="/2.png"
              alt="Logo hover"
              className="absolute inset-0 m-auto h-10 w-auto md:h-12 lg:h-14 opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100"
              loading="lazy"
              decoding="async"
              aria-hidden
            />
          </span>
        </a>
        <div className="hidden gap-6 md:flex">
          <a href="#servicios" className="transition hover:text-white">
            Servicios
          </a>
          <a href="#proceso" className="transition hover:text-white">
            Proceso
          </a>
          <a href="#contacto" className="transition hover:text-white">
            Contacto
          </a>
        </div>
        <a
          href="#contacto"
          className="rounded-full border border-white/20 px-5 py-2 text-xs font-medium uppercase tracking-wide text-white transition hover:border-white"
        >
          Consultar
        </a>
      </div>
    </nav>
  );
}
