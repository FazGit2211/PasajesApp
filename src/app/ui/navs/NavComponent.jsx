import Link from "next/link";
import './navStyle.css'
const NavComponent = () => {
    return (
        <nav className="navBar">
            <a className="itemLogo">Logo</a>
            <ul className="itemList">
                <li className="itemLi"><a className="itemA" href="#">Inicio</a></li>
                <li className="itemLi"><a className="itemA" href="#">Iniciar Sesión</a></li>
                <li className="itemLi"><a className="itemA" href="#">Registrarce</a></li>
                <li className="itemLi"><Link href="/pages/passage-reservation" className="itemA">Reservar</Link></li>
            </ul>
        </nav>
    )
}

export default NavComponent;