import { Menu, ShoppingCart, Store, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Shop', href: '#shop' },
  { label: 'Categories', href: '#categories' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Navbar({ cartCount }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="section-shell">
        <div className="flex h-24 items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3">            
              <img className="h-20 md:h-24" src="/jana_market_logo.png" alt="Logo" />                        
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition duration-300 hover:text-brand-700"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#cart"
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:text-brand-700 hover:shadow-soft"
            >
              <ShoppingCart size={20} />
              <span className="absolute -right-1.5 -top-1.5 flex h-6 min-w-6 items-center justify-center rounded-full bg-accent-500 px-1 text-xs font-semibold text-white">
                {cartCount}
              </span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition duration-300 hover:text-brand-700 lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="fade-in mb-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-soft lg:hidden">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition duration-300 hover:bg-brand-50 hover:text-brand-700"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cart"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-between rounded-2xl bg-ink px-4 py-3 text-sm font-semibold text-white"
              >
                Cart
                <span className="rounded-full bg-white/15 px-2 py-1 text-xs">{cartCount}</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
