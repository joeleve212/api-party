import React, { Component } from 'react'
import { Route } from 'react-router-dom'

//import './PokemonInfo.css'
import Pokemon from './Pokemon'

class PokemonInfo extends Component {
  
  constructor(){
    super()
    this.currentNum = 2
    this.state = {
      pokemon: '',
    }
  }

  handleChange = ev => {
    this.setState({ pokemon: ev.target.value })
  }

  handleSubmit = ev => {
    ev.preventDefault()
    this.currentNum = this.state.pokemon
    this.props.history.push(`/pokemon/${this.state.pokemon}`)
  }
  
  moveUp = ev =>{
    this.setState({ pokemon: this.currentNum })
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
            <button onClick={this.moveUp}>
              Next Pokemon
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