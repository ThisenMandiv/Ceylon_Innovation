import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './AppLayout';

// Pages
import Home from './routes/Home';
import About from './routes/About';
import Services from './routes/Services';
import Careers from './routes/Careers';
import Contact from './routes/Contact';

// Domain pages
import Healthcare from './routes/Healthcare';
import Hospitality from './routes/hospitality';
import Education from './routes/education';
import Retail from './routes/retail';

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

      // Domain sub-routes
      { path: 'domain/healthcare', element: <Healthcare /> },
      { path: 'domain/hospitality', element: <Hospitality /> },
      { path: 'domain/education', element: <Education /> },
      { path: 'domain/retail', element: <Retail /> },
    ],
  },
]);
