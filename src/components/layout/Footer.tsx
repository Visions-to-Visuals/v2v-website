import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

export function Footer() {
  return (
    <footer id='footer' className="bg-white text-black border-t border-gray-200 relative z-10">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex flex-col tablet:flex-row tablet:justify-between gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <Image 
              src="/assets/full-logo-dark.png"
              alt="Visions to Visuals"
              width={200}
              height={40}
              className="mb-4 pt-1"
            />
            <Link
            href="https://cal.com/visions2visuals/discovery"
            target='_blank'
            rel="noopener noreferrer"
            className="
            group
            flex items-center justify-center gap-3
            bg-white text-black font-[500] tracking-tight
            transition-all duration-300 hover:underline
            text-nowrap"
            >
            Book a discovery call
            <Image 
              src="/assets/arrow.svg"
              alt="Arrow"
              width={20}
              height={20}
              className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-45"
            />
            </Link>
            <p className="text-sm text-gray-500 mt-auto hidden md:block">
              © 2025 Visions to Visuals. All Rights Reserved.
            </p>
          </div>

          {/* Resources Section */}
          <div className="min-w-[100px]">
            <h3 className="font-[500] mb-4 leading-[100%]">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#design" className="text-gray-600 hover:text-black transition-colors">Design</a></li>
              <li><a href="#develop" className="text-gray-600 hover:text-black transition-colors">Develop</a></li>
              <li><a href="#team" className="text-gray-600 hover:text-black transition-colors">Team</a></li>
              <li><a href="#projects" className="text-gray-600 hover:text-black transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Past Projects Section */}
          <div className="min-w-[120px]">
            <h3 className="font-[500] mb-4 leading-[100%]">Past Projects</h3>
            <ul className="space-y-2">
              <li><a target='_blank' href="#" className="text-gray-600 hover:text-black transition-colors">CA Invention Convention</a></li>
              <li><a target='_blank' href="https://www.goldenstateponds.com/" className="text-gray-600 hover:text-black transition-colors">Golden State Ponds</a></li>
              <li><a target='_blank' href="https://chalkwild.com/" className="text-gray-600 hover:text-black transition-colors">ChalkWild</a></li>
              <li><a target='_blank' href="https://www.allpeoplespc.org/" className="text-gray-600 hover:text-black transition-colors">All People&apos;s Presbyterian</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="min-w-[240px]">
            <h3 className="font-[500] mb-4 leading-[100%]">Contact</h3>
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
              <a href="https://www.linkedin.com/company/visions-to-visuals/" target='_blank' aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
                <Image src="/assets/linkedin.png" alt="" width={20} height={20} />
              </a>
              <a href="https://clutch.co/profile/visions-visuals#highlights" target='_blank' aria-label="Clutch" className="hover:opacity-80 transition-opacity">
                <Image src="/assets/calendly.png" alt="" width={20} height={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile copyright notice */}
        <p className="text-sm text-gray-500 pt-8 md:hidden">
          © 2025 Visions to Visuals. All Rights Reserved.
        </p>

        <p className="text-white text-sm">
            We&apos;re not just another web development company - we&apos;re your partner in digital success.
        </p>
      </div>
    </footer>
  );
} 