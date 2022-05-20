import React, {FC, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {AddToFavourite} from "../AddToFavourite/AddToFavourite";
import {NavBar} from "../NavBar/NavBar";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import {Footer} from "../Footer/Footer";


interface DetailsProps {
}

interface Person {
    url: string
}

interface Character {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    birth_year: string
    gender: string,
    homeWorld: string
}

export const Details: FC<DetailsProps> = () => {
    const location = useLocation()
    const state = location.state as Person
    const [character, setCharacter] = useState<Character | undefined>();
    const [place, setPlace] = useState<string | undefined>()
    const [homeworldValue, setHomeworldValue] = useState<string | undefined>()
    const [error, setError] = useState(false)
    let url: string = ""

    if (state) {
        url = state.url
    } else {
        throw error
    }

    if (error) {
        throw error
    }

    useEffect(() => {
        (async () => {
            const response = await fetch(`${url}`)
            if (response.status === 200) {
                const text = await response.text()
                const json = JSON.parse(text)
                setCharacter(json)
                setHomeworldValue(json.homeworld)
            } else {
                setError(true)
            }
        })()
    }, [])

    useEffect(() => {
        (async () => {
            const response = await fetch(`${homeworldValue}`)
            if (response.status === 200) {
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    const json = await response.json()
                    setPlace(json.name)
                } else {
                    return
                }
            } else {
                setError(true)
            }
        })()

    }, [homeworldValue])

    return (
        <>
            <section>
                {
                    character && place && <div>
                        <NavBar/>
                        <h2>Details about {character.name}</h2>
                        <div className={"details"}>
                            <h2>Name: {character.name}</h2>
                            <h2>Height: {character.height}</h2>
                            <h2>Mass: {character.mass}</h2>
                            <h2>Hair Color: {character.hair_color}</h2>
                            <h2>Skin Color: {character.skin_color}</h2>
                            <h2>Birth of year: {character.birth_year}</h2>
                            <h2>Gender: {character.gender}</h2>
                            {homeworldValue && <h2>Homeworld: {place}</h2>}
                            <AddToFavourite url={url}/>
                        </div>
                        <Footer/>
                    </div>
                }
            </section>
        </>
    );
}

export const DetailsErrorBoundary = () => {
    return (
        <ErrorBoundary>
            <Details/>
        </ErrorBoundary>
    )
}
