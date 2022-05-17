import {FC} from "react";
import {Link} from "react-router-dom";

interface NavBar {

}

export const NavBar: FC<NavBar> = () => {
    return (
        <div>
            <Link to={"/favouriteList"}>Favourite List</Link>
            <Link to={"/"}>Characters</Link>
        </div>
    )

}