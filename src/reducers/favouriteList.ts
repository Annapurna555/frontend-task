import {PayloadAction} from "@reduxjs/toolkit";

export default function favouriteList(state: string[] = [], action: PayloadAction) {
    const unique = (value: string | void, index: number, self: (string | void)[]) => {
        return self.indexOf(value as string) === index
    }
    switch (action.type) {
        case "ADD_TO_FAVOURITE":
            return [...state, action.payload].filter(unique)
        default:
            return state
    }
}