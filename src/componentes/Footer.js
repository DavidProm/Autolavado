import React from 'react';

const Footer = () => (
  <footer className="panel-footer">
    <div className="container">
      <div className="row">
        <section id="hora" className="col-sm-4">
          <span id="texto2">Hora:</span><br />
          Lunes a Sabados: 07:00am - 05:00pm<br />
          Domingos: 08:00am - 1:00pm<br />
          <hr className="visible-xs" />
        </section>
        <section id="direccion" className="col-sm-4">
          <span id="texto2">Direccion:</span><br />
          Barbosa Santander<br />
          Calle 11b-N307
          <hr className="visible-xs" />
        </section>
        <section id="frase" className="col-sm-4">
          <p>"Dale a tu auto el cuidado que se merece! Experimenta nuestro servicio de autolavado de alta calidad para mantener tu vehículo reluciente y protegido."</p>
        </section>
      </div>
      <div className="text-center" style={{ color: 'white' }}>&copy; Copyright Autolavado ElTifon 2024</div>
    </div>
  </footer>
);

export default Footer;
