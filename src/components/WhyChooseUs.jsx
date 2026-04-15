function WhyChooseUs({ features }) {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="rounded-[2rem] bg-white p-6 shadow-soft sm:p-8 lg:p-10">
          <div className="section-heading fade-in">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="title">We offer a wide range of fresh produce, pantry staples, and authentic flavors.</h2>
            <p className="muted">
              From fast delivery to a curated selection of trusted brands, we make it easy to bring the best of Asian groceries to your kitchen.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon

              return (
                <article
                  key={feature.title}
                  className="fade-in rounded-[2rem] border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-100 hover:bg-white hover:shadow-card"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-soft">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{feature.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
