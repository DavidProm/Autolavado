import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './styles/Agendamiento.css';
import { useNavigate } from 'react-router-dom';

function Agendamiento({ user, onLogout }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        marca: '',
        modelo: '',
        matricula: '',
        tipo_vehiculo: 'automovil',
        tipo_lavado: 'basico',
        fecha: '',
        hora: '',
        sugerencias: ''
    });

    const [mensaje, setMensaje] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/api/citas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setMensaje('Cita agendada correctamente');
                setShowModal(true);
                console.log('Modal should be shown');
            } else {
                const errorData = await response.json();
                setMensaje(`Error: ${errorData.message}`);
            }
        } catch (error) {
            setMensaje('Error al enviar los datos. Por favor, intenta de nuevo.');
        }
    };

    const closeModal = () => {
        setShowModal(false);
        navigate('/');
    };

    return (
        <>
            <Header user={user} onLogout={onLogout} />
            <div className="agendamiento-container">
                <br />
                <h2>Agendamiento de cita</h2>
                <div className="row">
                    <div>
                        <section id="form">
                            <p><strong>Detalles del Vehículo</strong></p>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="marca">Marca:</label><br />
                                    <input type="text" id="marca" name="marca" required value={formData.marca} onChange={handleChange} /><br /><br />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="modelo">Modelo:</label><br />
                                    <input type="text" id="modelo" name="modelo" required value={formData.modelo} onChange={handleChange} /><br /><br />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="matricula">Matrícula:</label><br />
                                    <input type="text" id="matricula" name="matricula" required value={formData.matricula} onChange={handleChange} /><br /><br />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tipo_vehiculo">Tipo de vehículo:</label><br />
                                    <select id="tipo_vehiculo" name="tipo_vehiculo" required value={formData.tipo_vehiculo} onChange={handleChange}>
                                        <option value="automovil">Automóvil</option>
                                        <option value="motocicleta">Motocicleta</option>
                                    </select>
                                </div>
                                <br />
                                <p><strong>Detalles del Lavado</strong></p>
                                <div className="form-group">
                                    <label htmlFor="tipo_lavado">Tipo de Lavado:</label><br />
                                    <select id="tipo_lavado" name="tipo_lavado" required value={formData.tipo_lavado} onChange={handleChange}>
                                        <option value="basico">Lavado básico</option>
                                        <option value="estandar">Lavado estándar</option>
                                        <option value="completo">Lavado completo</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <br /><label htmlFor="fecha">Fecha del lavado:</label><br />
                                    <input type="date" id="fecha" name="fecha" required value={formData.fecha} onChange={handleChange} /><br /><br />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="hora">Elige una hora:</label><br />
                                    <input style={{ color: 'black' }} type="time" id="hora" name="hora" required value={formData.hora} onChange={handleChange} /><br /><br />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="sugerencias">Sugerencias para el lavado:</label><br />
                                    <textarea id="sugerencias" name="sugerencias" value={formData.sugerencias} onChange={handleChange}></textarea><br /><br />
                                </div>
                                <input type="submit" value="Enviar" />
                            </form>
                            {mensaje && <p>{mensaje}</p>}
                        </section>
                    </div>
                    <h2>Ubicación del Autolavado</h2>

                </div>
            </div>
            <div id="map">
                <br />
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d493.5425673261006!2d-73.36369031297323!3d8.268862888920937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1715905662773!5m2!1ses-419!2sco"
                    width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <Footer />
            {showModal && (
                <div id="successModal" className={`modal ${showModal ? 'show' : ''}`}>
                    <div id="uno" className="modal-content">
                        <span className="close-btn" onClick={closeModal}>&times;</span>
                        <p>Cita solicitada correctamente</p>
                        <button id="dos" onClick={closeModal}>OK</button>
                    </div>
                </div>
            )}

        </>
    );
}

export default Agendamiento;
