import React, {FC} from 'react';


interface UnorderedListProps {
    children: React.ReactNode
}

const UnorderedList: FC<UnorderedListProps> = ({children}) => (
    <ul>{children}</ul>
);

export default UnorderedList;
