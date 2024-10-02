import React, { useEffect, useState } from "react";
import Header from './Header';
import Footer from './Footer';
import './styles/Citas.css';

const Citas = ({ user, onLogout }) => {
    const [citas, setCitas] = useState([]);
    const [confirmarEliminar, setConfirmarEliminar] = useState(false);
    const [citaAEliminar, setCitaAEliminar] = useState(null);

    useEffect(() => {
        const fetchCitas = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/citas');
                if (!response.ok) {
                    throw new Error('Error al obtener las citas');
                }
                const data = await response.json();
                setCitas(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCitas();
    }, []);

    const eliminarCita = async (cita) => {
        const confirmDelete = window.confirm("¿Quieres eliminar esta cita?");
        if (confirmDelete) {
            try {
                const response = await fetch(`http://localhost:3001/api/citas/${cita.id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Error al eliminar la cita');
                }

                setCitas((prevCitas) => prevCitas.filter((c) => c.id !== cita.id));
                alert('Cita eliminada correctamente');
            } catch (error) {
                console.error('Error al eliminar la cita:', error);
                alert('Error al eliminar la cita. Por favor, inténtalo de nuevo más tarde.');
            }
        }
    };

    const manejarEliminarCita = (cita) => {
        setCitaAEliminar(cita);
        setConfirmarEliminar(true);
    };

    const confirmarEliminarCita = () => {
        eliminarCita(citaAEliminar);
        setConfirmarEliminar(false);
        setCitaAEliminar(null);
    };

    const cancelarEliminarCita = () => {
        setConfirmarEliminar(false);
        setCitaAEliminar(null);
    };

    return (
        <>
            <Header user={user} onLogout={onLogout} />

            <div className="citas-container">
                <h2>Citas Agendadas</h2>
                <ul className="citas-list">
                    {citas.map((cita, index) => (
                        <li key={index}>
                            <span>Marca:</span> {cita.marca} <br />
                            <span>Modelo:</span> {cita.modelo} <br />
                            <span>Matrícula:</span> {cita.matricula} <br />
                            <span>Fecha:</span> {cita.fecha} <br />
                            <span>Hora:</span> {cita.hora} <br />
                            <span>Sugerencias:</span> {cita.sugerencias} <br />
                            <div className="boton-container">
                                <button className="boton-citas" onClick={() => manejarEliminarCita(cita)}>Completado</button>
                            </div>
                        </li>
                    ))}
                </ul>

                {confirmarEliminar && (
                    <div className="modal-overlay">
                        <div className="confirmacion-modal">
                            <p>¿Estás seguro de que deseas eliminar esta cita?</p>
                            <button className="boton-modal" onClick={confirmarEliminarCita}>Sí, eliminar</button>
                            <button className="boton-modal" onClick={cancelarEliminarCita}>Cancelar</button>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </>
    );
};

export default Citas;
