import '../styles/NosotrosPage.css'
import React from "react";

const NosotrosPage = (props) => {
    return (
<main className="holder">
        <div className="columnas">
            <section className="about">
                <h2>Quienes somos</h2>
                <p>Hola! Somos Joha y Munchy (mi mamá, para los que no la conocen ♥). Queríamos darles la bienvenida a
                    este
                    emprendimiento que empezamos a armar hace tiempo con mucho amor y dedicación.</p>
                <p>Este es un gran proyecto para nosotras, un desafío tanto personal como familiar y estamos dispuestas
                    a
                    crecer juntas. Queremos agradecer a todos los que nos apoyaron desde el principio y lo siguen
                    haciendo
                    cada día.</p>
                <p>Esperamos que puedan encontrar cosas hermosas para decorar sus hogares y puedan disfrutar aún más de
                    ellos.</p>
            </section>
            <section className="staff">
                <img src="img/nosotras.png" alt="Joha y Munchy"/>
            </section>
        </div>
    </main>
    )
}

export default NosotrosPage