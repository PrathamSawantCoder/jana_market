const QuickCartSummary = ({ cartItems, cartCount, cartTotal }) => {
  return (
    <section id="cart" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-soft sm:p-8 lg:p-10">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl space-y-3">
                  <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">
                    Quick Cart Summary
                  </span>
                  <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                    See your cart fill up here.
                  </h2>
                  {/* <p className="text-base leading-7 text-slate-600 sm:text-lg">
                    No backend needed — just an elegant front-end cart summary that updates as customers add products.
                  </p> */}
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[300px]">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Items in cart</p>
                    <p className="mt-2 text-3xl font-semibold text-ink">{cartCount}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Estimated total</p>
                    <p className="mt-2 text-3xl font-semibold text-ink">${cartTotal.toFixed(2)}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {cartItems.length > 0 ? (
                  cartItems.map((item, index) => (
                    <div
                      key={`${item.id}-${index}`}
                      className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-card"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-20 w-20 rounded-2xl object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <h3 className="truncate text-base font-semibold text-ink">{item.name}</h3>
                        <p className="mt-1 text-sm text-slate-500">Added to cart</p>
                      </div>
                      <p className="text-base font-semibold text-brand-700">${item.price.toFixed(2)}</p>
                    </div>
                  ))
                ) : (
                  <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 p-6 text-slate-500 md:col-span-2 xl:col-span-3">
                    Your cart is ready. Add any featured product to see this preview update instantly.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
  )
}

export default QuickCartSummary
