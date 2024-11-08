import Link from "next/link";
import "./navBar.css";
export default function NavBar() {
    return (
        <>
            <nav>
                <h1 className="itemLogo">Logo</h1>
                <ul className="itemUl">
                    <li><Link href="/pages/comprar-pasaje">Comprar Pasaje</Link></li>
                    <li><Link href="">Iniciar Sesion</Link></li>
                    <li><Link href=""></Link></li>
                </ul>
            </nav>
        </>
    )
}