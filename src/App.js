import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import AuthRequired from './utils/AuthRequired';
// import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        {/* <Route path="404" element={<NotFound />} /> */}
        <Route path="/" element={<Home />} />
        {/* we want to protect these routes */}
        <Route element={<AuthRequired />}>
          <Route path="/cart" element={<Cart />} />
        </Route>
        {/* catch all */}
        {/* <Route path="*" element={<Missing />} /> */}
      </Route>
    </Routes>
  );
}
