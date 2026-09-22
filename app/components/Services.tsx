'use client'

export default function Services({ services }: { services?: any[] }) {
  const displayServices = services?.length
    ? services.sort((a, b) => (a.order || 0) - (b.order || 0))
    : []

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Why Swapath</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {displayServices.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md card-hover flex gap-6 items-start">
              <div className="text-5xl shrink-0">{service.icon || '✨'}</div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
