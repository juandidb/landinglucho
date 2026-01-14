const services = [
  {
    title: 'Mensuras',
    description:
      'Mensuras urbanas y rurales con entrega de planos georreferenciados y asesoramiento completo ante organismos provinciales.',
  },
  {
    title: 'Subdivisiones',
    description:
      'Desarrollo de proyectos de subdivision y unificacion parcelaria, respetando indicadores locales y cronogramas civiles.',
  },
  {
    title: 'Relevamientos topograficos',
    description:
      'Modelos digitales y mallas de puntos para obra nueva, reformas y regularizaciones de construcciones existentes.',
  },
  {
    title: 'Catastro',
    description:
      'Actualizacion y saneamiento de estados parcelarios, con seguimiento documental hasta su aprobacion final.',
  },
]

const Services = () => (
  <section id="servicios" className="bg-base-800/60 py-20 text-slate-100 dark:bg-base-800/60 dark:text-slate-100 bg-base-100 text-base-900">
    <div className="mx-auto max-w-6xl px-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">Servicios</p>
          <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
            Especialidades enfocadas en propietarios y desarrollos
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Cada servicio se ejecuta con equipos propios, reportes en tiempo real y documentacion lista para
            presentar ante municipios, registros y entidades crediticias.
          </p>
        </div>
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-slate-200"
        >
          Ver agenda disponible
          <span aria-hidden className="text-lg">→</span>
        </a>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="group rounded-3xl border border-white/5 bg-base-900/40 p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-base-900/70"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl text-white">{service.title}</h3>
              <span className="text-sm font-medium text-white/50 transition group-hover:text-white">{'</>'}</span>
            </div>
            <p className="mt-4 text-base text-slate-300">{service.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Services
