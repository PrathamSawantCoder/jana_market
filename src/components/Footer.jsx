import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'

function TikTokIcon(props) {
  return (
    <svg role="img" viewBox="-16 0 52 24 " xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}>
      <title>TikTok</title>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
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
                  <Icon size={18} />
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
