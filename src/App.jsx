import { useMemo, useState } from 'react'
import { Fish, Leaf, Package2, Soup, Star, Truck, Wallet } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import FeaturedProducts from './components/FeaturedProducts'
import WhyChooseUs from './components/WhyChooseUs'
import PromoBanner from './components/PromoBanner'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const categories = [
  {
    name: 'Packaged Food',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Sauces',
    image:
      'https://images.unsplash.com/photo-1607305387299-a3d9611cd469?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Fresh Produce',
    image:
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Meat & Seafood',
    image:
      'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=900&q=80',
  },
]

const products = [
  {
    id: 1,
    name: 'Premium Ramen Bundle',
    price: 14.9,
    image:
      'https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=900&q=80',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Sauces Set',
    price: 11.5,
    image:
      'https://images.unsplash.com/photo-1563599175592-c58dc214deff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'Kitchen Essential',
  },
  {
    id: 3,
    name: 'Garden Bok Choy',
    price: 5.75,
    image:
      'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80',
    badge: 'Fresh Today',
  },
  {
    id: 4,
    name: 'Ocean Seafood Mix',
    price: 19.9,
    image:
      'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=900&q=80',
    badge: 'Chef Pick',
  },
  {
    id: 5,
    name: 'Korean Chili Paste',
    price: 8.25,
    image:
      'https://plus.unsplash.com/premium_photo-1679816588271-2d872175c6e5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: 'Spicy Favorite',
  },
  {
    id: 6,
    name: 'Jasmine Rice 5kg',
    price: 17.4,
    image:
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=80',
    badge: 'Family Size',
  },
]

const features = [
  {
    title: 'Fresh Quality',
    text: 'Hand-selected produce, seafood, and pantry staples packed with care every day.',
    icon: Leaf,
  },
  {
    title: 'Fast Delivery',
    text: 'Convenient same-day delivery windows to keep your kitchen stocked on time.',
    icon: Truck,
  },
  {
    title: 'Authentic Selection',
    text: 'A thoughtfully curated assortment of trusted Asian brands and local favorites.',
    icon: Package2,
  },
  {
    title: 'Affordable Prices',
    text: 'Premium ingredients and weekly specials that make everyday cooking easier.',
    icon: Wallet,
  },
]

const testimonials = [
  {
    name: 'Mina L.',
    text: 'The produce is incredibly fresh and the pantry selection feels curated like a premium market.',
  },
  {
    name: 'Daniel T.',
    text: 'Fast delivery, beautiful packaging, and all the sauces I need for weeknight dinners.',
  },
  {
    name: 'Aisha R.',
    text: 'Clean design, smooth shopping flow, and excellent variety of authentic Asian groceries.',
  },
]

function App() {
  const [cartItems, setCartItems] = useState([])

  const cartCount = cartItems.length

  const cartTotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price, 0),
    [cartItems],
  )

  const handleAddToCart = (product) => {
    setCartItems((current) => [...current, product])
  }

  return (
    <div className="bg-cream text-slate-900 antialiased">
      <Navbar cartCount={cartCount} />
      <main>
        <Hero />
        <Categories categories={categories} />
        <FeaturedProducts products={products} onAddToCart={handleAddToCart} />
        <WhyChooseUs features={features} />
        {/* <PromoBanner /> */}
        <Testimonials testimonials={testimonials} />

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
      </main>
      <Footer />
    </div>
  )
}

export default App
