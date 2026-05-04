'use client'

import { useEffect, useRef } from 'react'
import { ExternalLink, Github, ShoppingBag, BookOpen, ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 'cyrimarket',
    icon: ShoppingBag,
    title: 'CyriMarket',
    status: 'En cours',
    statusColor: 'text-amber-600 bg-amber-50 border-amber-200',
    description:
      "Une marketplace moderne permettant la mise en relation entre acheteurs et vendeurs. Interface intuitive, gestion des produits, panier d'achat et système de paiement intégré.",
    tags: ['Next.js', 'React', 'PHP', 'MySQL', 'Tailwind'],
    accentColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
    topBar: 'bg-gradient-to-r from-blue-600 to-blue-400',
    border: 'border-blue-100',
    features: ['Catalogue produits', 'Panier & commandes', 'Espace vendeur', 'Tableau de bord'],
    links: { demo: '#', github: '#' },
  },
  {
    id: 'eduplus',
    icon: BookOpen,
    title: 'EduPlus',
    status: 'En cours',
    statusColor: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    description:
      "Plateforme éducative en ligne pensée pour les apprenants africains. Cours interactifs, suivi de progression, quiz et certification pour démocratiser l'accès à la formation.",
    tags: ['React', 'Next.js', 'JavaScript', 'CSS3', 'API REST'],
    accentColor: 'text-indigo-600',
    iconBg: 'bg-indigo-50',
    topBar: 'bg-gradient-to-r from-indigo-600 to-indigo-400',
    border: 'border-indigo-100',
    features: ['Cours en ligne', 'Quiz interactifs', 'Suivi de progression', 'Certifications'],
    links: { demo: '#', github: '#' },
  },
]

function ProjectCard({ project, index }) {
  const Icon = project.icon
  return (
    <div
      className={`section-reveal card card-hover rounded-3xl overflow-hidden border ${project.border}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className={`h-1.5 ${project.topBar}`} />
      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${project.iconBg}`}>
              <Icon size={22} className={project.accentColor} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
              <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${project.statusColor}`}>
                {project.status}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <a href={project.links.github} className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors">
              <Github size={15} />
            </a>
            <a href={project.links.demo} className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors">
              <ExternalLink size={15} />
            </a>
          </div>
        </div>

        <p className="text-slate-500 text-sm leading-relaxed mb-6">{project.description}</p>

        <div className="grid grid-cols-2 gap-2 mb-6">
          {project.features.map((f) => (
            <div key={f} className="flex items-center gap-1.5 text-xs text-slate-500">
              <ArrowRight size={11} className={project.accentColor} />
              {f}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
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
    <section id="projects" ref={sectionRef} className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="section-reveal text-center mb-20">
          <span className="section-label">Projets</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
            Ce que je <span className="gradient-text">construis</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Des projets concrets, pensés pour résoudre de vrais problèmes et créer de la valeur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="section-reveal text-center mt-12">
          <p className="text-slate-400 text-sm">
            D&apos;autres projets arrivent bientôt —{' '}
            <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
              restons en contact
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
