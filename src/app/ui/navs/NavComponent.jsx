import Link from "next/link";

import { AccountCircle, Home } from "@mui/icons-material";
const NavComponent = () => {
    return (
        <nav className="h-24 flex justify-around">
            <Link href="/"><Home viewBox="0 0 20 20" /></Link>
            <a href="#"><AccountCircle viewBox="0 0 20 20"/></a>
        </nav>
    )
}

export default NavComponent;