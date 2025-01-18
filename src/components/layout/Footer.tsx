import React from 'react'
import Image from 'next/image'

interface FooterColumn {
  title?: string;
  content: {
    type: 'logo' | 'links' | 'contact';
    items?: { label: string; href: string; }[];
    logo?: { src: string; alt: string; };
    button?: { label: string; href: string; };
    copyright?: string;
  };
}

export function Footer() {
  const columns: FooterColumn[] = [
    {
      content: {
        type: 'logo',
        logo: { src: '/assets/logo-v2v.png', alt: 'Visions to Visuals' },
        button: { label: 'Book a discovery call', href: '#' },
        copyright: '© 2025 Visions to Visuals. All Rights Reserved.'
      }
    },
    {
      title: 'Resources',
      content: {
        type: 'links',
        items: [
          { label: 'Our Services', href: '/services' },
          { label: 'Our Team', href: '/team' },
          { label: 'Our Work', href: '/work' },
          { label: 'Our FAQ', href: '/faq' }
        ]
      }
    },
    {
      title: 'Past Projects',
      content: {
        type: 'links',
        items: [
          { label: 'California Invention Convention', href: '#' },
          { label: 'Golden State Ponds', href: '#' },
          { label: 'ChalkWild', href: '#' },
          { label: "All People's Presbyterian Church", href: '#' }
        ]
      }
    },
    {
      title: 'Contact',
      content: {
        type: 'contact',
        items: [
          { label: 'contact@visionstovisuals.com', href: 'mailto:contact@visionstovisuals.com' },
          { label: '209-232-6678', href: 'tel:209-232-6678' }
        ]
      }
    }
  ];

  return (
    <footer className="bg-white text-black border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {columns.map((column, index) => (
            <div key={column.title || index} className="flex flex-col">
              {column.title && (
                <h3 className="font-bold mb-4">{column.title}</h3>
              )}
              
              {column.content.type === 'logo' && (
                <>
                  <Image 
                    src={column.content.logo!.src}
                    alt={column.content.logo!.alt}
                    width={135}
                    height={40}
                    className="mb-4"
                  />
                  <button className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors mb-8">
                    {column.content.button!.label} →
                  </button>
                  <p className="text-sm text-gray-500 mt-auto">
                    {column.content.copyright}
                  </p>
                </>
              )}

              {column.content.type === 'links' && (
                <ul className="space-y-2">
                  {column.content.items!.map((item) => (
                    <li key={item.label}>
                      <a 
                        href={item.href} 
                        className="text-gray-600 hover:text-black transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              {column.content.type === 'contact' && (
                <>
                  <ul className="space-y-2 mb-4">
                    {column.content.items!.map((item) => (
                      <li key={item.label}>
                        <a 
                          href={item.href} 
                          className="text-gray-600 hover:text-black transition-colors"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
                      <Image src="/assets/linkedin.png" alt="" width={24} height={24} />
                    </a>
                    <a href="#" aria-label="Clutch" className="hover:opacity-80 transition-opacity">
                      <Image src="/assets/clutch.png" alt="" width={24} height={24} />
                    </a>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
} 