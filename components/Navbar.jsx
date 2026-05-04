'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-light shadow-sm py-3' : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo avec photo */}
        <a href="#hero" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-blue-100 shadow-sm shrink-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
            {imgError ? (
              <span className="text-xs font-bold gradient-text">JC</span>
            ) : (
              <Image
                src="/photo.jpeg"
                alt="Jean Cyriacq"
                width={32}
                height={32}
                className="object-cover object-top w-full h-full"
                onError={() => setImgError(true)}
              />
            )}
          </div>
          <span className="text-base font-bold">
            <span className="gradient-text">Jean</span>
            <span className="text-slate-400 font-light ml-1">Cyriacq</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-500 hover:text-blue-600 transition-colors duration-200 font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" className="hidden md:block btn-primary px-5 py-2 rounded-full text-sm font-semibold text-white">
          <span>Me contacter</span>
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden text-slate-500 hover:text-slate-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 mt-1 mx-4 rounded-2xl p-5 shadow-lg">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
