import ProductCard from './ProductCard'

function FeaturedProducts({ products, onAddToCart }) {
  return (
    <section id="shop" className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="section-heading fade-in">
            <span className="eyebrow">Featured Products</span>
            <h2 className="title">Featured Asian Market Picks</h2>
            <p className="muted">
               Discover fresh produce, pantry staples, and authentic flavors—handpicked for your next meal.
            </p>
          </div>

          {/* <div className="fade-in rounded-[2rem] bg-brand-50 p-5 lg:max-w-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Editor&apos;s note</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Reusable product cards keep visual consistency across categories while maintaining responsive balance on every screen.
            </p>
          </div> */}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
