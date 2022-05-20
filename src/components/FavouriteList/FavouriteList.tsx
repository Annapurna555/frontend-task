import React, {FC} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {DeleteFromFavourite} from "../DeleteFromFavourite/DeleteFromFavourite";
import {NavBar} from "../NavBar/NavBar";
import {DeleteAllFromFavourite} from "../DeleteAllFromFavourite/DeleteAllFromFavourite";
import {Footer} from "../Footer/Footer";

interface FavouriteList {
}

export const FavouriteList: FC<FavouriteList> = () => {
    const list: string[] = useSelector((state: RootState) => state.favouriteList)
    const isNotEmpty = list.length !== 0

    return (
        <div>{
            isNotEmpty ?
                <>
                    <NavBar/>
                    <h1>Your favourite characters list</h1>
                    <article className={"favourite-characters-list"}>
                        {list && list.map(v => {
                            return <DeleteFromFavourite url={v} key={v}/>
                        })}
                    </article>
                    {isNotEmpty && <DeleteAllFromFavourite/>}
                    <Footer/>
                </> : <>
                    <NavBar/>
                    <h1>Your favourite list is empty</h1>
                    <Footer/>
                </>
        }
        </div>
    )
}