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
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-500 text-base-900">Acerca del estudio</p>
          <h2 className="mt-4 font-display text-3xl text-white dark:text-white text-base-900 md:text-4xl">
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
          <div className="mt-8 rounded-3xl border border-white/10 bg-base-800/60 dark:bg-base-800/60 bg-base-200 p-6">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400 dark:text-slate-400 text-base-900">Experiencia</p>
            <div className="mt-4 flex flex-wrap gap-8 text-white dark:text-white text-base-900">
              <div>
                <p className="text-4xl font-semibold">+50</p>
                <p className="text-xs uppercase tracking-wide text-slate-400 dark:text-slate-400 text-base-900">Proyectos completados</p>
              </div>
              <div>
                <p className="text-4xl font-semibold">+60k</p>
                <p className="text-xs uppercase tracking-wide text-slate-400 dark:text-slate-400 text-base-900">m2 relevados</p>
              </div>
              <div>
                <p className="text-4xl font-semibold">15</p>
                <p className="text-xs uppercase tracking-wide text-slate-400 dark:text-slate-400 text-base-900">Cobertura regional</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-base-800/40 dark:bg-base-800/40 bg-base-200">
            <img
              src="/assets/about-equipo.jpg"
              alt="Equipo del estudio realizando relevamientos en campo"
              className="h-64 w-full object-cover"
              loading="lazy"
            />
            <p className="border-t border-white/5 px-5 py-4 text-sm text-slate-200 dark:text-slate-200 text-base-900">
              Relevamientos en campo coordinados con arquitectos y desarrolladores.
            </p>
          </div>
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-3xl border border-white/10 bg-base-800/50 dark:bg-base-800/50 bg-base-200 p-6 transition hover:border-white/30"
            >
              <h3 className="font-display text-2xl text-white dark:text-white text-base-900">{pillar.title}</h3>
              <p className="mt-3 text-slate-300 dark:text-slate-300 text-base-900">{pillar.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default About
