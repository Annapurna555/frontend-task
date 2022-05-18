import React, {FC, useEffect, useState} from 'react';
import {BASE_URL} from "../../API/BASE_URL";
import UnorderedList from "../UnorderedList/UnorderedList";
import ListItem from "../ListItem/ListItem";
import {NavBar} from "../NavBar/NavBar";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

interface ListOfCharctersProps {
}

interface UserProps {
    name: string
    url: string
}

export const ListOfCharcters: FC<ListOfCharctersProps> = () => {
    const [users, setUsers] = useState<UserProps[] | undefined>()
    const [buttonNumber, setButtonNumber] = useState<string | undefined>("1")
    const [err, setErr] = useState(false)
    const [total, setTotal] = useState<string | null>();
    if (err) {
        throw err
    }

    useEffect(() => {
        async function getUsers() {
            const response = await fetch(`${BASE_URL}/people/?page=${buttonNumber}`)
            if (response.status === 200) {
                const json = await response.json()
                setUsers(json.results)
                setTotal(json.count)
            } else {
                setErr(true)
            }
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

    const createButtons = () => {
        const array = total && setNumberOfButtons(total)
        return (
            <>
                {array && array.map((v) => {
                        return <button onClick={buttonHandler} key={v} id={v}>{v}</button>
                    }
                )}
            </>
        )
    }

    const setNumberOfButtons = (totalCount: string) => {
        let buttonCount: string[] = []
        let amountOfButtons = (+totalCount / 10) + 1
        let counter = 1
        while (counter < amountOfButtons) {
            buttonCount.push("" + counter)
            counter++
        }
        return buttonCount
    }

    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const button = event.currentTarget as HTMLInputElement
        const value: string = button.id
        console.log(value)
        setButtonNumber(value)
    }

    return (
        <div>
            {
                <>
                    <NavBar/>
                    <input type="text" id="myInput" onKeyUp={handleSearchIntput} placeholder="Search for names.."/>
                    <UnorderedList>
                        {users && users.map(v => {
                            return <ListItem key={v.name} name={v.name} url={v.url}/>
                        })}
                    </UnorderedList>
                    {createButtons()}
                </>
            }
        </div>
    )
};

export const FullList = () => {
    return (
        <ErrorBoundary>
            <ListOfCharcters/>
        </ErrorBoundary>
    )
}


/*{buttonNumber && <PaginationButtons buttonNumber={buttonNumber}/>}*/