import React, {FC} from 'react';
import {Link} from "react-router-dom";


interface ListItemProps {
    name: string
    url: string
}


const ListItem: FC<ListItemProps> = ({name, url}) => (
    <li><Link to={`/details/character`} state={{url: `${url}`}}>{name}</Link></li>
);

export default ListItem;
