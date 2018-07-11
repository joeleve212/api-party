import React, { Component } from 'react'
import { Route } from 'react-router-dom'

//import './PokemonInfo.css'
import Pokemon from './Pokemon'

class PokemonInfo extends Component {
  state = {
    pokeNum: '',
  }

  handleChange = ev => {
    this.setState({ pokeNum: ev.target.value })
  }

  handleSubmit = ev => {
    ev.preventDefault()
    this.props.history.push(`/PokemonInfo/${this.state.pokeNum}`)
  }

  render() {
    return (
      <div className="PokemonInfo">

        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              required
              autoFocus
              placeholder="Type Pokemon Number"
              type="text"
              value={this.state.pokeNum}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">
              Look up Pokemon
            </button>
          </div>
        </form>

        <Route
          path="/PokemonInfo/:pokeNum"
          component={Pokemon}
        />
      </div>
    )
  }
}

export default PokemonInfo