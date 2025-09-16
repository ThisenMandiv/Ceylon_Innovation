import { useRouteError, Link } from 'react-router-dom'

export default function NotFound() {
  const error = useRouteError()
  const title = error?.status === 404 ? 'Page not found' : 'Something went wrong'
  const message =
    error?.statusText || error?.message || 'We could not process your request.'

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold text-slate-900">{title}</h1>
        <p className="mt-3 text-slate-600">{message}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-sky-600 text-white px-5 py-2.5 hover:bg-sky-500"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-2.5 text-slate-700 hover:bg-slate-50"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}



