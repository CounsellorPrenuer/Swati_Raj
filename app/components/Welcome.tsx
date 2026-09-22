'use client'

export default function Welcome() {
  const welcomeText = `Choosing a stream, a subject, or a career path can feel overwhelming — for students and parents alike. At Swapath, I help students pause, reflect, and find their way forward, using structured assessments and honest, experience-backed guidance.

With over a decade in education — as a teacher, Vice-Principal, and curriculum developer across CBSE and Cambridge IGCSE systems — I understand not just careers, but how students actually learn, think, and grow.`

  return (
    <section className="py-16 bg-white">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Welcome to Swapath</h2>
        <div className="text-lg text-gray-700 leading-relaxed space-y-4">
          {welcomeText.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
