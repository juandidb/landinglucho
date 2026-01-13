const credentials = [
  {
    label: 'Años de trayectoria',
    value: '+5',
    detail: 'Actuación continua en proyectos residenciales, rurales y mixtos.',
  },
  {
    label: 'Trabajos documentados',
    value: '30+',
    detail: 'Mensuras, subdivisiones y regularizaciones dominiales aprobadas.',
  },
  {
    label: 'Red profesional',
    value: 'Estudios aliados',
    detail: 'Arquitectura, legal y desarrollo que facilitan decisiones integrales.',
  },
]

const Confidence = () => (
  <section className="bg-base-800/50 py-20 text-slate-100 dark:bg-base-800/50 dark:text-slate-100 bg-base-100 text-base-900">
    <div className="mx-auto max-w-6xl px-6">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-500 text-base-900">Solidez y confianza</p>
          <h2 className="mt-4 font-display text-3xl text-white dark:text-white text-base-900 md:text-4xl">Respaldo profesional para decisiones con impacto patrimonial</h2>
          <p className="mt-4 text-slate-300 dark:text-slate-300 text-base-900">
            Los informes y planos se entregan con firmas digitales y trazabilidad de datos crudos, listos para
            presentar ante bancos, escribanos y organismos provinciales. La transparencia en costos y etapas
            permite anticipar riesgos antes de iniciar obra o compra de suelo.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3 reveal-group">
            {credentials.map((item) => (
              <article key={item.label} className="reveal rounded-3xl border border-white/10 bg-base-900/60 dark:bg-base-900/60 bg-base-200 p-6">
                <p className="text-4xl font-semibold text-white dark:text-white text-base-900">{item.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-400 dark:text-slate-400 text-base-900">{item.label}</p>
                <p className="mt-3 text-sm text-slate-400 dark:text-slate-400 text-base-900">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="reveal rounded-3xl border border-white/10 bg-gradient-to-br from-base-900/80 to-base-800/40 dark:from-base-900/80 dark:to-base-800/40 from-base-200 to-base-100 p-8 shadow-soft overflow-hidden">
          <div className="relative mb-8 overflow-hidden rounded-2xl border border-white/10">
            <img
              src="/assets/confidence-instrumento.jpg"
              alt="Instrumental topografico durante medicion en ruta"
              className="h-56 w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base-900/80 to-transparent" />
            <p className="absolute bottom-3 left-4 text-xs uppercase tracking-[0.4em] text-white/80">
              Control en sitio
            </p>
          </div>
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400 dark:text-slate-400 text-base-900">Mensaje al cliente</p>
          <p className="mt-4 text-2xl font-display text-white dark:text-white text-base-900">
            Cada consulta recibe una respuesta argumentada y respaldada en normativa vigente. La prioridad es
            brindar certeza documental antes de cualquier inversion.
          </p>
          <div className="mt-6 space-y-4 text-sm text-slate-300 dark:text-slate-300 text-base-900">
            <p>- Informes personalizados en menos de 48 h.</p>
            <p>- Seguimiento semanal con acceso directo al profesional.</p>
            <p>- Entrega final con checklist de verificacion y copia digital segura.</p>
          </div>
          <div className="mt-8 rounded-2xl border border-white/10 bg-base-900/70 dark:bg-base-900/70 bg-base-200 p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400 dark:text-slate-400 text-base-900">Compromiso</p>
            <p className="mt-2 text-lg text-white dark:text-white text-base-900">Seriedad documental, lenguaje claro y foco en resultados medibles.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Confidence
