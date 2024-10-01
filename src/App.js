import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import LoginForm from './componentes/LoginForm';
import Lavado from './componentes/Lavado';
import Galeria from './componentes/Galeria';
import Agendamiento from './componentes/Agendamiento';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (userName) => {
    setUser(userName);
  };

  const handleLogout = async () => {
    setUser(null);
    try {
      await fetch("http://localhost:3001/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate('/'); 
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={user ? <Inicio user={user} onLogout={handleLogout} /> : <LoginForm onLogin={handleLogin} />} />
        <Route path="/Lavado" element={<Lavado user={user} onLogout={handleLogout} />} />
        <Route path="/Galeria" element={<Galeria user={user} onLogout={handleLogout} />} />
        <Route path="/Agendamiento" element={<Agendamiento user={user} onLogout={handleLogout} />} />
      </Routes>
    </div>
  );
};

export default App;