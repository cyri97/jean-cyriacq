export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold gradient-text">Jean Cyriacq</span>
        </div>
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} · Conçu & développé avec passion
        </p>
        <div className="flex items-center gap-4 text-slate-400 text-xs">
          <a href="#hero" className="hover:text-blue-600 transition-colors font-medium">Haut de page</a>
          <span>·</span>
          <a href="#contact" className="hover:text-blue-600 transition-colors font-medium">Contact</a>
        </div>
      </div>
    </footer>
  )
}
