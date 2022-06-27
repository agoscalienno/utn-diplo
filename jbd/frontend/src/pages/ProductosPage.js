import '../styles/ProductosPage.css'
import React from "react";

const ProductosPage = (props) => {
    return (
        <main className="holder productos">
            <h2>Nuestros Productos</h2>
            <div className="velas">
                <h3>Velas</h3>
                <p>Nuestras velas están hechas de cera de soja, por lo que son naturales y ecológicas. Al terminarse la
                    cera, sus frascos pueden ser reutilizables. Tenemos gran variedad de fragancias ideales para
                    decorar,
                    aromatizar y armonizar los ambientes.</p>
                <ul>
                    <li>Rosa</li>
                    <li>Coco y Vainilla</li>
                    <li>Cítricos</li>
                    <li>Manzana y Canela</li>
                    <li>Te Verde</li>
                    <li>Lavanda</li>
                    <li>Fresia</li>
                    <li>Flores Blancas</li>
                    <li>Jazmín</li>
                    <li>Vainilla Sugar</li>
                    <li>Violeta</li>
                </ul>
                <div className="modelos">
                    <div className="modelo-individual">
                        <h4>Ambar</h4>
                        <img src="img/vela-ambar-2.JPG" alt="Ambar"/>
                    </div>
                    <div className="modelo-individual">
                        <h4>Jaspe</h4>
                        <img src="img/vela-jaspe-2.JPG" alt="Jaspe"/>
                    </div>
                    <div className="modelo-individual">
                        <h4>Onix</h4>
                        <img src="img/vela-onix.JPG" alt="Onix"/>
                    </div>
                    <div className="modelo-individual">
                        <h4>Oro</h4>
                        <img src="img/vela-oro.JPG" alt="Oro"/>
                    </div>
                    <div className="modelo-individual">
                        <h4>Turmalina</h4>
                        <img src="img/vela-turmalina-1.JPG" alt="Turmalina"/>
                    </div>
                </div>
            </div>
            <div className="almohadones">
                <h3>Almohadones</h3>
                <p>Hechos con tussor 100% algodón, rellenos de vellón siliconado premium, con o sin cierre. Medidas: 40x40,
                    50x50, 60x40, 60x60, 50x70. Hay varios colores para elegir y combinar.</p>
                <ul>
                    <li>Gris Perla</li>
                    <li>Azul</li>
                    <li>Terracota</li>
                    <li>Verde Militar</li>
                    <li>Crudo</li>
                    <li>Rayado</li>
                </ul>
                <div className="modelos">
                    <div className="modelo-varios">
                        <h4>Paris</h4>
                        <img src="img/alm-paris-azul.JPG" alt=""/>
                            <img src="img/alm-paris-verde.JPG" alt=""/>
                                <img src="img/alm-paris-terr.JPG" alt=""/>


                                </div>
                            </div>
                    </div>
                </main>
                )
}

                export default ProductosPage