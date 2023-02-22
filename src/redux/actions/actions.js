import { type } from "@testing-library/user-event/dist/type";
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "../actions/actions-types";

export function addFavorites(character) {
    return {
        type: ADD_FAV,
        payload: character
    }
}

export function removeFavorites(id) {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

export function filterCards(gender) {
    return {
        type : FILTER,
        payload : gender
    }
}

export function orderCards(id) {
    return {
        type : ORDER,
        payload : id
    }
    
}