'use client'

export default function Testimonials({ testimonials }: { testimonials?: any[] }) {
  const defaultTestimonials = [
    {
      quote: "Swati's guidance completely transformed my understanding of career options. She helped me explore paths beyond what everyone told me was the 'only option'. I'm now pursuing something I'm truly passionate about.",
      author: "Arjun Patel",
      role: "Student, Commerce Stream",
      rating: 5
    },
    {
      quote: "As a parent, I was confused about how to support my daughter's academic journey. Swati's sessions gave me clarity on how to guide her without pressuring her. Her dual perspective as both educator and parent is invaluable.",
      author: "Priya Sharma",
      role: "Parent",
      rating: 5
    },
    {
      quote: "The admission guidance I received was exceptional. Swati helped me understand not just which colleges were options, but which ones truly aligned with my goals and personality. I got into my dream college!",
      author: "Neha Kapoor",
      role: "Student, CBSE Board",
      rating: 5
    },
    {
      quote: "Working with Swati on my career transition was life-changing. She helped me identify transferable skills I didn't even know I had. Her structured approach made the process feel less overwhelming.",
      author: "Vikram Singh",
      role: "Career Changer, Professional",
      rating: 5
    }
  ]

  const displayTestimonials = testimonials?.length
    ? testimonials
    : defaultTestimonials

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase">Success Stories</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Testimonials</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Hear from students, parents, and professionals whose lives have been transformed
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {displayTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md card-hover">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating || 5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full flex items-center justify-center font-semibold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
