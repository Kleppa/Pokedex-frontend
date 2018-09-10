import React, {Component} from 'react';
import * as httpWorker from '../utils/RestApiWorker.js'
import {Observable, Observer} from 'rxjs'
import {Pokemon} from "./Pokemon";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchPokemonFullfilled} from "../redux/action/GetEndpoint";


class PokemonGetter extends Component {
    state = {};

    componentDidMount() {

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
function mapStateToProps(state) {
    return {pokemonData:state.pokedex}
    
}
export default connect(mapStateToProps,{fetchPokemonFullfilled})(PokemonGetter)