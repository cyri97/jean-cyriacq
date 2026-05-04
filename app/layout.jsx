import './globals.css'

export const metadata = {
  title: 'Jean Cyriacq — Développeur Web & Analyste de données',
  description: 'Portfolio de Degri Jean Cyriacq, étudiant M2 Économie, développeur web et analyste de données.',
  keywords: ['développeur web', 'analyste de données', 'Next.js', 'React', 'PHP', 'R', 'Stata', 'portfolio', 'Jean Cyriacq'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-light-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  )
}
