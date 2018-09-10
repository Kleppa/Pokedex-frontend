import {filter, mapTo, map, mergeMap} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';
import {GET_REQUEST} from "../action/ActionTypes";
import {ofType} from "redux-observable";
import {fetchPokemonFullfilled} from "../action/GetEndpoint";
import {Observable} from 'rxjs'

export const pullEpic = action$ => {
    console.log("epic",action$)

    return action$.pipe(
        ofType(GET_REQUEST),
        mergeMap(action =>
            ajax.getJSON(action.payload)
           .pipe(
            map(response => {
                fetchPokemonFullfilled(response)
            })
        )
        ))
};
