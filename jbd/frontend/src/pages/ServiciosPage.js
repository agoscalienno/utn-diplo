import '../styles/ServiciosPage.css'
import React from "react";

const ServiciosPage = (props) => {
    return (
<main className="holder">
        <h2>Nuestros Servicios</h2>
        <div className="servicios">
            <h3>Diseño de Interiores</h3>
            <p>¡Conocé nuestra nueva área de diseño!</p>
            <p>Para un servicio más completo ahora también brindamos un asesoramiento personalizado para decorar cada
                uno de tus espacios.</p>
            <p>¡No te lo pierdas!</p>
            <img src="img/render-1.JPG" alt=""/>
            <img src="img/render-3.JPG" alt=""/>
        </div>
    </main>
    )
}

export default ServiciosPage