import React, { Component } from 'react';
import './App.css';
import Messages from './Messages'
import TheDate from './state/TheDate'
import Counter from './state/Counter'
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb'
import RoulettGun from './state-drills/RouletteGun'

class App extends Component {
  render() {
    return(
      <div>
        <HelloWorld />
        <Bomb />
        <RouletteGun />
      </div>
    );
  }
}
export default App;