import { Quote, Star } from 'lucide-react'

function Testimonials({ testimonials }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="section-heading fade-in">
          <span className="eyebrow">Testimonials</span>
          <h2 className="title">Loved by families, home cooks, and food enthusiasts.</h2>
          <p className="muted">
            Clean, compact review cards reinforce trust while keeping the section airy and visually balanced.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="fade-in rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={16} fill="currentColor" />
                  ))}
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <Quote size={18} />
                </div>
              </div>

              <p className="mt-5 text-base leading-7 text-slate-600">“{testimonial.text}”</p>
              <p className="mt-6 text-sm font-semibold tracking-tight text-ink">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
