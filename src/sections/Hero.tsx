import { useEffect, useRef, useState, useCallback } from 'react'

const heroHighlights = [
  { label: 'Años de trayectoria', value: '+5' },
  { label: 'Proyectos finalizados', value: '45+' },
  { label: 'Cobertura regional', value: 'AMBA y Provincia' },
]

function CountUp({ value, className = '' }: { value: string; className?: string }) {
  const elRef = useRef<HTMLDivElement | null>(null)
  const [display, setDisplay] = useState(value)

  const parseNumeric = (v: string) => {
    const match = v.match(/(\d+)/)
    const hasPlus = /\+$/.test(v) || /^\+/.test(v)
    return { num: match ? parseInt(match[0], 10) : null, hasPlus }
  }

  useEffect(() => {
    const { num, hasPlus } = parseNumeric(value)
    if (num == null) return setDisplay(value)

    if (typeof IntersectionObserver === 'undefined') return setDisplay(value)

    let started = false
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || started) return
        started = true
        const duration = 3000
        const start = performance.now()
        const step = (now: number) => {
          const t = Math.min(1, (now - start) / duration)
          /* ease-out for a smoother, more natural finish */
          const eased = t * (2 - t)
          const current = Math.round(eased * num)
          setDisplay(`${current}${hasPlus ? '+' : ''}`)
          if (t < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
        obs.disconnect()
      })
    }, { threshold: 0.4 })

    if (elRef.current) obs.observe(elRef.current)

    return () => obs.disconnect()
  }, [value])

  return (
    <div ref={elRef} className={className} aria-hidden={false}>
      {display}
    </div>
  )
}

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [videoError, setVideoError] = useState(false)

  // Mobile menu state + refs
  const [mobileOpen, setMobileOpen] = useState(false)
  const triggerRef = useRef<HTMLElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const video = v

    // Short fade duration (ms)
    const fadeMs = 450
    // Set up a simple opacity transition for the fade
    video.style.transition = `opacity ${fadeMs}ms ease`
    video.style.opacity = '1'

    function handleEnded() {
      // Fade out, reset to start, then play and fade back in
      video.style.opacity = '0'
      setTimeout(() => {
        try {
          video.currentTime = 0
        } catch (e) {
          // ignore
        }
        const p = video.play()
        if (p && typeof p.then === 'function') p.catch(() => {})
        requestAnimationFrame(() => {
          video.style.opacity = '1'
        })
      }, fadeMs)
    }

    // Ensure native loop attribute is not set so we control the restart and can fade
    video.removeAttribute('loop')

    video.addEventListener('ended', handleEnded)

    // Attempt to ensure it plays (muted autoplay should work but be defensive)
    const tryPlay = async () => {
      try {
        await video.play()
        setIsPlaying(!video.paused)
      } catch (e) {
        // keep the video state but do not show poster — only show fallback if there's a media error
        setIsPlaying(false)
      }
    }
    tryPlay()

    return () => {
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  // Listen to global toggle events (StickyHeader will dispatch)
  useEffect(() => {
    const onToggle = (e: Event) => {
      const detail = (e as CustomEvent)?.detail || {}
      if (detail && detail.trigger) triggerRef.current = detail.trigger
      setMobileOpen(true)
    }
    window.addEventListener('mobile-menu-toggle', onToggle as EventListener)
    return () => window.removeEventListener('mobile-menu-toggle', onToggle as EventListener)
  }, [])

  // Manage focus and escape key when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      // lock scroll
      document.body.style.overflow = 'hidden'
      // focus close button
      requestAnimationFrame(() => closeButtonRef.current?.focus())

      const onKey = (ev: KeyboardEvent) => {
        if (ev.key === 'Escape') setMobileOpen(false)
      }
      window.addEventListener('keydown', onKey)
      return () => {
        window.removeEventListener('keydown', onKey)
        document.body.style.overflow = ''
        // restore focus
        triggerRef.current?.focus()
      }
    }
    return undefined
  }, [mobileOpen])

  const togglePlayback = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play().catch(() => {})
      setIsPlaying(true)
    } else {
      v.pause()
      setIsPlaying(false)
    }
  }, [])

  // Make hero keywords become permanently emphasized after the user interacts (hover/focus/tap)
  const headingRef = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return

    const lock = () => {
      if (!el.classList.contains('emphasis-locked')) el.classList.add('emphasis-locked')
    }

    const onEnter = () => lock()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        lock()
      }
    }

    // Lock emphasis on first interaction; also allow repeated interactions to re-lock if desired
    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('touchstart', onEnter, { passive: true })
    el.addEventListener('focus', onEnter)
    el.addEventListener('keydown', onKey)

    return () => {
      el.removeEventListener('mouseenter', onEnter as EventListener)
      el.removeEventListener('touchstart', onEnter as EventListener)
      el.removeEventListener('focus', onEnter as EventListener)
      el.removeEventListener('keydown', onKey as EventListener)
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
            Estudio de Agrimensura y Topografía — Matrícula Profesional 3012
          </p>
        </div>

        <div className="relative w-full h-full overflow-hidden z-10" style={{ height: '47vh' }}>
          {/* Video - poster removed; show fallback image only on error */}

          {!videoError ? (
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              style={{ objectPosition: 'center 20%' }}
              src={import.meta.env.BASE_URL + 'assets/High_Tech_Surveyor_Twilight_Video.mp4'}
              autoPlay
              muted
              playsInline
              preload="metadata"
              onError={() => setVideoError(true)}
              aria-label="Video de presentación"
            />
          ) : (
            <img
              src={import.meta.env.BASE_URL + 'assets/hero-topografia.jpg'}
              alt="Imagen de presentación (video no disponible)"
              className="h-full w-full object-cover"
              style={{ objectPosition: 'center 20%' }}
              loading="lazy"
            />
          )}

          {/* Overlay oscuro para mejorar contraste del texto */}
          <div className="absolute inset-0" style={{background: 'linear-gradient(180deg, rgba(14,23,36,0.52), rgba(14,23,36,0.76))'}} />

          {/* Decorative floating accents */}
          <div className="absolute -left-6 top-12 pointer-events-none opacity-20 blur-xl transform rotate-6 accent-floating">
            <svg width="220" height="220" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <circle cx="50" cy="50" r="40" fill="#5eead4" />
            </svg>
          </div>
          <div className="absolute right-8 top-6 pointer-events-none opacity-18 blur-lg transform -rotate-12 accent-floating">
            <svg width="160" height="160" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <rect x="10" y="10" width="80" height="80" rx="20" fill="#7dd3fc" />
            </svg>
          </div>

          {/* Play/Pause control */}
          {!videoError && (
            <button
              onClick={togglePlayback}
              aria-pressed={!isPlaying}
              aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
              className="hidden sm:flex absolute z-50 left-6 bottom-6 video-control-minimal"
              title={isPlaying ? 'Pausar' : 'Reproducir'}
            >
              {/* Minimal icon: small outlined circle with simple symbol */}
              {isPlaying ? (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <rect x="6" y="5" width="3" height="14" rx="0.6" fill="currentColor" />
                  <rect x="15" y="5" width="3" height="14" rx="0.6" fill="currentColor" />
                </svg>
              ) : (
                <svg className="h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M6 4l12 8-12 8V4z" fill="currentColor" />
                </svg>
              )}
            </button>
          )}

          {/* SVG curvo que recorta visualmente el borde inferior del contenedor de video. Usa fill currentColor para coincidir con bg-base-900 */}
          <svg className="absolute left-0 bottom-0 w-full h-[6.5rem] z-30 pointer-events-none hero-curve" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden>
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
            <span className="relative flex items-center justify-center text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
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
          {/* desktop links */}
          <div className="hidden gap-6 md:flex">
            <a href="#servicios" className="transition hover:text-white">
              Servicios
            </a>
            <a href="#proceso" className="transition hover:text-white">
              Proceso
            </a>
            <a href="#galeria" className="transition hover:text-white">
              Galería
            </a>
            <a href="#opiniones" className="transition hover:text-white">
              Opiniones
            </a>
            <a href="#contacto" className="transition hover:text-white">
              Contacto
            </a>
          </div>

          {/* mobile CTA and hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <a href="#contacto" className="cta-secondary px-3 py-2 text-xs">Consultar</a>
            <button
              className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 text-white bg-white/6"
              aria-label="Abrir menú"
              aria-expanded={mobileOpen ? 'true' : 'false'}
              onClick={(e) => {
                triggerRef.current = e.currentTarget as HTMLElement
                setMobileOpen(true)
              }}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile menu overlay */}
        {mobileOpen && (
          <div className="fixed inset-0 z-60 mobile-menu-overlay" role="dialog" aria-modal="true" aria-label="Menú móvil">
            <div className="absolute inset-0 bg-black/55 backdrop-blur-sm transition-opacity" onClick={() => setMobileOpen(false)} />
            <div className="absolute left-0 right-0 top-12 mx-4 rounded-xl bg-base-900/95 border border-white/10 p-6 shadow-lg mobile-menu-panel">
              <div className="flex items-center justify-between">
                <div className="font-display text-lg font-semibold">Menú</div>
                <button ref={closeButtonRef} className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center text-white" aria-label="Cerrar menú" onClick={() => setMobileOpen(false)}>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <nav className="mt-4 flex flex-col gap-3">
                <a href="#servicios" className="block py-3 px-2 rounded text-white hover:text-sky-400" onClick={() => setMobileOpen(false)}>Servicios</a>
                <a href="#proceso" className="block py-3 px-2 rounded text-white hover:text-sky-400" onClick={() => setMobileOpen(false)}>Proceso</a>
                <a href="#galeria" className="block py-3 px-2 rounded text-white hover:text-sky-400" onClick={() => setMobileOpen(false)}>Galería</a>
                <a href="#opiniones" className="block py-3 px-2 rounded text-white hover:text-sky-400" onClick={() => setMobileOpen(false)}>Opiniones</a>
                <a href="#contacto" className="block py-3 px-2 rounded text-white hover:text-sky-400" onClick={() => setMobileOpen(false)}>Contacto</a>
                <a href="#contacto" className="mt-3 inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold uppercase tracking-wide text-base-900" onClick={() => setMobileOpen(false)}>Solicitar propuesta</a>
              </nav>
            </div>
          </div>
        )}

        <div style={{ marginTop: 'calc(36vh - 3px)' }} className="grid gap-12 lg:grid-cols-1 place-items-center text-center">
          <div className="max-w-3xl">
            <h1
              ref={headingRef}
              tabIndex={0}
              className="hero-heading mt-0 font-display font-extrabold text-4xl leading-tight text-white md:text-5xl lg:text-6xl"
              style={{ marginTop: '-5px' }}
            >
              <span className="inline md:block md:whitespace-nowrap"><span className="emphasis-bold">Exactitud</span> en cada medición.</span>
              <span className="inline md:block md:whitespace-nowrap"><span className="emphasis-bold">Seguridad</span> en cada proyecto.</span>
            </h1>
            <p className="mt-6 mx-auto max-w-xl md:max-w-2xl lg:max-w-3xl text-lg text-slate-300">
              Brindamos soluciones integrales para desarrollos inmobiliarios, empresas e instituciones en mensuras, subdivisiones
              y relevamientos de alta complejidad, garantizando cumplimiento normativo, control de calidad y entregables ejecutivos.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#contacto"
                className="cta-primary focus-visible:ring-2 focus-visible:ring-offset-2"
              >
                Solicitar propuesta
                <span className="ml-3 inline-block transform transition-transform group-hover:translate-x-1">➜</span>
              </a>
              <a
                href="#contacto"
                className="cta-secondary"
              >
                Contactar
              </a>
            </div>

            <div className="mt-8 grid justify-items-center gap-4 sm:grid-cols-3 reveal-group items-stretch">
              {heroHighlights.map((item) => (
                <div key={item.label} className="highlight-card reveal">
                  {item.label === 'Proyectos ejecutados' ? (
                    <div className="flex flex-col items-center">
                        <p className="text-2xl md:text-3xl font-semibold text-white"><CountUp value={item.value} /></p>
                      <p className="mt-2 text-sm uppercase tracking-wide text-slate-400 text-center">{item.label}</p>
                    </div>
                  ) : item.label === 'Cobertura regional' ? (
                    <div className="flex flex-col items-center">
                      <p className="text-2xl md:text-3xl font-semibold text-white"><CountUp value={item.value} /></p>
                      <p className="mt-2 text-sm uppercase tracking-wide text-slate-400 text-center">{item.label}</p>
                    </div>
                  ) : (
                    <>
                      <p className="text-2xl md:text-3xl font-semibold text-white flex items-center justify-center"><CountUp value={item.value} /></p>
                      <p className="mt-2 text-sm uppercase tracking-wide text-slate-400">{item.label}</p>
                    </>
                  )}
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


