import Link from "next/link";
import './navStyle.css'
import { AccountCircle, Home } from "@mui/icons-material";
const NavComponent = () => {
    return (
        <nav className="navBar">
            <a className="itemLogo">Logo</a>
            <ul className="itemList">
                <li className="itemLi"><Link className="itemA" href="/"><Home/></Link></li>
                <li className="itemLi"><a className="itemA" href="#"><AccountCircle/></a></li>
            </ul>
        </nav>
    )
}

export default NavComponent;