import {PayloadAction} from "@reduxjs/toolkit";

export default function favouriteList(state: string[] = [], action: PayloadAction) {
    const unique = (value: string | void, index: number, self: (string | void)[]) => {
        return self.indexOf(value as string) === index
    }
    switch (action.type) {
        case "ADD_TO_FAVOURITE":
            return [...state, action.payload].filter(unique)
        case "DELETE_FROM_FAVOURITE":
            return state.filter(e => e !== action.payload as unknown as string)
        case "DELETE_ALL_FROM_FAVOURITE":
            return state = []
        default:
            return state
    }
}