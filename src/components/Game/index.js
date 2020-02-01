import React from 'react'
import { connect } from 'react-redux'
import { Board } from '../board'
import Player from '../player'
import * as Sprites from '../sprites'
import * as Engine from '../../engine/engine'
import * as GameMap from '../../engine/map'

function Game(props) {
    console.log('Game Props', props)
    const layoutObj = []
    props.map.layout
        .map((row, y) => row.map((cell, x) => {
            if (cell == 1)
            {
                layoutObj.push({
                    sprit: Sprites.Tree,
                    x: x,
                    y: y
                })
            }
        }
        ))
    const gameObjects = [
        ...layoutObj,
        {
            sprit: Sprites.Player,
            x: props.player.position[0],
            y: props.player.position[1]
        }
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
                handlePlayerMovement={(newDirection) => {
                    if (Engine.isChangeNewMap(newDirection, props.map.layout, GameMap.map, props.map.position)){
                        console.log('Change map')
                        const newMapPos = Engine.getNewMapPos(newDirection, props.map.layout, GameMap.map, props.map.position)
                        props.updatePlayer(Engine.getNewPosOnMap(newDirection, props.map.layout, GameMap.map, props.map.position))
                        props.updateMap({
                            position: newMapPos,
                            layout: GameMap.map[newMapPos[1]][newMapPos[0]]
                        })
                    }
                    if (Engine.isValidNewPosition(newDirection, props.map.layout)){
                        props.updatePlayer(newDirection)
                    }}
                }
            />
            <Board objects={gameObjects} ></Board>

        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        updatePlayer: (player) => {
            dispatch({ type: "MOVE_PLAYER", payload: player })
        },
        updateMap: (map) => {
            dispatch({type: "CHANGE_MAP", payload: map})
        }
    }
}

function mapStateToProps(state, ownProps) {
    return {
        player: state.player,
        map: state.map
    }
}

const preparedApp = connect(mapStateToProps, mapDispatchToProps)(Game)

export default preparedApp
