function Hero() {
  return (
    <section id="home" className="px-4 pb-12 pt-4 sm:px-6 lg:px-8 lg:pb-20">
      <div className="mx-auto max-w-8xl overflow-hidden rounded-[2rem] shadow-soft">
        <div
          className="relative min-h-[78svh] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=1600&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-hero-overlay" />

          <div className="relative flex min-h-[87svh] items-end px-6 py-10 sm:px-10 lg:px-16 lg:py-16">
            <div className="fade-in max-w-3xl space-y-6 text-white">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md">
                High Quality Asian ingredients, delivered fresh
              </span>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
                Fresh Asian Groceries In Your Neighborhood
              </h1>
              <p className="max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                Discover thoughtfully sourced produce, authentic sauces, and pantry staples for everyday meals and special occasions.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                {/* <a
                  href="#shop"
                  className="inline-flex items-center justify-center rounded-2xl bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-600"
                >
                  Shop Now
                </a> */}
                <a
                  href="#categories"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/15"
                >
                  Explore Categories
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
