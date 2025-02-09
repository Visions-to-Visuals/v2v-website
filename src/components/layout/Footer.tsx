import React from 'react'
import Image from 'next/image'
import Button from '../components/button';

export function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Logo Section */}
          <div className="flex flex-col">
            <Image 
              src="/assets/full-logo-dark.png"
              alt="Visions to Visuals"
              width={228}
              height={40}
              className="mb-4"
            />
            <Button></Button>
            <p className="text-sm text-gray-500 mt-auto hidden md:block">
              © 2025 Visions to Visuals. All Rights Reserved.
            </p>
          </div>

          {/* Resources Section */}
          <div className="min-w-[140px]">
            <h3 className="font-[500] mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="text-gray-600 hover:text-black transition-colors">Our Services</a></li>
              <li><a href="/team" className="text-gray-600 hover:text-black transition-colors">Our Team</a></li>
              <li><a href="/work" className="text-gray-600 hover:text-black transition-colors">Our Work</a></li>
              <li><a href="/faq" className="text-gray-600 hover:text-black transition-colors">Our FAQ</a></li>
            </ul>
          </div>

          {/* Past Projects Section */}
          <div className="min-w-[200px]">
            <h3 className="font-[500] mb-4">Past Projects</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">California Invention Convention</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Golden State Ponds</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">ChalkWild</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">All People's Presbyterian Church</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="min-w-[140px]">
            <h3 className="font-[500] mb-4">Contact</h3>
            <ul className="space-y-2 mb-4">
              <li><a href="mailto:contact@visionstovisuals.com" className="text-gray-600 hover:text-black transition-colors flex items-center gap-2">
                <Image 
                  src="/assets/email-icon.svg"
                  alt="Email"
                  width={12}
                  height={12}
                />
                contact@visionstovisuals.com</a></li>
              <li><a href="tel:209-232-6678" className="text-gray-600 hover:text-black transition-colors flex items-center gap-2">
                <Image 
                  src="/assets/phone-icon.svg"
                  alt="Phone"
                  width={12}
                  height={12}
                />
                209-232-6678</a></li>
            </ul>
            <div className="flex gap-4">
              <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
                <Image src="/assets/linkedin.png" alt="" width={20} height={20} />
              </a>
              <a href="#" aria-label="Calendly" className="hover:opacity-80 transition-opacity">
                <Image src="/assets/calendly.png" alt="" width={20} height={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile copyright notice */}
        <p className="text-sm text-gray-500 pt-8 md:hidden">
          © 2025 Visions to Visuals. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
} 