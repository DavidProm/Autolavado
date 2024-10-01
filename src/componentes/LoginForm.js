import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Alternar entre login y registro
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError("");
  };

  // Manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();

    const nombre = event.target.nombre.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword?.value;
    
    //Inicio de Sesion
    if (isLogin) {
      try {
        const response = await fetch("http://localhost:3001/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nombre, password }),
        });

        const data = await response.json();
        if (response.ok) {
          onLogin(data.user);
          setError("");
          alert("Inicio de sesión exitoso");
          navigate('/');
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError("Error en el servidor");
      }
    } else {
      // Registro
      if (password !== confirmPassword) {
        setError("Las contraseñas no coinciden");
        return;
      }

      try {
        const response = await fetch("http://localhost:3001/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nombre, password }),
        });

        const data = await response.json();
        if (response.ok) {
          setError("");
          alert("Registro exitoso");
          setIsLogin(true);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError("Error en el servidor");
      }
    }
  };

  return (
    <div id="form-container">
      <img id="img" src="img/LogoLavado.png" alt="LavadoAutos" />
      <h2 id="form-title">{isLogin ? "Iniciar Sesión" : "Registrarse"}</h2>
      <form id={isLogin ? "loginForm" : "registerForm"} onSubmit={handleSubmit}>
        <input type="text" id="nombre" name="nombre" placeholder="Nombre" required /><br></br>
        <input type="password" id="password" name="password" placeholder="Contraseña" required /><br></br>
        {!isLogin && (
          <>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirmar contraseña" required /><br></br>
          </>
        )}
        <button type="submit">{isLogin ? "Iniciar Sesión" : "Registrarse"}</button>
        {error && <div id="error-message" className="error-message">{error}</div>}
      </form>
      <span className="toggle-link" onClick={toggleForm}>
        {isLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
      </span>
      <a id="phonet" href="tel:3123411975">
        <i className="bi bi-telephone-fill"></i>
      </a>
      <a href="tel:3123411975">
        <span className="phonet ms-2 phone-text ">Telefono</span>
        <span className="phonet ms-2 phone-text ">312-341-1975</span>
      </a>
    </div>
  );
};

export default LoginForm;