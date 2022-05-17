export default function deleteFromFavourite(list: string) {
    return {type: "DELETE_FROM_FAVOURITE", payload: list};
}