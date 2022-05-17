import {FC, useLayoutEffect, useState} from "react";
import deleteFromFavourite from "../../actionCreators/deleteFromFavourite";
import {useDispatch} from "react-redux";
import {Modal} from "../../Modal/Modal";

interface DeleteFromFavourite {
    url: string
}

interface Characters {
    name: string,
    height: string,
    mass: string

}

export const DeleteFromFavourite: FC<DeleteFromFavourite> = ({url}) => {
    const [modal, setModal] = useState(false)
    const [character, setCharacter] = useState<Characters | null>()
    const [isDataFetch, setIsDataFetch] = useState(false)
    const dispatch = useDispatch()

    useLayoutEffect(() => {

        (async () => {
            const request = await fetch(url)
            const json = await request.json()
            setCharacter(json)
            setIsDataFetch(true)

        })()
    }, [])
    const handleClick = () => {
        setModal(!modal)
    }
    return (
        <div>
            {isDataFetch &&
                <div className={"deleteCharacter"}>
                    <h2>{character && character.name}</h2>
                    <button onClick={handleClick}><span className={"text"}>delete</span></button>
                </div>
            }
            {modal ? (
                <Modal>
                    <div>
                        <h1>Do you want to add character to your favourite list?</h1>
                        <div className={"buttons"}>
                            <button onClick={() => {
                                dispatch(deleteFromFavourite(url))
                                setModal(!modal)
                            }}>yes
                            </button>
                            <button onClick={handleClick}>no</button>
                        </div>
                    </div>
                </Modal>
            ) : null}
        </div>
    )
}