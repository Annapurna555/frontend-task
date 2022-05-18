import {FC} from "react";
import {Link} from "react-router-dom";

interface NotFound {

}

export const NotFound: FC<NotFound> = () => {
    return (
        <div>
            <p>404 - Page not fount</p>
            <Link to={"/"}>Go to home</Link>
        </div>
    )

}