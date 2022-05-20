import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import addToFavourite from '../../actionCreators/addToFavourite'

interface AddToFavourite {
    url: string
}

export const AddToFavourite: FC<AddToFavourite> = ({url}) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(addToFavourite(url))
    }

    return (
        <div className={"add-to-favourite"}>
            <button onClick={handleClick}>+</button>
        </div>

    )
}
