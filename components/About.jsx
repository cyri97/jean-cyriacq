'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { GraduationCap, Code2, BarChart2, MapPin } from 'lucide-react'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Master 2 Économie',
    desc: 'Formation académique en analyse économique, modélisation et statistiques',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    icon: Code2,
    title: 'Développeur Web',
    desc: 'HTML, CSS, PHP, JavaScript, React & Next.js — du front au back',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
  },
  {
    icon: BarChart2,
    title: 'Analyste de données',
    desc: 'R, Stata, SPSS, EViews — modélisation et visualisation de données',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
]

function PhotoAvatar() {
  const [error, setError] = useState(false)
  if (error) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <span className="text-5xl font-black gradient-text">JC</span>
      </div>
    )
  }
  return (
    <Image
      src="/photo.jpeg"
      alt="Jean Cyriacq"
      fill
      className="object-cover object-top"
      priority
      onError={() => setError(true)}
    />
  )
}

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.section-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="section-reveal text-center mb-20">
          <span className="section-label">À propos</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
            Qui suis-<span className="gradient-text">je ?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="section-reveal flex flex-col items-center lg:items-start gap-8">
            <div className="relative">
              <div className="w-60 h-60 rounded-3xl overflow-hidden relative shadow-xl border-4 border-white ring-1 ring-slate-200">
                <PhotoAvatar />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white border border-slate-200 shadow-md px-3 py-2 rounded-xl flex items-center gap-2 text-xs font-medium">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-slate-700">Disponible</span>
              </div>
              <div className="absolute -top-4 -left-4 bg-white border border-slate-200 shadow-md px-3 py-2 rounded-xl flex items-center gap-1.5 text-xs font-medium text-slate-600">
                <MapPin size={12} className="text-blue-500" />
                Côte d'Ivoire
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 w-full max-w-xs">
              {[
                { value: '2+', label: "ans d'expérience" },
                { value: '5+', label: 'projets réalisés' },
                { value: 'M2', label: 'niveau académique' },
              ].map((stat) => (
                <div key={stat.label} className="card rounded-2xl p-4 text-center card-hover">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-slate-500 text-xs mt-1 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="section-reveal flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Économiste, développeur web<br />
                <span className="text-slate-400 font-light">et analyste de données.</span>
              </h3>
              <p className="text-slate-500 leading-relaxed text-base mb-4">
                Je m&apos;appelle <strong className="text-slate-800">Degri Jean Cyriacq</strong>, étudiant
                en Master 2 Économie et développeur web passionné. Je construis des solutions qui
                combinent la rigueur analytique et la créativité technique.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm">
                Mes projets — qu&apos;il s&apos;agisse d&apos;une marketplace ou d&apos;une plateforme
                éducative — sont pensés pour créer de la valeur réelle, avec un regard d&apos;économiste
                et des outils de développeur.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className={`card card-hover rounded-2xl p-4 flex items-start gap-4 border ${item.border}`}
                >
                  <div className={`${item.bg} rounded-xl p-2.5 shrink-0`}>
                    <item.icon size={18} className={item.color} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">{item.title}</div>
                    <div className="text-slate-500 text-xs mt-0.5 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
