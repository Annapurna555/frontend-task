import {FC} from "react";
import {Link} from "react-router-dom";

interface Home {

}

export const Home: FC<Home> = () => {
    return (
        <div className={"home"}>
            <h1>Welcome to star wars page</h1>
            <Link to={"/characters"}>Click here to get started</Link>
        </div>
    )
}