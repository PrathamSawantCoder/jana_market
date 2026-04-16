import { MapPin } from 'lucide-react'

const storeAddress = 'Torikatu 17, 80100 Joensuu, Finland'
const mapEmbedUrl =
  'https://www.google.com/maps?q=Torikatu+17,+80100+Joensuu,+Finland&z=15&output=embed'
const directionsUrl =
  'https://www.google.com/maps/search/?api=1&query=Torikatu+17,+80100+Joensuu,+Finland'

function MapSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-8 overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 shadow-sm lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">Visit us</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Find Jana Market in Joensuu
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Stop by the store for fresh halal meats, pantry staples, snacks, and authentic Asian groceries.
            </p>

            <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Store address</p>
                  <p className="mt-2 text-base font-medium leading-7 text-slate-700">{storeAddress}</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-brand-700"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          <div className="min-h-[320px] lg:min-h-full">
            <iframe
              title="Jana Market location map"
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[320px] w-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapSection
