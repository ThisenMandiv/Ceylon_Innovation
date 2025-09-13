import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // Ensure the path is correct

export default function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}