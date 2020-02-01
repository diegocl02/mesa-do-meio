import React from 'react'
import { connect } from 'react-redux'
import {Board} from '../board'
import Player from '../player'
import * as Sprites from '../sprites'

function Game(props) {
    const objects = [
        {
            sprit: Sprites.Tree,
            x: 0,
            y: 2
        },
        {
            sprit: Sprites.Tree,
            x: 0,
            y: 1
        },
        {
            sprit: Sprites.Tree,
            x: 1,
            y: 2
        },
        {
            sprit: Sprites.Tree,
            x: 13,
            y: 2
        },
        {
            sprit: Sprites.Tree,
            x: 14,
            y: 2
        },
        {
            sprit: Sprites.Player,
            x: props.player.position[0],
            y: props.player.position[1]
        },
    ]

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: '600px',
                height: '600px',
                margin: '20px auto',
                alignItems: 'center'
            }}>
            <Player 
                position={props.player.position} 
                handlePlayerMovement={(newDirection) => props.updatePlayer(newDirection)} 
            />      
            <Board objects={objects} ></Board>
            
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
