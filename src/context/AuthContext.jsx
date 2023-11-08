// create auth context for jwt based authentication using spring boot backend
// user object should be accessible to all components wrapped in AuthContextProvider
// jwt response from backend gives a json with id and token
// id is used to get user object from backend

// Path: src/context/AuthContext.jsx
// Compare this snippet from src/App.jsx:
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Profile from './components/Profile';
// import ProtectedRoute from './utils/ProtectedRoute';
// import UnprotectedRoute from './utils/UnprotectedRoute';
// import { AuthProvider } from './context/AuthContext';
// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Switch>
//           <Route path="/login" component={Login} />
//           <UnprotectedRoute path="/register" component={Register} />
//           <ProtectedRoute path="/profile" component={Profile} />
//         </Switch>
//       </Router>
//     </AuthProvider>
//   );
// }
//
// export default App;
// Compare this snippet from src/context/AuthContext.jsx:
// import axios from 'axios';
// import { createContext, useContext, useEffect, useMemo, useState } from 'react';
//
// const AuthContext = createContext();
//
// const AuthProvider = ({ children }) => {
//   // State to hold the authentication token
//   const [token, setToken_] = useState(localStorage.getItem('token'));
//
//   // Function to set the authentication token
//   const setToken = (newToken) => {
//     setToken_(newToken);
//   };
//
//   useEffect(() => {
//     if (token) {
//
