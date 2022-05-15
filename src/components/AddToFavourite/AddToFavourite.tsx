import React, {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from '../../app/store'
import addToFavourite from '../../actionCreators/addToFavourite'

interface AddToFavourite {
    name: string
}


export const AddToFavourite: FC<AddToFavourite> = ({name}) => {
    const list = useSelector((state: RootState) => state.favouriteList)
    console.log(list)
    const dispatch = useDispatch()


    return <button onClick={(e) => {
        dispatch(addToFavourite(name))
    }}>+</button>
}