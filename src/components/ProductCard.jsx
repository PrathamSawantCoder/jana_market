import { Plus } from 'lucide-react'

function ProductCard({ product, onAddToCart }) {
  return (
    <article className="group fade-in overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-card transition duration-300 hover:-translate-y-2 hover:shadow-soft">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
          {product.badge}
        </span>
      </div>

      <div className="space-y-5 p-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-tight text-ink">{product.name}</h3>
          <p className="text-sm text-slate-500">Authentic flavors with a refined grocery experience.</p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <p className="text-2xl font-semibold tracking-tight text-brand-700">${product.price.toFixed(2)}</p>
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="inline-flex items-center gap-2 rounded-2xl bg-ink px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-600"
          >
            <Plus size={16} />
            Add to cart
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
