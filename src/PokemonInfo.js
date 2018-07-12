import React, { Component } from 'react'
import { Route } from 'react-router-dom'

//import './PokemonInfo.css'
import Pokemon from './Pokemon'

class PokemonInfo extends Component {
  state = {
    pokemon: '',
  }

  handleChange = ev => {
    this.setState({ pokemon: ev.target.value })
  }

  handleSubmit = ev => {
    ev.preventDefault()
    this.props.history.push(`/pokemon/${this.state.pokemon}`)
  }

  render() {
    return (
      <div className="PokemonInfo">

        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              required
              autoFocus
              placeholder="Type Pokemon Name or Number"
              type="text"
              value={this.state.pokemon}
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
          path="/pokemon/:pokemon"
          component={Pokemon}
        />
      </div>
    )
  }
}

export default PokemonInfo