import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from './Footer';

const Layout = () => {
  return (
    <main className="flex flex-col bg-gray-100 min-h-screen">
      <Navbar />
      <Outlet className="mb-auto" />
      <Footer />
      <Toaster />
    </main>
  );
};

export default Layout;
