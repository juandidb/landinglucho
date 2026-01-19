const pillars = [
  {
    title: 'Precision comprobable',
    detail: 'Instrumental calibrado y trazabilidad completa de datos GNSS y estaciones totales.',
  },
  {
    title: 'Normativa y documentacion',
    detail: 'Interpretacion actualizada de reglamentaciones municipales, provinciales y de ARBA.',
  },
]

const About = () => (
  <section id="sobre" className="bg-base-900 py-20 dark:bg-base-900 bg-base-100">
    <div className="mx-auto max-w-6xl px-6 text-slate-100 dark:text-slate-100 text-base-900">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-500 text-base-900">Acerca de nosotros</p>
          <h2 className="mt-4 font-display text-2xl text-white dark:text-white text-base-900 md:text-4xl">
            Estudio de agrimensura con más de 5 años de experiencia en proyectos residenciales, comerciales y mixtos.
          </h2>

          <p className="mt-6 text-slate-300 dark:text-slate-300 text-base-900">
            Contamos con un equipo técnico que trabaja coordinadamente con estudios de arquitectura, desarrolladoras y
            asesoría legal especializada. Planificamos cada proyecto con cronogramas realistas y entregables verificables
            para minimizar riesgos y optimizar tiempos.
          </p>

          <p className="mt-4 text-slate-300 dark:text-slate-300 text-base-900">
            Nuestro enfoque combina asesoramiento estratégico, relevamientos de alta precisión y gestión documental
            para acompañar trámites hasta su aprobación definitiva ante organismos competentes.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#contacto" className="cta-secondary w-full sm:w-auto text-center">Conocer más</a>
            <a href="#contacto" className="cta-primary w-full sm:w-auto text-center">Solicitar propuesta</a>
          </div>

          <div className="mt-8 about-stats rounded-2xl border border-white/6 bg-base-800/55 p-4">
            <div className="stat reveal">
              <p className="stat-value">+50</p>
              <p className="stat-label">Proyectos completados</p>
            </div>
            <div className="stat reveal">
              <p className="stat-value">+60k</p>
              <p className="stat-label">m2 relevados</p>
            </div>
            <div className="stat reveal">
              <p className="stat-value">15</p>
              <p className="stat-label">Cobertura regional</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-base-800/40 dark:bg-base-800/40 bg-base-200">
            <img
              src={import.meta.env.BASE_URL + 'assets/about-equipo.jpg'}
              alt="Equipo del estudio realizando relevamientos en campo"
              className="about-image h-44 sm:h-64 w-full object-cover reveal"
              loading="lazy"
            />
            <p className="border-t border-white/5 px-5 py-4 text-sm text-slate-200 dark:text-slate-200 text-base-900">
              Relevamientos en campo coordinados con arquitectos y desarrolladores.
            </p>
          </div>
          <div className="grid gap-4">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="about-card rounded-2xl border border-white/6 bg-base-900/40 p-4 transition hover:shadow-lg reveal"
              >
                <h3 className="font-display text-xl text-white mb-1">{pillar.title}</h3>
                <p className="text-sm text-slate-300">{pillar.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About
