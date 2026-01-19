import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    quote:
      'La verdad que Lucho me salvó la vida, no sé qué habría sido de mí sin él.',
    name: 'Mateo Trombetta',
    role: 'Particular',
    rating: 5,
  },
  {
    quote:
      'Trabajo impecable: coordinación precisa, documentación clara y en tiempos súper cortos. Recomendable para desarrollos residenciales y comerciales.',
    name: 'María Gómez',
    role: 'Desarrolladora inmobiliaria',
    rating: 5,
  },
  {
    quote:
      'Profesionalismo y detalle técnico. El informe y plano final fueron determinantes para la aprobación del proyecto.',
    name: 'Carlos Fernández',
    role: 'Arquitecto',
    rating: 4.5,
  },
  {
    quote:
      'Trabajo con varios profesionales y pocos tienen este nivel de orden y precisión. Cumplió plazos, entregó todo georreferenciado y nos evitó demoras innecesarias.',
    name: 'Carlos M',
    role: 'Desarrollador inmobiliario',
    rating: 5,
  },
  {
    quote:
      'Excelente trato y disponibilidad. Luciano nos resolvió todas las dudas y nos acompañaron hasta la aprobación, súper recomendable',
    name: 'Laura Sánchez',
    role: 'Propietaria',
    rating: 5,
  },
]

const Testimonials = () => {
  const [index, setIndex] = useState(0)
  const autoRef = useRef<number | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  // touch swipe state
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)
  const touchDeltaX = useRef(0)

  const startAuto = () => {
    stopAuto()
    autoRef.current = window.setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000)
  }
  const stopAuto = () => {
    if (autoRef.current) {
      window.clearInterval(autoRef.current)
      autoRef.current = null
    }
  }

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0]
    touchStartX.current = t.clientX
    touchStartY.current = t.clientY
    touchDeltaX.current = 0
    stopAuto()
  }

  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return
    const t = e.touches[0]
    const dx = t.clientX - touchStartX.current
    const dy = t.clientY - (touchStartY.current ?? 0)
    touchDeltaX.current = dx
    // if horizontal swipe taking precedence, prevent vertical scroll interference
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
      e.preventDefault()
    }
  }

  const onTouchEnd = () => {
    const dx = touchDeltaX.current
    const threshold = 50
    if (Math.abs(dx) > threshold) {
      if (dx > 0) setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
      else setIndex((i) => (i + 1) % testimonials.length)
    }
    touchStartX.current = null
    touchStartY.current = null
    touchDeltaX.current = 0
    startAuto()
  }

  useEffect(() => {
    startAuto()
    return () => stopAuto()
  }, [])



  return (
    <section id="opiniones" className="bg-base-900 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">Opiniones</p>
          <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">Lo que dicen quienes trabajaron con nosotros</h2>
          <p className="mt-4 text-slate-300 max-w-2xl">Opiniones reales de clientes y colaboradores.</p>
        </div>

        <div
          ref={containerRef}
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
          onFocus={stopAuto}
          onBlur={startAuto}
          className="mt-8 relative rounded-2xl border border-white/8 bg-base-800/40 p-8 shadow-sm testimonial-carousel"
          role="region"
          aria-label="Opiniones de clientes"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="sr-only" aria-live="polite">{testimonials[index].quote}</div>
          </div>

          <div className="viewport overflow-hidden" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            <div className="track flex" style={{ transform: `translateX(-${index * 100}%)` }}>
              {testimonials.map((t, i) => (
                <article
                  key={i}
                  className={`slide flex-none w-full px-1`}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} de ${testimonials.length}`}
                  aria-hidden={i !== index}
                >
                  <div className="mb-3">
                <div className="stars-row flex items-center gap-2">
                  <div className="stars inline-flex items-center gap-1" role="img" aria-label={`${t.rating} de 5 estrellas`} title={`${t.rating} de 5`}>
                    {[0,1,2,3,4].map((n) => {
                      if (n < Math.floor(t.rating)) {
                        return (
                          <svg key={n} className="h-4 w-4 star-filled" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                            <path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.562L19.5 23 12 19.422 4.5 23l1.8-7.688L.6 9.75l7.732-1.732L12 .587z" fill="currentColor" />
                          </svg>
                        )
                      } else if (t.rating % 1 !== 0 && n === Math.floor(t.rating)) {
                        // half star
                        return (
                          <svg key={n} className="h-4 w-4 star-half" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                            <defs>
                              <linearGradient id={`half-star-${n}`}> <stop offset="50%" stopColor="#f59e0b"/> <stop offset="50%" stopColor="rgba(255,255,255,0.16)"/> </linearGradient>
                            </defs>
                            <path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.562L19.5 23 12 19.422 4.5 23l1.8-7.688L.6 9.75l7.732-1.732L12 .587z" fill={`url(#half-star-${n})`} />
                          </svg>
                        )
                      } else {
                        return (
                          <svg key={n} className="h-4 w-4 star-empty" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                            <path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.562L19.5 23 12 19.422 4.5 23l1.8-7.688L.6 9.75l7.732-1.732L12 .587z" fill="currentColor" />
                          </svg>
                        )
                      }
                    })}
                  </div>
                  <span className="text-sm text-slate-300">{t.rating.toFixed(1)}</span>
                </div>
                <blockquote className="text-lg leading-relaxed text-slate-100">“{t.quote}”</blockquote>
              </div>
              <footer className="mt-4 text-sm text-slate-300">— {t.name}, <span className="text-slate-400">{t.role}</span></footer>
                </article>
              ))}
            </div>
          </div>



          {/* Pagination dots */}
          <div className="mt-6 flex items-center justify-center gap-2 dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir a la opinión ${i + 1}`}
                aria-pressed={i === index}
                className={`h-2 w-8 rounded-full transition ${i === index ? 'bg-slate-100' : 'bg-slate-300/30 hover:bg-slate-300/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
