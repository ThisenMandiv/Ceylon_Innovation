import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function Careers() {
  const roles = [
    { title: 'Business Analyst (Intern)', team: 'Team A/B', type: 'Internship' },
    { title: 'UI/UX Designer (Intern)', team: 'Team A/B', type: 'Internship' },
    { title: 'Developer (Intern)', team: 'Team A/B', type: 'Internship' },
  ]

  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold">Careers</h1>
          <p className="mt-4 text-slate-300">Join our growing team of innovators.</p>
          <div className="mt-8 space-y-4">
            {roles.map((r) => (
              <div key={r.title} className="p-5 rounded-lg border border-slate-800 bg-slate-900/50 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{r.title}</h3>
                  <p className="text-slate-400">{r.team} · {r.type}</p>
                </div>
                <a href="/contact" className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500">Apply</a>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}



