
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

export function filterCards(status) {
    return {
        type : FILTER,
        payload : status
    }
}

export function orderCards(id) {
    return {
        type : ORDER,
        payload : id
    }
    
}