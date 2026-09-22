'use client'

export default function Packages({ packages }: { packages?: any[] }) {
  const whoIHelp = packages?.filter(p => p.category === 'who-i-help')?.sort((a, b) => a.order - b.order) || []
  const howItWorks = packages?.filter(p => p.category === 'how-it-works')?.sort((a, b) => a.order - b.order) || []

  return (
    <section id="packages" className="section-padding bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container">
        
        {/* Who I Help */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-purple-600 font-semibold text-sm uppercase">Target Audience</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-purple-900">Who I Help</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Empowering students and parents with clarity at crucial academic junctures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whoIHelp.map((pkg, index) => (
              <div key={pkg._id || index} className="bg-white rounded-2xl overflow-hidden shadow-lg p-8 card-hover">
                <h3 className="text-2xl font-bold text-purple-900 mb-3">{pkg.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pkg.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div>
          <div className="text-center mb-12">
            <span className="text-purple-600 font-semibold text-sm uppercase">Process</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-purple-900">How It Works</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A brief preview of the structured process to help you find your way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, index) => (
              <div key={step._id || index} className="bg-white p-6 rounded-xl border-t-4 border-purple-500 shadow-md">
                <h4 className="text-lg font-bold text-purple-900 mb-2">{step.title}</h4>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
            <p className="text-gray-700 italic text-sm mb-6">(See "About" page for more on my background and approach.)</p>
        </div>

      </div>
    </section>
  )
}
