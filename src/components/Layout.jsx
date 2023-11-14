import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Outlet />
      <Toaster />
    </main>
  );
};

export default Layout;
