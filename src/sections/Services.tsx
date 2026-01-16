const services = [
  {
    title: 'Mensuras y Georreferenciación Corporativa',
    description:
      'Mensuras urbanas y rurales con entrega de planos georreferenciados, informes ejecutivos y asesoramiento para cumplimiento regulatorio. Entregables listos para procesos de inversión y aprobación institucional.',
  },
  {
    title: 'Gestión de Subdivisiones y Desarrollo',
    description:
      'Planificación y gestión integral de subdivisiones y unificaciones parcelarias, coordina-miento con autoridades locales, cronogramas de obra y control presupuestario para desarrollos a escala.',
  },
  {
    title: 'Relevamientos Topográficos de Precisión',
    description:
      'Relevamientos con tecnología LIDAR y estaciones totales, mallas de puntos y modelos digitales de terreno para proyectos de infraestructura, obra pública y privados con control de calidad certificado.',
  },
  {
    title: 'Saneamiento Catastral y Cumplimiento',
    description:
      'Actualización y saneamiento registral, gestión documental y seguimiento hasta la aprobación final ante organismos competentes. Mitigamos riesgos legales y agilizamos trámites.',
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
            Ofrecemos soluciones técnicas integrales para desarrollos inmobiliarios y proyectos corporativos, respaldadas
            por gestión de proyecto dedicada, control de calidad y entregables preparados para inversores y organismos.
          </p>
        </div>
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700"
        >
          Solicitar propuesta
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
