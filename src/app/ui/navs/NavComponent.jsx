import Link from "next/link";

const NavComponent = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand">Logo</a>
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link navbar-brand" href="#">Inicio</a></li>
                        <li className="nav-item"><a className="nav-link navbar-brand" href="#">Iniciar Sesión</a></li>
                        <li className="nav-item"><a className="nav-link navbar-brand" href="#">Registrarce</a></li>
                        <li className="nav-item"><Link href="/pages/passage-reservation" className="nav-link navbar-brand">Reservar</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavComponent;