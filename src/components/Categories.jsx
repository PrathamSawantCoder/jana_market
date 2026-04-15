function Categories({ categories }) {
  return (
    <section id="categories" className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="section-heading fade-in">
          <span className="eyebrow">Shop by Category</span>
          <h2 className="title">Curated essentials for the modern Asian kitchen.</h2>
          <p className="muted">
            Explore premium packaged foods, handcrafted sauces, fresh produce, and quality proteins — each chosen for freshness and flavor.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.name}
              className="group fade-in overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-card transition duration-300 hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-tight text-ink">{category.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Premium picks with carefully selected ingredients and beautiful freshness.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
