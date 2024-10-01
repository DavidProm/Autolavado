import React from 'react';
import './styles/Lavado.css';
import Header from './Header';
import Footer from './Footer';

const Lavado = ({ user, onLogout }) => {
    return (
        <>
            <Header user={user} onLogout={onLogout} />
            <div className="container">
                <div className="row">
                    <section id="texto" className="col-md-6">
                        <div className="lavadosimg">
                            <img id="imgl" src="img/Aveo.png" alt="Fotos de lavados de autos" />
                        </div>
                        <br />
                        <span>Metodos de lavado Automovil</span>
                        <br />
                        <br />
                        <span id="parrafo">Lavado basico:</span>
                        <p>Este tipo de lavado incluye, lavado exterior y secado.</p>
                        <ul>
                            <li>Precio 20.000$.</li>
                        </ul>
                        <br />
                        <span id="parrafo">Lavado estandar:</span>
                        <p>Este tipo de lavado incluye, lavado exterior y secado, limpieza interior, aspirado, limpieza superficial.</p>
                        <ul>
                            <li>Precio 30.000$.</li>
                        </ul>
                        <br />
                        <span id="parrafo">Lavado completo:</span>
                        <p>Este tipo de lavado incluye, lavado exterior, limpieza profunda del interior, aspirado, limpieza de tapiceria, limpieza de motor, encerado, y abrillantamiento de llantas.</p>
                        <ul>
                            <li>Precio 50.000$.</li>
                        </ul>
                        <br />
                    </section>
                    <section id="texto" className="col-md-6">
                        <div className="lavadosimg">
                            <img id="imgl" src="img/Moto.png" alt="Fotos de lavados de autos" />
                        </div>
                        <br />
                        <span>Metodos de lavado Motocicleta</span>
                        <br />
                        <br />
                        <span id="parrafo">Lavado basico:</span>
                        <p>Este tipo de lavado incluye, limpieza exterior, incluyendo las llantas y chasis.</p>
                        <ul>
                            <li>Precio 10.000$.</li>
                        </ul>
                        <br />
                        <span id="parrafo">Lavado estandar:</span>
                        <p>Este tipo de lavado incluye, limpieza exterior, abrillantamiento de llantas y secado.</p>
                        <ul>
                            <li>Precio 15.000$.</li>
                        </ul>
                        <br />
                        <span id="parrafo">Lavado completo:</span>
                        <p>Este tipo de lavado incluye, limpieza exterior e interior detallada, pulido, encerado, tratamiento de partes metalicas, abrillantamiendo de llantas y secado.</p>
                        <ul>
                            <li>Precio 25.000$.</li>
                        </ul>
                        <br />
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Lavado;
