import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'

const footerLinks = {
  Shop: ['Fresh Produce', 'Pantry Staples', 'Frozen Foods', 'Seafood'],
  Company: ['About Us', 'Delivery Areas', 'Weekly Offers', 'Careers'],
  Support: ['Contact', 'FAQs', 'Shipping', 'Returns'],
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="section-shell py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_repeat(3,0.8fr)_1fr]">
          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-ink">Jana Market</h3>
              <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">
                A premium Asian grocery destination with modern presentation, authentic ingredients, and smooth mobile-first browsing.
              </p>
            </div>

            <div className="space-y-3 text-sm text-slate-600">
              <p className="flex items-center gap-3">
                <MapPin size={16} className="text-brand-600" />
                128 Market Street, Helsinki
              </p>
              <p className="flex items-center gap-3">
                <Phone size={16} className="text-brand-600" />
                +358 40 123 4567
              </p>
              <p className="flex items-center gap-3">
                <Mail size={16} className="text-brand-600" />
                hello@janamarket.com
              </p>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-600 transition duration-300 hover:text-brand-700">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Follow</h4>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-600 transition duration-300 hover:-translate-y-0.5 hover:border-brand-100 hover:bg-brand-50 hover:text-brand-700"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-sm leading-7 text-slate-600">
              Fresh drops, weekly offers, and seasonal inspiration from the modern Asian kitchen.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Jana Market. Crafted for a clean and premium grocery experience.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
