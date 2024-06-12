import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../AuthContext';

const Dashboard = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.token) {
      navigate('/login');
    }
  }, [auth, navigate]);

  return <h2>Dashboard</h2>;
};

export default Dashboard;
