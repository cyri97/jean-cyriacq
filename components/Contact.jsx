'use client'

import { useEffect, useRef, useState } from 'react'
import { Mail, Github, Linkedin, Send, MessageCircle, MapPin } from 'lucide-react'

const FacebookIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const socials = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jeancyriacq@icloud.com',
    href: 'mailto:jeancyriacq@icloud.com',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: FacebookIcon,
    label: 'Facebook',
    value: 'Jean cyriacq',
    href: 'https://facebook.com/j.cyri01',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/jeancyriacq',
    href: 'https://github.com',
    color: 'text-slate-700',
    bg: 'bg-slate-100',
    border: 'border-slate-200',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Jean Cyriacq',
    href: 'https://linkedin.com',
    color: 'text-blue-700',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
]

const inputClass = "w-full bg-light-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"

export default function Contact() {
  const sectionRef = useRef(null)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.section-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Message de ${form.name} — Portfolio`)
    const body = encodeURIComponent(`Nom: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.location.href = `mailto:jeancyriacq@icloud.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" ref={sectionRef} className="py-28 px-6 bg-light-50">
      <div className="max-w-6xl mx-auto">
        <div className="section-reveal text-center mb-20">
          <span className="section-label">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
            Travaillons <span className="gradient-text">ensemble</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Un projet en tête ? Une collaboration ? Une simple question ? Je suis là.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="section-reveal flex flex-col gap-5">
            <div className="card rounded-3xl p-8 border border-blue-100">
              <MessageCircle size={26} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Ouvrons la conversation</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Que vous soyez une startup, une entreprise ou un particulier avec un projet web,
                je serais ravi d&apos;en discuter avec vous.
              </p>
              <div className="flex items-center gap-2 mt-4 text-sm text-slate-500">
                <MapPin size={13} className="text-blue-500" />
                Côte d&apos;Ivoire · Disponible à distance
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className={`card card-hover rounded-2xl p-4 flex items-center gap-4 border ${s.border}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.bg}`}>
                    <s.icon size={17} className={s.color} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">{s.label}</div>
                    <div className="text-sm text-slate-700 font-medium">{s.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="section-reveal">
            <form onSubmit={handleSubmit} className="card rounded-3xl p-8 flex flex-col gap-5 border border-slate-100">
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2 block">Votre nom</label>
                <input type="text" required placeholder="Jean Dupont" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2 block">Email</label>
                <input type="email" required placeholder="vous@email.com" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2 block">Message</label>
                <textarea required rows={5} placeholder="Décrivez votre projet ou votre demande..."
                  value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`} />
              </div>
              <button type="submit" className="btn-primary w-full py-3.5 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2">
                <span>{sent ? 'Message préparé !' : 'Envoyer le message'}</span>
                <Send size={15} />
              </button>
              {sent && <p className="text-center text-xs text-emerald-600 font-medium">Votre client mail s&apos;est ouvert. Merci !</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
