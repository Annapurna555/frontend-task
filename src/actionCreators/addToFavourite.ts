export default function addToFavourite(list: string) {
    return {type: "ADD_TO_FAVOURITE", payload: list};
}
