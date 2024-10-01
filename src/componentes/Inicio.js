import React from 'react';
import './styles/Inicio.css';
import Header from './Header';
import Footer from './Footer';

const Inicio = ({ user, onLogout }) => {
  return (
    <>
      <Header user={user} onLogout={onLogout} />
      <div className="container">
        <div className="row">
          <section id="texto" className="col-sm-4">
            <div className="lavadosimg">
              <img src="img/Lavado1.png" alt="Fotos de lavados de autos" />
            </div>
            <br /><span>¿Quiénes somos?</span><br />
            <br />
            <p id="parrafo">Nosotros somos un local de propiedad y operación de lavado de autos situado en Direccion Calle 11B N 3-07 Situado junto a La via principal Carrera 10, ofrecemos un cómodo acceso a nuestros servicios de lavado. También ofrecemos diferentes tipos de lavados dependiendo de la necesidad del cliente. Nos asociamos activamente con nuestra comunidad, y nuestro objetivo es superar las expectativas de nuestros clientes para convertirse en su proveedor preferido de lavado de automóviles.</p>
          </section>
          <section id="texto" className="col-sm-4">
            <div className="lavadosimg">
              <img src="img/Lavado2.png" alt="Fotos de lavados de autos" />
            </div>
            <br /><span>¿Por qué destacamos?</span>
            <ul id="ult">
              <br />
              <li>Equipo de lavado de alta gama a presión</li><br />
              <li>Aspiradoras de alta potencia con cualquier lavado</li><br />
              <li>Túnel sin estrés con la última tecnología de suelo móvil</li><br />
              <li>La carga es más fácil para los clientes</li><br />
              <li>Se aceptan todo tipo de coches, coches exóticos, todoterrenos, camionetas de doble rueda trasera, etc.</li><br />
              <li>Los neumáticos y rines no sufren arañazos</li><br />
              <li>Amabilidad y prioridad siempre a nuestros clientes</li><br />
            </ul>
          </section>
          <section id="texto" className="col-sm-4">
            <div className="lavadosimg">
              <img src="img/Lavado3.png" alt="Fotos de lavados de autos" />
            </div>
            <br /><span>Metodos de Lavado</span><br /><br />
            <p id="ult">Membresías VIP para nuestros clientes</p><br />
            <p id="ult">Lavados personalizados!</p>
            <br /><span>Métodos de pago</span><br /><br />
            <ul id="ult">
              <li>Tarjeta de crédito/débito <i id="ip" className="bi bi-credit-card"></i></li><br />
              <li>Pago en efectivo <i id="ip" className="bi bi-cash-coin"></i></li><br />
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Inicio;
