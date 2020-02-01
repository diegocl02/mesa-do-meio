import React from 'react'
import { connect } from 'react-redux'
import {Board} from '../../board'
import Player from '../player'

function Game(props) {
    return (
        <div
            style={{
                position: 'relative',
                width: '600px',
                height: '600px',
                margin: '20px auto',
                background: 'green'
            }}
        >
            <Player 
                position={props.player.position} 
                handlePlayerMovement={(newDirection) => props.updatePlayer(newDirection)} 
            />      
            <Board></Board>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        updatePlayer: (player) => {
            dispatch({ type: "MOVE_PLAYER", payload: player })
        }
    }
  }
  
  function mapStateToProps(state, ownProps) {
    return {
        player: state.player
    }
  }
  
  const preparedApp = connect(mapStateToProps, mapDispatchToProps)(Game)
  
  export default preparedApp
