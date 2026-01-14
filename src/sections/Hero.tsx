import React, { useEffect, useRef } from 'react'

const heroHighlights = [
  { label: 'Anos de practica', value: '+5' },
  { label: 'Mensuras residenciales', value: '45+' },
  { label: 'Cobertura', value: 'AMBA y Provincia' },
]

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    let timeoutId: number | null = null

    function clearScheduledPause() {
      if (timeoutId !== null) {
        clearTimeout(timeoutId)
        timeoutId = null
      }
    }

    function drawCoverFrameToCanvas() {
      const c = canvasRef.current
      if (!c) return
      const ctx = c.getContext('2d')
      if (!ctx) return
      const vw = v.videoWidth || 1
      const vh = v.videoHeight || 1

      // match canvas display size
      const rect = v.getBoundingClientRect()
      const cw = Math.max(1, Math.round(rect.width))
      const ch = Math.max(1, Math.round(rect.height))
      c.width = cw
      c.height = ch

      const videoAspect = vw / vh
      const canvasAspect = cw / ch

      let sx = 0
      let sy = 0
      let sWidth = vw
      let sHeight = vh

      // cover-style crop
      if (videoAspect > canvasAspect) {
        sWidth = Math.round(vh * canvasAspect)
      } else {
        sHeight = Math.round(vw / canvasAspect)
      }

      // object-position parsing: respect CSS like "center 20%" or "50% 20%"
      const computed = window.getComputedStyle(v)
      const objPos = (computed.objectPosition || '50% 50%').trim()
      const parts = objPos.split(/\s+/)
      let xPart = parts[0] || '50%'
      let yPart = parts[1] || '50%'

      const mapKeyword = (val: string) => {
        if (val === 'center') return '50%'
        if (val === 'left') return '0%'
        if (val === 'right') return '100%'
        if (val === 'top') return '0%'
        if (val === 'bottom') return '100%'
        return val
      }

      xPart = mapKeyword(xPart)
      yPart = mapKeyword(yPart)

      const parsePct = (s: string) => {
        const m = s.match(/([0-9.]+)%/) || s.match(/([0-9.]+)/)
        return m ? Number(m[1]) / 100 : 0.5
      }

      const xPct = parsePct(xPart)
      const yPct = parsePct(yPart)

      if (sWidth < vw) sx = Math.round((vw - sWidth) * xPct)
      if (sHeight < vh) sy = Math.round((vh - sHeight) * yPct)

      ctx.clearRect(0, 0, cw, ch)
      try {
        const computed = window.getComputedStyle(v)
        // apply any CSS filters the video might have (brightness/contrast/etc)
        // ctx.filter accepts the same string as CSS `filter` in modern browsers
        ctx.save()
        ctx.filter = computed.filter || 'none'
        ctx.drawImage(v, sx, sy, sWidth, sHeight, 0, 0, cw, ch)
        ctx.restore()

        // apply the same overlay color the page uses so the captured frame
        // visually matches the darkened video (rgba(14,23,36,0.68))
        ctx.fillStyle = 'rgba(14,23,36,0.68)'
        ctx.fillRect(0, 0, cw, ch)
      } catch (e) {
        // drawing may fail if video not ready
      }
      // show canvas
      c.style.display = 'block'
    }

    function hideCanvas() {
      const c = canvasRef.current
      if (!c) return
      c.style.display = 'none'
    }

    function schedulePause() {
      clearScheduledPause()
      const dur = v.duration
      if (!isFinite(dur) || dur <= 1) return
      const ms = (dur - 1 - v.currentTime) * 1000
      if (ms <= 0) {
        v.pause()
        return
      }
      timeoutId = window.setTimeout(() => {
        v.pause()
      }, ms)
    }

    function handleSeeking() {
      schedulePause()
    }

    function handlePauseEvent() {
      clearScheduledPause()
      // draw the exact paused frame into the canvas and show it
      drawCoverFrameToCanvas()
    }

    function handlePlayEvent() {
      // hide canvas overlay when playing
      hideCanvas()
      schedulePause()
    }

    // Ensure video doesn't loop
    v.removeAttribute('loop')

    v.addEventListener('loadedmetadata', schedulePause)
    v.addEventListener('play', handlePlayEvent)
    v.addEventListener('seeking', handleSeeking)
    v.addEventListener('pause', handlePauseEvent)

    // keep canvas hidden initially
    hideCanvas()

    // In case metadata already loaded
    schedulePause()

    return () => {
      clearScheduledPause()
      v.removeEventListener('loadedmetadata', schedulePause)
      v.removeEventListener('play', handlePlayEvent)
      v.removeEventListener('seeking', handleSeeking)
      v.removeEventListener('pause', handlePauseEvent)
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
            Ingeniero Agrimensor MP 3012 // Registro Profesional
          </p>
        </div>

        <div className="relative w-full h-full overflow-hidden z-10" style={{ height: '47vh' }}>
          {/* Video */}

          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            style={{ objectPosition: 'center 20%' }}
            src="/assets/High_Tech_Surveyor_Twilight_Video.mp4"
            poster="/assets/hero-topografia.jpg"
            autoPlay
            muted
            playsInline
            preload="metadata"
          />

          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full z-20 pointer-events-none"
            style={{ display: 'none' }}
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
                src="/1.png"
                alt="Logo"
                className="block h-10 w-auto md:h-14 lg:h-16 transform scale-125 md:scale-125 lg:scale-125 transition-opacity duration-150 ease-out group-hover:opacity-0"
                loading="lazy"
                decoding="async"
                aria-hidden
              />
              <img
                src="/2.png"
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
              Acompañamos a familias y desarrolladores en mensuras, subdivisiones y relevamientos complejos, garantizando cumplimiento normativo y tiempos de respuesta eficientes.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#contacto"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-base-900 transition hover:bg-slate-100"
              >
                Solicitar presupuesto
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


