import Link from "next/link";

import { AccountCircle, Home } from "@mui/icons-material";

const NavComponent = () => {
    return (
        <nav className="flex justify-evenly dark:bg-gray-700 h-1/2">
            <Link href="/" className="m-4"><Home viewBox="0 0 20 20" sx={{color:"white"}}/></Link>
            <a href="#" className="m-4"><AccountCircle viewBox="0 0 22 22" sx={{color:"white"}}/></a>
        </nav>
    )
}

export default NavComponent;