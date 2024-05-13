import { GoogleOAuthProvider } from '@react-oauth/google';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ErrorPage from './pages/Error';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const User =
      localStorage.getItem('user') !== 'undefined'
        ? JSON.parse(localStorage.getItem('user'))
        : localStorage.clear();

    if (!User) navigate('/login');
  }, []);

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
      <Routes>
        <Route
          path='login'
          element={LoginPage}
        />
        <Route
          path='/*'
          element={HomePage}
          errorElement={ErrorPage}
        />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
