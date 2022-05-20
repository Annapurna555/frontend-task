import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {AddToFavourite} from "../AddToFavourite/AddToFavourite";

interface ListItemProps {
    name: string
    url: string
}

const ListItem: FC<ListItemProps> = ({name, url}) => (
    <li>
        <div className={"characters-list-element"}>
            <Link to={`/details`} state={{url: `${url}`}}>{name}</Link>
            <AddToFavourite url={url}/>
        </div>
    </li>
);

export default ListItem;
