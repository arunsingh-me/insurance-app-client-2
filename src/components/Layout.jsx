import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <main className="flex flex-col">
      <h1 className="text-center p-3 text-lg">Insurance App</h1>
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Layout;
