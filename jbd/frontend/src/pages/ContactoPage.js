import '../styles/ContactoPage.css'
import React, { useState } from 'react';
import axios from 'axios';


const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
            axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="holder">
            <h2>Contactanos</h2>
            <div className="contacto">
                <form action="/contacto" className="formulario" method="post" onSubmit={handleSubmit}>
                    <p>
                        <label for="nombre">
                            Nombre
                        </label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                        <label for="apellido">
                            Apellido
                        </label>
                        <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="email">
                            Email
                        </label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} />
                        <label for="telefono">
                            Teléfono
                        </label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="mensaje">
                            Mensaje
                        </label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} cols="30" rows="10"></textarea>
                    </p>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                    <p>
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>
            
        </main>
    )
}


export default ContactoPage