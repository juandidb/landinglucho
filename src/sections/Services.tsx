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
        <div className="reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">Servicios</p>
          <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
            Especialidades enfocadas en propietarios y desarrollos
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Desarrollamos soluciones técnicas integrales para proyectos inmobiliarios y corporativos, combinando gestión especializada, control de calidad y documentación lista para entregar ante organismos públicos y privados.
          </p>
        </div>
        <a
          href="#contacto"
          className="cta-primary group"
        >
          Solicitar propuesta
          <span className="ml-3 inline-block transform transition-transform group-hover:translate-x-1">➜</span>
        </a>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 reveal-group">
        {services.map((service) => (
          <article
            key={service.title}
            className="service-card reveal group"
          >
            <div className="flex items-start gap-4">
              <div className="service-icon flex-shrink-0">
                <img
                  src={import.meta.env.BASE_URL + (service.title === 'Mensuras y Georreferenciación Corporativa' ? 'assets/map+pin.svg' : service.title === 'Gestión de Subdivisiones y Desarrollo' ? 'assets/layers.svg' : service.title === 'Relevamientos Topográficos de Precisión' ? 'assets/ruler.svg' : service.title === 'Saneamiento Catastral y Cumplimiento' ? 'assets/filecheck.svg' : 'assets/logo-navbar.svg')}
                  alt=""
                  className="h-6 w-6 opacity-80 transition-transform transition-opacity duration-300 group-hover:opacity-100 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="min-w-0">
                <h3 className="service-title font-display text-xl md:text-2xl text-white">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{service.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Services
