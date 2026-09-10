import { useState } from 'react'
import { services, whatsappLink } from '../data/salonData'

const inputClasses =
  'w-full bg-white/80 border border-dark/15 focus:border-gold focus:ring-1 focus:ring-gold outline-none px-4 py-3.5 rounded-xl text-text-dark placeholder:text-text-muted/60 transition-all duration-300 shadow-sm'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Hi Glow Beauty Studio, I'd like to book an appointment.
Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service || 'Not specified'}
Preferred Date: ${form.date || 'Not specified'}
Message: ${form.message || '-'}`

    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-text-dark/70 mb-2">
            Your Full Name *
          </label>
          <input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Priya Sharma"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-text-dark/70 mb-2">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-text-dark/70 mb-2">
            Select Treatment
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={`${inputClasses} appearance-none bg-no-repeat bg-right pr-8`}
          >
            <option value="">Select a service...</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name} ({s.price})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="date" className="block text-xs font-semibold uppercase tracking-wider text-text-dark/70 mb-2">
            Preferred Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-text-dark/70 mb-2">
          Additional Notes
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          placeholder="Bridal enquiry, hair length, specific timing preferences..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide bg-gold text-dark hover:bg-gold-light transition-all duration-300 rounded-full w-full sm:w-fit shadow-md hover:shadow-lg cursor-pointer"
      >
        Book on WhatsApp &rarr;
      </button>

      {submitted && (
        <p className="text-sm font-medium text-gold bg-dark/90 p-4 rounded-xl border border-gold/30">
          &check; Thank you! WhatsApp has opened with your details filled in. If
          it didn't pop up, you can message us directly anytime.
        </p>
      )}
    </form>
  )
}

