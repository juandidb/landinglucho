import type { FormEvent } from 'react'

const whatsappNumber = '5492317409836'
const directPhoneDisplay = '+54 9 2317 409836'

const Contact = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const getValue = (key: string) => {
      const value = formData.get(key)
      return typeof value === 'string' ? value.trim() : ''
    }

    const name = getValue('name') || 'un posible cliente'
    const email = getValue('email')
    const phone = getValue('phone')
    const location = getValue('location')
    const detail = getValue('message')

    const composedMessage = [
      `Hola, soy ${name} y me gustaría coordinar una consulta técnica.`,
      location && `Partido / Localidad: ${location}.`,
      phone && `Telefono: ${phone}.`,
      email && `Email: ${email}.`,
      detail && `Detalle del servicio: ${detail}.`,
    ]
      .filter(Boolean)
      .join(' ')

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(composedMessage)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    event.currentTarget.reset()
  }

  return (
    <section id="contacto" className="bg-base-800/70 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">Contacto</p>
            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">Agenda una consulta técnica</h2>
            <p className="mt-4 text-slate-300">
              Al completar este formulario recibirá una respuesta documentada dentro de las próximas 24 horas hábiles. Se
              comparte disponibilidad, estimación de honorarios y documentación requerida para iniciar.
            </p>
            <div className="mt-8 rounded-3xl border border-white/10 bg-base-900/60 p-6">
              <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Modalidad</p>
              <p className="mt-3 text-lg text-white">
                Visitas a domicilio en AMBA y reuniones virtuales para el interior del país.
              </p>
              <p className="mt-3 text-sm text-slate-300">
                También disponible coordinación con escribanos, arquitectos y desarrolladores del cliente.
              </p>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-base-900/50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">Telefono directo</p>
              <a
                href={`tel:+${whatsappNumber}`}
                className="mt-3 inline-flex items-center gap-2 text-xl font-semibold text-white dark:text-white text-base-900 transition hover:text-slate-200 dark:hover:text-white hover:text-base-900"
              >
                {directPhoneDisplay}
                <span aria-hidden className="text-base text-slate-400 dark:text-slate-400 text-base-900">↗</span>
              </a>
              <p className="mt-2 text-sm text-slate-400 dark:text-slate-400 text-base-900">
                Llamadas, mensajes SMS, o WhatsApp.
              </p>
            </div>
          </div>

          <form className="rounded-3xl border border-white/10 bg-base-900/70 p-8 shadow-soft reveal" onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <label className="flex flex-col gap-2 text-sm text-slate-300">
                Nombre y apellido
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Ej. Laura Fernandez"
                  className="rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-white/40 focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-300">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="correo@dominio.com"
                  className="rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-white/40 focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-300">
                Telefono
                <input
                  type="tel"
                  name="phone"
                  placeholder="011 1234 5678"
                  className="rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-white/40 focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-300">
                Partido / Localidad
                <input
                  type="text"
                  name="location"
                  placeholder="Ej. San Isidro, Pilar"
                  className="rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-white/40 focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-300">
                Descripcion del servicio
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Detalla el objetivo del trabajo y plazos estimados"
                  className="rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-white/40 focus:outline-none"
                />
              </label>
              <button
                type="submit"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-base-900 transition hover:bg-slate-100"
              >
                Enviar solicitud
              </button>
              <p className="text-xs text-slate-400">
                Al enviar aceptas redirigirte a WhatsApp y coordinar una breve llamada de validación.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
