import Link from "next/link";

const NavComponent = () => {
    return (
        <>
            <nav>
                <h1 className="itemLogo">Logo</h1>
                <ul className="itemUl">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Iniciar Sesión</a></li>
                    <li><a href="#">Registrarce</a></li>
                    <li><Link href="/pages/pasaje-reserv">Reservar</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default NavComponent;