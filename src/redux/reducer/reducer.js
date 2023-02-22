import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "../actions/actions-types";

const initialState = {
    myFavorites : [],
    allCharacters : []
}

export default function reducer(state = initialState, {type, payload}) {
    switch (type) {
        case ADD_FAV :
            return {
                ...state,
                myFavorites : [...state.allCharacters, payload],
                allCharacters : [...state.allCharacters, payload]
            }
        case REMOVE_FAV :
            return {
                ...state,
                myFavorites : state.myFavorites.filter((element) => element.id !== payload)
            }
        case FILTER :
            const filtered = state.allCharacters.filter((e) => {
                return e.gender !== payload
            })
            return{
                ...state,
                allCharacters : filtered
            }
        case ORDER :
            return {
                
            }        
        default:
            return {
                ...state
            }
            
    }
}