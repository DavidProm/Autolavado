import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = ({ user, onLogout }) => (
  <header>
    <nav id="header-nav" className="navbar navbar-expand-lg">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img id="img" src="img/LogoLavado.png" alt="LavadoAutos" className="img-fluid" />
        </Link>

        <div className="d-flex align-items-center button-container">
          {user && (
            <div className="user-info">
              <span className="user-name">{user}</span>
              <button id="buttonc" className="btn btn-primary" onClick={onLogout}>
                Cerrar sesión
              </button>
            </div>
          )}
        </div>

        <div className="d-flex align-items-center phone-container">
          <a id="phonei" href="tel:3123411975">
            <i className="bi bi-telephone-fill"></i>
          </a>
          <div className="d-flex flex-column flex-md-row align-items-center ms-2">
            <a href="tel:3123411975" className="phone-text">
              <span id="phonen" className="ms-2">Telefono:</span>
            </a>
            <a href="tel:3123411975" className="phone-text ms-md-2">
              <span id="phonen" className="ms-2">312-341-1975</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
    <div className="navegacion">
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/Lavado">Lavados</Link></li>
          <li><Link to="/Galeria">Galeria</Link></li>
          <li><Link to="/Agendamiento">Agendar</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;