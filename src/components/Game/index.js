import React from 'react'
import { connect } from 'react-redux'
import { Board } from '../board'
import { Captions } from '../captions'
import Player from '../player'
import Audio from '../audio'
import * as Sprites from '../sprites'
import * as Engine from '../../engine/engine'
import * as GameMap from '../../engine/map'

function Game(props) {
    console.log('Game Props', props)
    const layoutObj = []
    props.map.layout
        .map((row, y) => row.map((cell, x) => {
            if (cell == 1) {
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
        },
        ...Object.keys(props.friends).map(key => props.friends[key])
            .filter(friend => friend.map[0] == props.map.position[0] && friend.map[1] == props.map.position[1])
            .map(friend => {
                return {
                    sprit: friend.sprit,
                    x: friend.position[0],
                    y: friend.position[1]
                }
            })
    ]
    //console.log('game objects', gameObjects)
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
            <Audio />
            <Player
                position={props.player.position}
                handlePlayerMovement={(newDirection) => {
                    let possibleFriend // Check if there is a possible friend close
                    if (possibleFriend = Engine.findCloseFriend(newDirection, Object.keys(props.friends).map(key => props.friends[key]), props.map)){
                        props.updateCaption(possibleFriend.name + ': ' + possibleFriend.text)
                        props.updatePlayer(newDirection)
                        props.updateFriend({...possibleFriend, wasSaved: true})
                    }
                    else if (Engine.isChangeNewMap(newDirection, props.map.layout, GameMap.map, props.map.position)) {
                        const newMapPos = Engine.getNewMapPos(newDirection, props.map.layout, GameMap.map, props.map.position)

                        props.updateCaption(0)
                        props.updatePlayer(Engine.getNewPosOnMap(newDirection, props.map.layout, GameMap.map, props.map.position))
                        props.updateMap({
                            position: newMapPos,
                            layout: GameMap.map[newMapPos[1]][newMapPos[0]]
                        })
                    }
                    else if (Engine.isValidNewPosition(newDirection, props.map, Object.keys(props.friends).map(key => props.friends[key]))) {
                        props.updateCaption(0)
                        props.updatePlayer(newDirection)
                    }
                }
                }
            />
            <Board objects={gameObjects} />
            <Captions text={props.caption || ""}  friends={props.friends}/>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        updatePlayer: (player) => {
            dispatch({ type: "MOVE_PLAYER", payload: player })
        },
        updateMap: (map) => {
            dispatch({ type: "CHANGE_MAP", payload: map })
        },
        updateCaption: (caption) => {
            dispatch({type: "UPDATE_CAPTION", payload: caption})
        },
        updateFriend: (friend) => {
            dispatch({ type: "UPDATE_FRIEND", payload: friend})
        }
    }
}

function mapStateToProps(state, ownProps) {
    return {
        player: state.player,
        map: state.map,
        caption: state.caption,
        friends: state.friends
    }
}

const preparedApp = connect(mapStateToProps, mapDispatchToProps)(Game)

export default preparedApp
