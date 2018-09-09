import React, {Component} from 'react';

import './App.css';
import {CustomHeader} from "./components/CustomHeader";
import PokemonGetter from "./components/PokemonGetter";



class App extends Component {
    render() {
        return (
            <div className="App">
                <CustomHeader/>
                <div className="content-container">
                    <PokemonGetter/>

                </div>
            </div>
        );
    }
}

export default App;
