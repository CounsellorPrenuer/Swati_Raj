'use client'

export default function Contact({ siteSettings }: { siteSettings?: any }) {
  const email = siteSettings?.email || 'swatiswain@yahoo.com'
  const phone = siteSettings?.phone || '+65 8367 2097'

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white text-center">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Not sure where to start?</h2>
        <p className="text-xl text-gray-300 mb-8 italic">A single conversation can bring clarity.</p>
        
        <div className="mb-12">
          <a href={`mailto:${email}`} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full transition-all inline-block">
            Book a Free Discovery Call →
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg text-gray-300">
          <div className="flex items-center gap-2">
            <span>📧</span>
            <a href={`mailto:${email}`} className="hover:text-white transition-colors">{email}</a>
          </div>
          <div className="flex items-center gap-2">
            <span>📞</span>
            <a href={`tel:${phone}`} className="hover:text-white transition-colors">{phone}</a>
          </div>
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>Singapore | Virtual sessions available</span>
          </div>
        </div>
      </div>
    </section>
  )
}
