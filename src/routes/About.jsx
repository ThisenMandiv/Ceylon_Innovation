import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function About() {
  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold">About Ceylon Innovation</h1>
          <p className="mt-6 text-slate-300">
            We are a Sri Lanka based technology company delivering high-impact software solutions.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}



