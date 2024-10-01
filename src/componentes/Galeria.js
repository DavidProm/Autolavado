import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './styles/Galeria.css';

const Galeria = ({ user, onLogout }) => {
    const photos = [
        "Foto1.png",
        "Foto2.png",
        "Foto3.png",
        "Foto4.png",
        "Foto5.png",
        "Foto6.png",
        "Foto7.png",
        "Foto8.png"
    ];

    return (
        <>
            <Header user={user} onLogout={onLogout} />
            <div className="container">
                <div className="row">
                    {photos.map((photo, index) => (
                        <section className="col-md-6" key={index}>
                            <div className="lavadosimg">
                                <img src={`/img/${photo}`} alt={`Fotos de lavados de autos ${index + 1}`} />
                            </div>
                        </section>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Galeria;
