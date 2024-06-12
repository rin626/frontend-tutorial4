import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import { AuthProvider, AuthContext } from './AuthContext';
import './App.css';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
            <Route path="/" element={<div>Home Page</div>} />
          </Routes>
        </main>
        <Footer />
      </AuthProvider>
    </Router>
  );
};

const ProtectedRoute = ({ component: Component }) => {
  const { auth } = useContext(AuthContext);
  return auth.token ? <Component /> : <Login />;
};

export default App;
