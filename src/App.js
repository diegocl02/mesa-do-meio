import React from 'react';
import './App.css';
import Test from './test'
import { connect } from 'react-redux'
import {Board} from './board'

import Player from "./components/player"

function App(props) {
  console.log(props)
  return (
    <div className="App">
      {"Just testing..."}
      <Player position={props.player.position} handlePlayerMovement={(newDirection) => props.updatePlayer(newDirection)} />
      {/* <Test></Test> */}
      <Board></Board>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
      updatePlayer: (player) => {
          dispatch({ type: "UPDATE_PLAYER", payload: player })
      }
  }
}

function mapStateToProps(state, ownProps) {
  return {
      player: state.player
  }
}

const preparedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default preparedApp
