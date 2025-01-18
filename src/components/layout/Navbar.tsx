import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
]

export function Navbar() {
  return (
    <nav className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/assets/logo-v2v.png" 
              alt="Visions to Visuals"
              width={135}
              height={40}
              className="h-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
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

          {/* CTA Button */}
          <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full text-sm">
            Let's talk →
          </button>
        </div>
      </div>
    </nav>
  )
} 