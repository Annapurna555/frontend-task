import React, {useEffect} from 'react';

function FastFetch() {


    useEffect(() => {
        const abc = async () => {
            const response = await fetch(`https://swapi.dev/api/people/?page=9`)
            const json = await response.json()
            console.log(json)
            return json
        }
        abc()
    })
    return (
        <div></div>
    );
}

export default FastFetch;