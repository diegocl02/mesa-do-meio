import React from 'react'
import { connect } from 'react-redux'
import {Board} from '../board'
import Player from '../player'

function Game(props) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: '600px',
                height: '600px',
                margin: '20px auto',
                alignItems: 'center'
            }}
        >
            {/* <Player 
            position={props.player.position} 
            handlePlayerMovement={(newDirection) => props.updatePlayer(newDirection)} 
            /> */}
            <Board></Board>
            
        </div>
    )
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
  
  const preparedApp = connect(mapStateToProps, mapDispatchToProps)(Game)
  
  export default preparedApp
