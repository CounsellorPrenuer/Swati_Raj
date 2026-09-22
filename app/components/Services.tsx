'use client'

export default function Services({ services }: { services?: any[] }) {
  const defaultServices = [
    {
      icon: '🎯',
      title: 'Career Guidance',
      description: 'Personalized career counseling to help students and professionals discover their ideal career path'
    },
    {
      icon: '📖',
      title: 'Admission Guidance',
      description: 'Expert assistance in college selection, application strategy, and admission process'
    },
    {
      icon: '🧠',
      title: 'Curriculum Navigation',
      description: 'Guidance through Cambridge, IGCSE, and CBSE curricula with study strategies'
    },
    {
      icon: '💼',
      title: 'Personal Branding',
      description: 'Build your academic and professional profile to stand out to colleges and employers'
    },
    {
      icon: '🌐',
      title: 'International Opportunities',
      description: 'Guidance on studying abroad and international career pathways'
    },
    {
      icon: '👥',
      title: 'Parent Counseling',
      description: 'Support for parents to better understand and guide their children\'s academic journey'
    }
  ]

  const displayServices = services?.length
    ? services.map((service) => ({
        icon: service.icon || '⭐',
        title: service.title,
        description: service.description || '',
      }))
    : defaultServices

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Our Services</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive solutions for career clarity, academic excellence, and personal growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md card-hover">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
