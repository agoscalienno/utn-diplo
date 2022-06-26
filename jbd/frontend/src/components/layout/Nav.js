import { Link } from "react-router-dom"


const Nav = (props) => {
    return (
        <nav>
        <div class="holder">
            <ul>
                <li><Link to="/" className="activo">JB INTERIORES</Link></li>
                <li><Link to="/nosotros">Nosotras</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
                <li><Link to="/novedades">Novedades</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
        </div>
    </nav>
    );
}

export default Nav;