
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "../actions/actions-types";
import axios from "axios";
export function addFavorites(character) {
    return function(dispatch) {
        axios.post("http://localhost:3001/rick_and_morty/fav")
            .then((resp) => {
                return dispatch({
                    type: ADD_FAV,
                    payload: resp.data
                })
            })
    } 
}

export function removeFavorites(id) {
    return function(dispatch) {
        axios.post(`http://localhost:3001/rick_and_morty/fav/${id}`)
            .then((resp) => {
                return dispatch({
                   type: REMOVE_FAV,
                   payload: resp.data
                })
        })
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