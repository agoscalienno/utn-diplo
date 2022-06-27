import '../../styles/Layout.css'
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined}>JB INTERIORES</NavLink></li>
                    <li><NavLink to="/nosotros" className={({ isActive }) => isActive ? "activo" : undefined}>Nosotras</NavLink></li>
                    <li><NavLink to="/productos" className={({ isActive }) => isActive ? "activo" : undefined}>Productos</NavLink></li>
                    <li><NavLink to="/servicios" className={({ isActive }) => isActive ? "activo" : undefined}>Servicios</NavLink></li>
                    <li><NavLink to="/novedades" className={({ isActive }) => isActive ? "activo" : undefined}>Novedades</NavLink></li>
                    <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined}>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
