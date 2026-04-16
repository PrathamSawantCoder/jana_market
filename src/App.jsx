import { useMemo, useState } from 'react'
import { Leaf, Package2, Truck, Wallet } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import MapSection from './components/MapSection'
import Footer from './components/Footer'


const categories = [
  {
    name: 'Fresh Produce',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Sauces',
    image:
      'https://images.unsplash.com/photo-1757800501694-9397326e083e?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'All types of Sweets & Snacks',
    image:
      'https://images.unsplash.com/photo-1519939087918-70f89cef0383?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Meat & Seafood',
    image:
      'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=900&q=80',
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
    name: 'M S A',
    text: 'Best and only grocery store for Halal meats and food in Joensuu. I always buy chicken and beef from them.',
  },
  {
    name: 'Mathew Sloan',
    text: 'Nice place full of good international ingredients. Was very pleased to find some of my favorite spices. Accounting for the shipping, sourcing and attribution of these items I would say the prices are fair for the most part.',
  },
  {
    name: 'KH IBRAHIM MAHBUB',
    text: 'Best Halal/Asian/African/Arabian shop in Joensuu, but the fresh meat price is very high compared to other cities in Finland, and no fresh chickens are available.',
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
    name: 'Vegetables Bundle',
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
        <WhyChooseUs features={features} />
        <Testimonials testimonials={testimonials} />
        <MapSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
