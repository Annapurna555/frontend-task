import React, {FC, useEffect, useState} from 'react';
import {BASE_URL} from "../../API/BASE_URL";
import UnorderedList from "../UnorderedList/UnorderedList";
import ListItem from "../ListItem/ListItem";


interface ListOfCharctersProps {
    buttonNumber: string
}

interface UserProps {
    name: string
    url: string
}


const ListOfCharcters: FC<ListOfCharctersProps> = ({buttonNumber}) => {
    const [users, setUsers] = useState<UserProps[] | undefined>()


    useEffect(() => {
        async function getUsers() {
            const response = await fetch(`${BASE_URL}/people/?page=${buttonNumber}`)
            const json = await response.json()
            setUsers(json.results)

        }

        getUsers()
    }, [buttonNumber])


    function handleSearchIntput() {
        let input = document.getElementById('myInput') as HTMLInputElement;
        let filter: string | null = input.value.toUpperCase()
        let ul = document.getElementById("myUL");
        let li = ul && ul.getElementsByTagName('li');
        if (li) {
            for (let i = 0; i < li.length; i++) {
                let a = li[i].getElementsByTagName("a")[0];
                let txtValue = a.textContent || a.innerText;
                if (txtValue.toUpperCase().indexOf(filter as string) > -1) {
                    li[i].style.display = ""
                } else {
                    li[i].style.display = "none"
                }
            }
        }
    }

    return (
        <div>
            <input type="text" id="myInput" onKeyUp={handleSearchIntput} placeholder="Search for names.."/>
            <UnorderedList>
                {users && users.map(v => {

                    return <ListItem key={v.name} name={v.name} url={v.url}/>
                })}
            </UnorderedList>

        </div>
    )
};

export default ListOfCharcters;
