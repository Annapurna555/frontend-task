import React, {FC} from 'react';


interface ListItemProps {
    name: string
}

const ListItem: FC<ListItemProps> = ({name}) => (
    <li>{name}</li>
);

export default ListItem;
