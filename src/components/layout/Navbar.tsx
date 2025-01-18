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
    <nav className="flex flex-row">
      <Link href="/">
        <Image 
          src="/assets/full-logo.png" 
          alt="Visions to Visuals"
          width={135}
          height={40}
        />
      </Link>
      <div className="flex flex-row">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
      <button>Let's talk</button>
    </nav>
  )
} 