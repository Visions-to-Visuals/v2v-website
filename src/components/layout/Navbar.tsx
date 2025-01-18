'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <div className="h-[88px] bg-black" /> {/* Spacer for fixed navbar */}
      <nav className="fixed top-0 left-0 right-0 w-full bg-black text-white z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex md:grid md:grid-cols-3 items-center justify-between">
            {/* Logo - Left */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex-shrink-0">
                <Image 
                  src="/assets/full-logo.png" 
                  alt="Visions to Visuals"
                  width={180}
                  height={50}
                  className="h-auto"
                />
              </Link>
            </div>

            {/* Navigation Links - Center */}
            <div className="hidden md:flex items-center justify-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button and Hamburger - Right */}
            <div className="flex justify-end items-center">
              <button className="hidden md:flex items-center gap-2 border border-white text-white px-5 py-3 rounded-full text-sm hover:bg-white hover:text-black transition-colors">
                Let's talk
              </button>

              {/* Hamburger Menu Button - Mobile */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-0.5 bg-white mb-1.5"></div>
                <div className="w-6 h-0.5 bg-white mb-1.5"></div>
                <div className="w-6 h-0.5 bg-white"></div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden fixed left-0 right-0 top-[72px] bg-black border-t border-gray-800">
              <div className="px-4 py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    className="block text-gray-300 hover:text-white transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <button className="w-full flex items-center justify-center gap-2 border border-white text-white px-5 py-3 rounded-full text-sm hover:bg-white hover:text-black transition-colors">
                  Let's talk
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
} 