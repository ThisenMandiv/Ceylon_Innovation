import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './AppLayout'; // Ensure the path is correct
import Home from './routes/Home';
import Domain from './routes/domain';
import About from './routes/About';
import Services from './routes/Services';
import Careers from './routes/Careers';
import Contact from './routes/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'domain', element: <Domain /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'careers', element: <Careers /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);