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
                allCharacters : [...state.allCharacters,payload]
            }
        case REMOVE_FAV :
            const filter = state.myFavorites.filter((id) => {
                return id !== payload
            })
            return {
                ...state,
                myFavorites : filter
            }
        case FILTER :
            const filtered = state.allCharacters.filter((e) => {
                return e.gender === payload
            })
            return{
                ...state,
                myFavorites : filtered
            }
        case ORDER :
            return {
                ...state,
                myFavorites :
                    payload === "Ascendente"
                    ?  state.allCharacters.sort((a,b) => a.id - b.id)
                    : state.allCharacters.sort((a,b) => b.id - a.id)
            }        
        default:
            return {
                ...state
            }
            
    }
}