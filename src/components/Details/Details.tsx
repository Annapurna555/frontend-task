import React, {FC, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";


interface DetailsProps {
}

interface Person {
    url: string
}

const Details: FC<DetailsProps> = () => {
    const location = useLocation()
    const state = location.state as Person
    const {url} = state
    const [name, setName] = useState<string | undefined>();
    useEffect(() => {

        (async () => {
            const response = await fetch(`${url}`)
            const json = await response.json()
            setName(json.name)
        })()
    })
    return (
        <>
            <div>
                <h2>details of {name}</h2> not implemented yet
            </div>
        </>
    );
}
export default Details;
