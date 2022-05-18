import React, {FC} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {DeleteFromFavourite} from "../DeleteFromFavourite/DeleteFromFavourite";
import {NavBar} from "../NavBar/NavBar";
import {DeleteAllFromFavourite} from "../DeleteAllFromFavourite/DeleteAllFromFavourite";

interface FavouriteList {
}


export const FavouriteList: FC<FavouriteList> = () => {
    const list: string[] = useSelector((state: RootState) => state.favouriteList)
    return (
        <div>
            <NavBar/>
            <h1>Your favourite characters</h1>
            {list && list.map(v => {
                return <DeleteFromFavourite url={v} key={v}/>
            })}
            <DeleteAllFromFavourite/>
        </div>
    )
}