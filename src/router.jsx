import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './App.jsx'
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Services from './routes/Services.jsx'
import Careers from './routes/Careers.jsx'
import Contact from './routes/Contact.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'careers', element: <Careers /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
])



