import React from 'react'

import './Homework.css'

const Homework = () => {
  return (
    <div className="Homework">
      <h2>And now... <em>your</em> turn!</h2>
      
      <p>In case you don't have a favorite API, here are some suggestions:</p>

      <ul>
        <li><a href="https://developers.google.com/maps/">Google Maps (https://developers.google.com/maps)</a></li>
        <li><a href="https://pokeapi.co">The Pokéapi (https://pokeapi.co)</a></li>
        <li><a href="https://openweathermap.org/api">OpenWeatherMap (https://openweathermap.org/api)</a></li>
        <li><a href="https://developer.spotify.com/web-api/">Spotify (https://developer.spotify.com/web-api/)</a></li>
      </ul>
    </div>
  )
}

export default Homework