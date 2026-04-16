import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'

function TikTokIcon(props) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <title>TikTok</title>
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.223V2.4h-3.12v14.49a2.65 2.65 0 0 1-2.649 2.648 2.65 2.65 0 0 1-2.648-2.648 2.65 2.65 0 0 1 2.648-2.649c.422 0 .83.101 1.198.287l.003-3.179a5.777 5.777 0 0 0-1.201-.127A5.84 5.84 0 0 0 4.214 17.06 5.84 5.84 0 0 0 10.05 22.9a5.84 5.84 0 0 0 5.84-5.84V9.717a7.9 7.9 0 0 0 4.6 1.471V8.067a4.76 4.76 0 0 1-.9-.381Z" />
    </svg>
  )
}

const footerLinks = {
  // Shop: ['Fresh Produce', 'Pantry Staples', 'Frozen Foods', 'Seafood'],
  // Company: ['About Us', 'Delivery Areas', 'Weekly Offers', 'Careers'],
  // Support: ['Contact', 'FAQs', 'Shipping', 'Returns'],
  Menu: ['Home', 'Categories', 'About', 'Contact'],
}

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/jana_market_2020/',
    icon: Instagram,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/p/JANA-market-100057474137206/',
    icon: Facebook,
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@janamarket_kz',
    icon: TikTokIcon,
  },
]

function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="section-shell py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-start">
          <div className="space-y-5 lg:justify-self-start">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-ink">Jana Market</h3>
              <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">
                A premium Asian grocery destination with a wide range of fresh produce, pantry staples, and authentic flavors.
              </p>
            </div>

            <div className="space-y-3 text-sm text-slate-600">
              <p className="flex items-center gap-3">
                <MapPin size={16} className="text-brand-600" />
                Torikatu 17, Joensuu
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
            <div key={title} className="space-y-4 ">
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

          <div className="space-y-4 lg:justify-self-end lg:text-center">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Follow</h4>
            <p className="text-sm leading-7 text-slate-600">
              Fresh drops, weekly offers, and seasonal inspiration from the modern Asian kitchen.
            </p>
            <div className="flex gap-3 lg:justify-center">
              {socialLinks.map((socialLink) => {
                const Icon = socialLink.icon

                return (
                <a
                  key={socialLink.name}
                  href={socialLink.href}
                  target="_blank" aria-label={socialLink.name} rel="noopener noreferrer" 
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-600 transition duration-300 hover:-translate-y-0.5 hover:border-brand-100 hover:bg-brand-50 hover:text-brand-700"
                >
                  <Icon className="h-[18px] w-[18px] shrink-0" />
                </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Jana Market. Copyright and all rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
