'use client'

import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity.client'

export default function Footer({ siteSettings }: { siteSettings?: any }) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {siteSettings?.logo ? (
                <Image
                  src={urlFor(siteSettings.logo).width(56).height(56).url()}
                  alt={siteSettings?.title || 'Swapath logo'}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-contain"
                />
              ) : null}
              <h3 className="text-xl font-bold">SWAPATH</h3>
            </div>
            <p className="text-gray-400 text-sm">{siteSettings?.description || 'Career Guidance & Admission Guidance'}</p>
            <p className="text-gray-400 text-sm mt-2">{siteSettings?.domain || 'Find Your Way to Success'}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="#about" className="hover:text-white">About</Link></li>
              <li><Link href="#services" className="hover:text-white">Services</Link></li>
              <li><Link href="#packages" className="hover:text-white">Packages</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#services" className="hover:text-white">Career Guidance</Link></li>
              <li><Link href="#services" className="hover:text-white">Admission Guidance</Link></li>
              <li><Link href="#packages" className="hover:text-white">Mentoria Packages</Link></li>
              <li><Link href="#contact" className="hover:text-white">Consultation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>Email: swatiraj72@gmail.com</p>
              <p>Phone: +91 6583672097</p>
              <p>LinkedIn: <Link href="http://www.linkedin.com/in/swati-raj26" target="_blank" className="text-blue-400 hover:text-blue-300">swati-raj26</Link></p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 SWAPATH. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white">Privacy</Link>
            <Link href="#" className="text-gray-400 hover:text-white">Terms</Link>
            <Link href="#" className="text-gray-400 hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
