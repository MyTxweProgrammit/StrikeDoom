import React, { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Signup from './components/Signup.jsx';
import Signin from './components/Signin.jsx';
import Dashboard from './components/Dashboard.jsx'
import RoleBasedRoute from './components/auth/RoleBasedRoute.jsx';
import Viewer from './components/Viewer.jsx';
import Project from './components/Project.jsx';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from './firebase-config.js'

function Root() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const login = () => setIsAuthenticated(true);
  const logout = () => {
    localStorage.removeItem('user_strikedoom_token');
    signOut(auth).then(() => {
      setIsAuthenticated(false);
    });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) { setIsAuthenticated(true); } 
      else setIsAuthenticated(false);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin login={login} />} />
        <Route path="/share" element={<Viewer />} />
        <Route element={<RoleBasedRoute requiredRole="user" isLoading={isLoading} /> }>
          <Route path="/user" element={<Dashboard logout={logout}/>} />
          <Route path="/user/project/:projectId" element={<Project logout={logout} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
