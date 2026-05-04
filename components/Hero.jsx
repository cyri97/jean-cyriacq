'use client'

import { useEffect, useRef } from 'react'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const FacebookIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    setTimeout(() => {
      el.style.transition = 'opacity 0.9s ease, transform 0.9s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 120)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-light-50">
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #2563eb, transparent 70%)' }} />
        <div className="blob blob-delay-2 absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #4f46e5, transparent 70%)' }} />
        <div className="blob blob-delay-4 absolute top-1/2 left-1/3 w-72 h-72 rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #60a5fa, transparent 70%)' }} />
      </div>

      <div ref={heroRef} className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Available badge */}
        <div className="badge mb-8 mx-auto w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Disponible pour des projets
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black mb-4 leading-tight tracking-tight text-slate-900">
          Jean{' '}
          <span className="gradient-text">Cyriacq</span>
        </h1>

        {/* Subtitle */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-6">
          <span className="text-xl md:text-2xl font-semibold text-slate-800">Développeur Web</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-300" />
          <span className="text-xl md:text-2xl text-slate-500 font-light">M2 Économie</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-300" />
          <span className="text-xl md:text-2xl text-slate-500 font-light">Analyste de données</span>
        </div>

        {/* Description */}
        <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Je conçois des expériences web modernes et performantes,
          à l&apos;intersection de la <span className="text-blue-600 font-medium">tech</span> et de l&apos;
          <span className="text-indigo-600 font-medium">économie</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a href="#projects" className="btn-primary px-8 py-3.5 rounded-full text-white font-semibold text-sm w-full sm:w-auto text-center">
            <span>Voir mes projets</span>
          </a>
          <a href="#contact" className="btn-outline px-8 py-3.5 rounded-full font-semibold text-sm w-full sm:w-auto text-center">
            Me contacter
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4">
          {[
            { icon: Github, href: 'https://github.com', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: FacebookIcon, href: 'https://facebook.com/j.cyri01', label: 'Facebook' },
            { icon: Mail, href: 'mailto:jeancyriacq@icloud.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300 hover:shadow-md transition-all duration-250"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 animate-bounce">
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <ArrowDown size={14} />
      </div>
    </section>
  )
}
