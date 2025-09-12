export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-12 bg-white">
      <div className="container-width px-4 py-8 text-sm text-slate-500 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Ceylon Innovation. All rights reserved.</p>
        <p className="opacity-75">Built by Intern Team B</p>
      </div>
    </footer>
  )
}




