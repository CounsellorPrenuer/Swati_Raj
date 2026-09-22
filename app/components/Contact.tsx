'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Contact Us</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Not sure where to start? A single conversation can bring clarity.
          </p>
          <button className="btn-primary mb-8 text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all">Book a Free Discovery Call →</button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Card 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-700">swatiswain@yahoo.com</p>
          </div>

          {/* Contact Info Card 2 */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl text-center">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-700">+65 8367 2097</p>
          </div>

          {/* Contact Info Card 3 */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl text-center">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-700">Singapore | Virtual sessions available</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 p-8 md:p-12 rounded-xl">
          <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
            />
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
