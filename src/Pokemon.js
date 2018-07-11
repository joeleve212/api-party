import React, { Component } from 'react'
import PokemonInfo from './PokemonInfo';

class Pokemon extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {}
    }

    this.fetchUserData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pokeNum !== this.props.match.params.pokeNum) {
      this.fetchUserData()
    }
  }

  fetchUserData = () => {
    const { pokeNum } = this.props.match.params
    fetch(`http://pokeapi.co/api/v2/pokemon/${pokeNum}`)
      .then(response => response.json())
      .then(user => this.setState({ user }))
  }

  render() {
    return (
      <div className="Pokemon">
        <img
          src={ this.state.user.avatar_url }
          alt={this.state.user.login}
        />
      </div>
    )
  }
}

export default Pokemon