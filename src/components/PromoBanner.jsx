function PromoBanner() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="fade-in overflow-hidden rounded-[2rem] bg-promo-glow p-8 text-white shadow-soft sm:p-10 lg:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md">
                Seasonal Promotion
              </span>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Save 20% on pantry favorites this week.
              </h2>
              <p className="text-base leading-7 text-white/85 sm:text-lg">
                Stock up on noodles, sauces, spice pastes, and rice with a limited-time offer designed to bring bold flavor to every meal.
              </p>
            </div>

            <a
              href="#shop"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-accent-600 transition duration-300 hover:-translate-y-0.5 hover:bg-cream"
            >
              Claim Offer
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromoBanner
