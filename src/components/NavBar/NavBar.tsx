import {FC} from "react";
import {Link} from "react-router-dom";

interface NavBar {

}

export const NavBar: FC<NavBar> = () => {
    return (
        <nav className={"nav-bar"}>
            <Link className={"home"} to={"/"}>Home</Link>
            <Link to={"/favouriteList"}>Favourite List</Link>
            <Link to={"/characters"}>Characters</Link>
        </nav>
    )
}