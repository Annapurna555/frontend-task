import {FC} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {DeleteFromFavourite} from "../DeleteFromFavourite/DeleteFromFavourite";

interface FavouriteList {
}


export const FavouriteList: FC<FavouriteList> = () => {
    const list: string[] = useSelector((state: RootState) => state.favouriteList)
    return (
        <div>
            <h1>Your favourite characters</h1>
            {list && list.map(v => {
                return <DeleteFromFavourite url={v} key={v}/>
            })}
        </div>
    )
}