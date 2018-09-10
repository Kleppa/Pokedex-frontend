import React, {Component} from 'react';

import './App.css';
import {CustomHeader} from "./components/CustomHeader";
import PokemonGetter from "./components/PokemonGetter";
import {pullEpic} from "./redux/epic/pullerEpic";
import {combineEpics} from 'redux-observable';
import { Provider } from 'react-redux'
import {createEpicMiddleware} from "redux-observable";

import {createStore, applyMiddleware} from 'redux'

import * as reducers from "./redux/reducer/combinedReducers.js";
import {UPDATE_POKEDEX_STATE} from "./redux/action/ActionTypes";

const epicCombined = combineEpics(pullEpic);
const middleware = createEpicMiddleware();
const store = createStore(
    reducers.reducers,
    applyMiddleware(middleware)
);
middleware.run(epicCombined);

store.dispatch({type:UPDATE_POKEDEX_STATE,payload:"http://localhost:8080/"});
class App extends Component {
    render() {

        return (
            <Provider store ={store}>
            <div className="App">
                <CustomHeader/>
                <div className="content-container">
                    <PokemonGetter/>

                </div>
            </div>
            </Provider>
        );

    }
}

export default App;
