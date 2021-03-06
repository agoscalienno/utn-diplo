import '../styles/ContactoPage.css'
import React from "react";

const ContactoPage = (props) => {
    return (
        <main className="holder">
            <h2>Contactanos</h2>
            <div className="contacto">
                <form action="" className="formulario">
                    <p>
                        <label for="nombre">
                            Nombre
                        </label>
                        <input type="text" name="" id=""/>
                            <label for="apellido">
                                Apellido
                            </label>
                            <input type="text" name="" id=""/>
                            </p>
                            <p>
                                <label for="email">
                                    Email
                                </label>
                                <input type="text" name="" id=""/>
                                    <label for="telefono">
                                        Teléfono
                                    </label>
                                    <input type="text" name="" id=""/>
                                    </p>
                                    <p>
                                        <label for="mensaje">
                                            Mensaje
                                        </label>
                                        <textarea name="" id="" cols="30" rows="10"></textarea>
                                    </p>
                                    <p>
                                        <input type="submit" value="Enviar" />
                                    </p>
                                </form>
                            </div>
                            <div className="datos">
                                <a href="https://www.instagram.com/jbd.interiores/">INSTAGRAM</a>
                                <a href="https://wa.me/1XXXXXXXXXX">WHATSAPP</a>
                                <a href="mailto: jbdecoraciondeinteriores@gmail.com">MAIL</a>
                            </div>
                        </main>
                        )
}

                        export default ContactoPage