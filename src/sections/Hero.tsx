import { useEffect, useRef } from 'react'

const heroHighlights = [
  { label: 'Años de trayectoria', value: '+5' },
  { label: 'Proyectos ejecutados', value: '45+' },
  { label: 'Cobertura regional', value: 'AMBA y Provincia' },
]

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const video = v

    let timeoutId: number | null = null

    function clearScheduledPause() {
      if (timeoutId !== null) {
        clearTimeout(timeoutId)
        timeoutId = null
      }
    }

    function schedulePause() {
      clearScheduledPause()
      const dur = video.duration
      if (!isFinite(dur) || dur <= 1) return
      const ms = (dur - 1 - video.currentTime) * 1000
      if (ms <= 0) {
        video.pause()
        return
      }
      timeoutId = window.setTimeout(() => {
        video.pause()
      }, ms)
    }

    function handleSeeking() {
      schedulePause()
    }

    // Ensure video doesn't loop
    video.removeAttribute('loop')

    video.addEventListener('loadedmetadata', schedulePause)
    video.addEventListener('play', schedulePause)
    video.addEventListener('seeking', handleSeeking)
    video.addEventListener('pause', clearScheduledPause)

    // In case metadata already loaded
    schedulePause()

    return () => {
      clearScheduledPause()
      video.removeEventListener('loadedmetadata', schedulePause)
      video.removeEventListener('play', schedulePause)
      video.removeEventListener('seeking', handleSeeking)
      video.removeEventListener('pause', clearScheduledPause)
    }
  }, [])
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden text-white"
      style={{ fontFamily: "'Inter', 'IBM Plex Sans', sans-serif", backgroundColor: '#0e1724' }}
    >
      <div className="absolute left-0 top-0 w-full" style={{ height: '47vh' }} aria-hidden>
        <div className="absolute left-0 bottom-0 w-full flex justify-center items-end z-40" style={{ height: '47vh', pointerEvents: 'none' }}>
          <p className="mb-4 font-display text-xs uppercase tracking-[0.35em] text-white drop-shadow-lg bg-transparent sm:bg-base-900/60 px-4 py-2 rounded-t-xl hero-info-badge text-center sm:text-left" style={{ pointerEvents: 'auto' }}>
            Estudio de Agrimensura y Topografía — Servicios Corporativos
          </p>
        </div>

        <div className="relative w-full h-full overflow-hidden z-10" style={{ height: '47vh' }}>
          {/* Video */}

          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            style={{ objectPosition: 'center 20%' }}
            src={import.meta.env.BASE_URL + 'assets/High_Tech_Surveyor_Twilight_Video.mp4'}
            poster={import.meta.env.BASE_URL + 'assets/hero-topografia.jpg'}
            autoPlay
            muted
            playsInline
            preload="metadata"
          />

          {/* Overlay oscuro para mejorar contraste del texto */}
          <div className="absolute inset-0" style={{background: 'rgba(14,23,36,0.68)'}} />


          {/* Eliminados overlays para que la curva y el fondo sean idénticos */}

          {/* SVG curvo que recorta visualmente el borde inferior del contenedor de video. Usa fill currentColor para coincidir con bg-base-900 */}
          <svg className="absolute left-0 bottom-0 w-full h-[6.5rem] z-30 pointer-events-none" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden>
            <path fill="#0e1724" d="M0,64 C240,160 480,224 720,208 C960,192 1200,96 1440,80 L1440,320 L0,320 Z" />
          </svg>
        </div>
      </div>
      {/* Overlay mesh eliminado para uniformidad total de color */}
      <div className="relative mx-auto max-w-6xl px-6 pb-12 pt-4 lg:pb-20 lg:pt-6 z-50">
        <nav className="flex flex-wrap items-center justify-between gap-4 text-sm text-slate-200/80 h-[3rem] md:h-[3.5rem] lg:h-[4rem]">
          <a
            href="#inicio"
            className="group flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-slate-300 transition hover:text-white"
            aria-label="Volver al inicio"
          >
            <span className="relative flex items-center justify-center text-white">
              <img
                src={import.meta.env.BASE_URL + '1.png'}
                alt="Logo"
                className="block h-10 w-auto md:h-14 lg:h-16 transform scale-125 md:scale-125 lg:scale-125 transition-opacity duration-150 ease-out group-hover:opacity-0"
                loading="lazy"
                decoding="async"
                aria-hidden
              />
              <img
                src={import.meta.env.BASE_URL + '2.png'}
                alt="Logo hover"
                className="absolute inset-0 m-auto h-10 w-auto md:h-14 lg:h-16 transform scale-125 md:scale-125 lg:scale-125 opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100"
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
        </nav>

        <div style={{ marginTop: 'calc(36vh - 3px)' }} className="grid gap-12 lg:grid-cols-1 place-items-center text-center">
          <div className="max-w-3xl">
            <h1
              className="mt-0 font-display font-extrabold text-4xl leading-tight text-white md:text-5xl lg:text-6xl"
              style={{ marginTop: '-5px' }}
            >
              <span className="inline md:block md:whitespace-nowrap">Exactitud en cada medición.</span>
              <span className="inline md:block md:whitespace-nowrap">Seguridad en cada proyecto.</span>
            </h1>
            <p className="mt-6 mx-auto max-w-xl md:max-w-2xl lg:max-w-3xl text-lg text-slate-300">
              Brindamos soluciones integrales para desarrollos inmobiliarios, empresas e instituciones en mensuras, subdivisiones
              y relevamientos de alta complejidad, garantizando cumplimiento normativo, control de calidad y entregables ejecutivos.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#contacto"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-base-900 transition hover:bg-slate-100"
              >
                Solicitar propuesta
              </a>
              <a
                href="#contacto"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white"
              >
                Contactar
              </a>
            </div>

            <div className="mt-12 grid justify-items-center gap-6 sm:grid-cols-3 reveal-group">
              {heroHighlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 p-4 reveal">
                  <p className="text-3xl font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-sm uppercase tracking-wide text-slate-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          </div>
      </div>
    </section>
  )
}

export default Hero


