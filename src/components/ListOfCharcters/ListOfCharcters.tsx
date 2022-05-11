import React, {FC, useEffect, useState} from 'react';
import {BASE_URL} from "../../API/BASE_URL";
import UnorderedList from "../UnorderedList/UnorderedList";
import ListItem from "../ListItem/ListItem";


interface ListOfCharctersProps {
}

interface UserProps {
    name: string
}

const ListOfCharcters: FC<ListOfCharctersProps> = () => {
    const [users, setUsers] = useState<UserProps[] | undefined>()

    useEffect(() => {
        async function getUsers() {
            const response = await fetch(`${BASE_URL}/people/`)
            const json = await response.json()
            setUsers(json.results)
        }

        getUsers()
    }, [])

    users && console.log(users)

    return (
        <div>
            <UnorderedList>
                {users && users.map(v => {
                    return <ListItem key={v.name} name={v.name}/>
                })}
            </UnorderedList>

        </div>
    )
};

export default ListOfCharcters;
