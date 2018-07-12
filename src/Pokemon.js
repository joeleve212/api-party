import React, { Component } from 'react'
//import PokemonInfo from './PokemonInfo';

class Pokemon extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: {},
      error: null
    }

    this.fetchpokemonData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pokemon !== this.props.match.params.pokemon) {
      this.fetchpokemonData()
    }
  }

  fetchpokemonData = () => {
    const { pokemon } = this.props.match.params
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
      .then(response => response.json())
      .then(pokemon => this.setState({ pokemon }))
  }

  render() {
    return (
      <div className="Pokemon">
        <p>{this.state.pokemon.name}</p>
        {this.state.pokemon.sprites && (
        <img
          src={ this.state.pokemon.sprites.front_default }
          alt={this.state.pokemon.name}
        />)
        }
      </div>
    )
  }
}

export default Pokemon