import { useEffect, useRef, useState } from 'react'

type Img = { src: string; alt: string }

const images: Img[] = [
  { src: 'assets/process-campo.jpg', alt: 'Relevamiento topográfico en campo' },
  { src: 'assets/hero-topografia.jpg', alt: 'Equipo en zona de obra' },
  { src: 'assets/about-equipo.jpg', alt: 'Equipo del estudio realizando relevamientos' },
  { src: 'assets/confidence-instrumento.jpg', alt: 'Instrumentos de precisión en taller' },
  { src: 'assets/process-campo.jpg', alt: 'Relevamiento topográfico en campo (detalle)' },
  { src: 'assets/hero-topografia.jpg', alt: 'Vista aérea del terreno relevado' },
]

const Gallery = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const triggerRef = useRef<HTMLElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  // carousel refs + state for mobile swipe pagination
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const rafRef = useRef<number | null>(null)

  // focus management: restore focus to last thumbnail
  useEffect(() => {
    if (openIndex != null) {
      document.body.style.overflow = 'hidden'
      requestAnimationFrame(() => closeButtonRef.current?.focus())
    } else {
      document.body.style.overflow = ''
      requestAnimationFrame(() => triggerRef.current?.focus())
    }
  }, [openIndex])

  useEffect(() => {
    const el = carouselRef.current
    if (!el) return
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        const children = Array.from(el.children)
        const rect = el.getBoundingClientRect()
        let closest = 0
        let closestDist = Infinity
        children.forEach((c, i) => {
          const cRect = (c as HTMLElement).getBoundingClientRect()
          const dist = Math.abs(cRect.left - rect.left)
          if (dist < closestDist) {
            closest = i
            closestDist = dist
          }
        })
        setCarouselIndex(closest)
      })
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    // initialize index
    onScroll()
    return () => {
      el.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (openIndex == null) return
      if (e.key === 'Escape') setOpenIndex(null)
      if (e.key === 'ArrowLeft') setOpenIndex((i) => (i == null ? null : (i - 1 + images.length) % images.length))
      if (e.key === 'ArrowRight') setOpenIndex((i) => (i == null ? null : (i + 1) % images.length))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openIndex])

  const open = (index: number, el: HTMLElement | null) => {
    triggerRef.current = el
    setOpenIndex(index)
  }

  const close = () => setOpenIndex(null)

  const showPrev = () => setOpenIndex((i) => (i == null ? null : (i - 1 + images.length) % images.length))
  const showNext = () => setOpenIndex((i) => (i == null ? null : (i + 1) % images.length))

  // touch swipe for lightbox
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)
  const touchDeltaX = useRef(0)

  const onLightboxTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0]
    touchStartX.current = t.clientX
    touchStartY.current = t.clientY
    touchDeltaX.current = 0
  }

  const onLightboxTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return
    const t = e.touches[0]
    const dx = t.clientX - touchStartX.current
    const dy = t.clientY - (touchStartY.current ?? 0)
    touchDeltaX.current = dx
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) e.preventDefault()
  }

  const onLightboxTouchEnd = () => {
    const dx = touchDeltaX.current
    const threshold = 50
    if (Math.abs(dx) > threshold) {
      if (dx > 0) showPrev()
      else showNext()
    }
    touchStartX.current = null
    touchStartY.current = null
    touchDeltaX.current = 0
  }
  return (
    <section id="galeria" className="bg-base-800/60 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">Galería</p>
          <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">Trabajos y relevamientos en terreno</h2>
          <p className="mt-4 text-slate-300 max-w-2xl">Estas son algunas fotos de trabajos y relevamientos; puede hacer clic para verlas en detalle.</p>
        </div>

        <div ref={carouselRef} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 reveal-group gallery-carousel">
          {images.map((img, idx) => (
            <figure key={idx} className="overflow-hidden rounded-2xl border border-white/8 bg-base-900/40 p-0 reveal gallery-item">
              <button
                onClick={(e) => open(idx, e.currentTarget)}
                aria-label={`Abrir imagen ${idx + 1}: ${img.alt}`}
                className="w-full text-left"
              >
                <img src={import.meta.env.BASE_URL + img.src} alt={img.alt} className="h-56 w-full object-cover" loading="lazy" decoding="async" />
                <figcaption className="p-3 text-sm text-slate-300">{img.alt}</figcaption>
              </button>
            </figure>
          ))}
        </div>

        {/* mobile pagination dots */}
        <div className="mt-4 flex items-center justify-center gap-2 sm:hidden">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const el = carouselRef.current
                if (!el) return
                const child = el.children[i] as HTMLElement | undefined
                if (child) child.scrollIntoView({ behavior: 'smooth', inline: 'start' })
              }}
              aria-label={`Ir a la imagen ${i + 1}`}
              className={`h-2 w-8 rounded-full transition ${i === carouselIndex ? 'bg-slate-100' : 'bg-slate-300/30 hover:bg-slate-300/50'}`}
            />
          ))}
        </div>

        {openIndex != null && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-6" role="dialog" aria-modal="true" aria-label="Imagen en grande">
            <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" onClick={close} />
            <div className="relative z-10 max-w-4xl w-full gallery-modal" onTouchStart={onLightboxTouchStart} onTouchMove={onLightboxTouchMove} onTouchEnd={onLightboxTouchEnd}>
              <button ref={closeButtonRef} onClick={close} aria-label="Cerrar" className="absolute right-0 top-0 m-3 rounded-full border border-white/10 bg-base-900/70 p-2 text-white">✕</button>

              <div className="rounded-2xl overflow-hidden border border-white/8 bg-base-900/90">
                <img src={import.meta.env.BASE_URL + images[openIndex].src} alt={images[openIndex].alt} className="w-full object-contain max-h-[80vh] bg-black" />
                <div className="flex items-center justify-between p-3">
                  <div className="text-sm text-slate-300">{images[openIndex].alt}</div>
                  <div className="flex gap-2">
                    <button onClick={showPrev} aria-label="Imagen anterior" className="rounded-full border border-white/10 bg-base-900/50 px-3 py-2 text-white">◀</button>
                    <button onClick={showNext} aria-label="Siguiente imagen" className="rounded-full border border-white/10 bg-base-900/50 px-3 py-2 text-white">▶</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery
