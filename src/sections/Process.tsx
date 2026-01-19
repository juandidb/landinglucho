const steps = [
  {
    title: 'Consulta y diagnostico',
    detail: 'Relevamiento de antecedentes, matricula, planos previos y objetivos del cliente.',
    timing: 'Día 0-2',
  },
  {
    title: 'Trabajo de campo',
    detail: 'Relevamiento con GNSS y estacion total, registro fotografico y control de puntos.',
    timing: 'Día 3-5',
  },
  {
    title: 'Procesamiento',
    detail: 'Ajustes, elaboracion de planos, informes comparativos y propuesta final.',
    timing: 'Día 6-9',
  },
  {
    title: 'Entrega y seguimiento',
    detail: 'Firma digital, presentación ante organismos y acompañamiento hasta la aprobación.',
    timing: 'Día 10+',
  },
]

const Process = () => (
  <section id="proceso" className="bg-base-900 py-20 text-slate-100 dark:bg-base-900 bg-base-100 text-base-900">
    <div className="mx-auto max-w-6xl px-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-500 text-base-900">Proceso</p>
          <h2 className="mt-4 font-display text-3xl text-white dark:text-white text-base-900 md:text-4xl">
            Metodologia clara, tiempos definidos y trazabilidad de datos
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300 dark:text-slate-300 text-base-900">
            El flujo de trabajo esta pensado para que el cliente conozca de antemano cada hito, la
            documentacion necesaria y los plazos estimados. Todas las etapas se registran y comparten en formato
            digital.
          </p>
        </div>
        <a
          href="#contacto"
          className="text-sm font-semibold text-white transition hover:text-slate-200"
        >
          Solicitar agenda
        </a>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="relative rounded-3xl border border-white/10 bg-base-800/50 dark:bg-base-800/50 bg-base-200 p-6 transition hover:border-white/30 reveal"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium uppercase tracking-wide text-slate-400 dark:text-slate-400 text-base-900">
                    Paso {index + 1}
                  </span>
                  <p className="rounded-full border border-white/20 px-3 py-1 text-xs text-slate-300 dark:text-slate-300 text-base-900">{step.timing}</p>
                </div>
                <div className="h-12 w-12 rounded-2xl border border-white/10 bg-base-900/70 dark:bg-base-900/70 bg-base-200 text-center text-lg font-semibold text-white dark:text-white text-base-900">
                  {index + 1}
                </div>
              </div>
              <h3 className="mt-4 font-display text-2xl text-white dark:text-white text-base-900">{step.title}</h3>
              <p className="mt-3 text-slate-300 dark:text-slate-300 text-base-900">{step.detail}</p>
            </article>
          ))}
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-base-800/40 dark:bg-base-800/40 bg-base-200 reveal">
          <img
            src={import.meta.env.BASE_URL + 'assets/process-campo.jpg'}
            alt="Equipo de topografia instalando tripode en obra"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base-900/85 to-transparent dark:from-base-900/85 from-base-200 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70 dark:text-white/70 text-base-900/70">Registro en campo</p>
            <p className="mt-2 text-lg font-display text-white dark:text-white text-base-900">Planos y mediciones sincronizados con el avance de obra.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Process
