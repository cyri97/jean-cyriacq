'use client'

import { useEffect, useRef } from 'react'
import {
  Globe, Palette, Zap, Layers, Triangle,
  Server, Database, Terminal, Link2,
  GitBranch, Wind, Figma, TrendingUp,
  BarChart2, Activity, PieChart, BookOpen, BarChart,
} from 'lucide-react'

const categories = [
  {
    title: 'Frontend',
    color: 'blue',
    skills: [
      { name: 'HTML5', level: 90, icon: Globe },
      { name: 'CSS3', level: 85, icon: Palette },
      { name: 'JavaScript', level: 80, icon: Zap },
      { name: 'React', level: 72, icon: Layers },
      { name: 'Next.js', level: 68, icon: Triangle },
    ],
  },
  {
    title: 'Backend',
    color: 'indigo',
    skills: [
      { name: 'PHP', level: 75, icon: Server },
      { name: 'MySQL', level: 70, icon: Database },
      { name: 'Node.js', level: 55, icon: Terminal },
      { name: 'REST API', level: 65, icon: Link2 },
    ],
  },
  {
    title: 'Outils',
    color: 'emerald',
    skills: [
      { name: 'Git / GitHub', level: 78, icon: GitBranch },
      { name: 'Tailwind CSS', level: 82, icon: Wind },
      { name: 'Figma', level: 60, icon: Figma },
      { name: 'Économie', level: 92, icon: TrendingUp },
    ],
  },
  {
    title: 'Analyse de données',
    color: 'amber',
    skills: [
      { name: 'R', level: 72, icon: BarChart2 },
      { name: 'Stata', level: 70, icon: Activity },
      { name: 'SPSS', level: 65, icon: PieChart },
      { name: 'EViews', level: 68, icon: BarChart },
      { name: 'SAS', level: 35, icon: BookOpen, learning: true },
    ],
  },
]

const colorMap = {
  blue: {
    bar: 'bg-gradient-to-r from-blue-600 to-blue-400',
    badge: 'bg-blue-50 text-blue-600 border-blue-200',
    title: 'text-blue-600',
    icon: 'text-blue-600 bg-blue-50',
    border: 'border-blue-100',
    header: 'bg-blue-600',
  },
  indigo: {
    bar: 'bg-gradient-to-r from-indigo-600 to-indigo-400',
    badge: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    title: 'text-indigo-600',
    icon: 'text-indigo-600 bg-indigo-50',
    border: 'border-indigo-100',
    header: 'bg-indigo-600',
  },
  emerald: {
    bar: 'bg-gradient-to-r from-emerald-600 to-emerald-400',
    badge: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    title: 'text-emerald-600',
    icon: 'text-emerald-600 bg-emerald-50',
    border: 'border-emerald-100',
    header: 'bg-emerald-600',
  },
  amber: {
    bar: 'bg-gradient-to-r from-amber-500 to-amber-300',
    badge: 'bg-amber-50 text-amber-600 border-amber-200',
    title: 'text-amber-600',
    icon: 'text-amber-600 bg-amber-50',
    border: 'border-amber-100',
    header: 'bg-amber-500',
  },
}

function SkillBar({ name, level, icon: Icon, color, learning }) {
  const barRef = useRef(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bar.style.transition = 'width 1.1s cubic-bezier(0.4, 0, 0.2, 1)'
          bar.style.width = `${level}%`
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(bar)
    return () => observer.disconnect()
  }, [level])

  const c = colorMap[color]

  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <div className="flex items-center gap-2">
          <div className={`w-6 h-6 rounded-md flex items-center justify-center ${c.icon}`}>
            <Icon size={13} />
          </div>
          <span className="text-sm font-medium text-slate-700">{name}</span>
          {learning && (
            <span className="text-xs px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 font-medium">
              en cours
            </span>
          )}
        </div>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${c.badge}`}>
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div ref={barRef} className={`h-full rounded-full ${c.bar}`} style={{ width: '0%' }} />
      </div>
    </div>
  )
}

export default function Skills() {
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
    <section id="skills" ref={sectionRef} className="py-28 px-6 bg-light-50">
      <div className="max-w-6xl mx-auto">
        <div className="section-reveal text-center mb-20">
          <span className="section-label">Compétences</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
            Ma <span className="gradient-text">stack</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Développement web et analyse de données — deux disciplines, un même profil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {categories.map((cat, i) => {
            const c = colorMap[cat.color]
            return (
              <div
                key={cat.title}
                className={`section-reveal card card-hover rounded-3xl overflow-hidden border ${c.border}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`${c.header} px-6 py-3`}>
                  <span className="text-xs font-bold tracking-widest uppercase text-white/90">
                    {cat.title}
                  </span>
                </div>
                <div className="p-6 flex flex-col gap-5">
                  {cat.skills.map((skill) => (
                    <SkillBar key={skill.name} {...skill} color={cat.color} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
