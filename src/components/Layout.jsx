import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Layout;
