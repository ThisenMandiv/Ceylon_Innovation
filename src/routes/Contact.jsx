import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setError('')
    try {
      const res = await fetch(import.meta.env.VITE_API_BASE_URL + '/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input name="name" value={form.name} onChange={onChange} required className="w-full rounded-md bg-slate-900 border border-slate-800 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input type="email" name="email" value={form.email} onChange={onChange} required className="w-full rounded-md bg-slate-900 border border-slate-800 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea name="message" rows="5" value={form.message} onChange={onChange} required className="w-full rounded-md bg-slate-900 border border-slate-800 px-3 py-2" />
            </div>
            {status === 'success' && <p className="text-green-400">Thanks! We'll get back to you soon.</p>}
            {error && <p className="text-red-400">{error}</p>}
            <button disabled={status==='submitting'} className="px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-500 disabled:opacity-50">
              {status==='submitting' ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}



