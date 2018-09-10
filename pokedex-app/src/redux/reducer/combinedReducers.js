import {combineReducers} from 'redux'
import pokedexReducer from "./pokedexReducer";

export const reducers = combineReducers({
    pokedex: pokedexReducer
});