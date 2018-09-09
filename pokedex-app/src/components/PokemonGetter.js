import React, {Component} from 'react';
import * as httpWorker from '../utils/RestApiWorker.js'
import {Observable, Observer} from 'rxjs'
import {Pokemon} from "./Pokemon";



export default class PokemonGetter extends Component {
    state = {};

    componentDidMount() {
        let subscription = httpWorker.httpGetUrl('http://localhost:8080/').subscribe({
            next: pokemonData => this.setState({pokemonData}),
            complete: pokemonData => console.log('[complete]'),
        });
    }
    pokemonList = (data) => {
        const listElementsOfPokemonComponents = data.map((pokemon) => {
            return <li><Pokemon pokemon={pokemon}/></li>
        });

        return <ul>{listElementsOfPokemonComponents}</ul>
    }


    render() {
        return (
            <div>
                <h3>{
                    this.state.pokemonData ?
                        this.pokemonList(this.state.pokemonData) : "No Pokemons here"
                }</h3>
            </div>
        )
    }

}