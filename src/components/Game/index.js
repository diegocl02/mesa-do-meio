import React from 'react'
import { connect } from 'react-redux'
import { Board } from '../board'
import { Captions } from '../captions'
import Player from '../player'
import { 
    Audio, 
    RabbitTrack, 
    FrogTrack, 
    WolfTrack, 
    RacoonTrack, 
    FoxTrack,
    OwlTrack, 
    BeaverTrack,
    HedgehogTrack,
    SquirrelTrack,
    FinalTrack 
} from '../audio'
import * as Sprites from '../sprites'
import * as Engine from '../../engine/engine'
import * as GameMap from '../../engine/map'

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stopWalkingForLastMessage: true,
            hasSentLastMessage: false
        }
    }
    render() {
        const props = this.props
        // const layoutObj = []
        // props.map.layout
        //     .map((row, y) => row.map((cell, x) => {
        //         if (cell == 1) {
        //             layoutObj.push({
        //                 sprit: Sprites.Tree,
        //                 x: x,
        //                 y: y
        //             })
        //         }
        //     }))
        const gameObjects = [
            // ...layoutObj,
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

        const hasWon = !(Object.keys(props.friends).map(key => props.friends[key])
            .some(friend => friend.wasSaved == false))
        if (hasWon) {
            if (this.state.hasSentLastMessage === false) {
                setTimeout(() => {
                    this.setState({ hasSentLastMessage: true, stopWalkingForLastMessage : false })
                    props.updateCaption('Você salvo a tudos seus amigos, volte a casa para comemorar')
                }, 5000)
            }
        }

        if (this.state.stopWalkingForLastMessage == false) {
            setTimeout(() => { 
                this.setState({ stopWalkingForLastMessage: true })
                this.props.celebrate()
            }, 5000)
        }

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
                {props.friends.rabbit.wasSaved ? <RabbitTrack /> : <Audio />}
                {props.friends.wolf.wasSaved ? <WolfTrack /> : <Audio />}
                {props.friends.frog.wasSaved ? <FrogTrack /> : <Audio />}
                {props.friends.fox.wasSaved ? <FoxTrack /> : <Audio />}
                {props.friends.racoon.wasSaved ? <RacoonTrack /> : <Audio />}
                {props.friends.owl.wasSaved ? <OwlTrack /> : <Audio />}
                {props.friends.beaver.wasSaved ? <BeaverTrack /> : <Audio />}
                {props.friends.hedgehog.wasSaved ? <HedgehogTrack /> : <Audio />}
                {props.friends.squirrel.wasSaved ? <SquirrelTrack /> : <Audio />}
                {hasWon ? <FinalTrack /> : <Audio />}
                <Player
                    position={props.player.position}
                    handlePlayerMovement={(newDirection) => {
                        if (this.state.stopWalkingForLastMessage) {
                            let possibleFriend // Check if there is a possible friend close

                            // Check if we find a friend
                            if (possibleFriend = Engine.findCloseFriend(newDirection, Object.keys(props.friends).map(key => props.friends[key]), props.map)) {
                                props.updateCaption(possibleFriend.name + ': ' + possibleFriend.text)
                                props.updatePlayer(newDirection)
                                props.updateFriend({ ...possibleFriend, wasSaved: true })
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
                    }
                />
                <Board objects={gameObjects} mapPosition={props.map.position}/>
                <Captions text={props.caption || ""} friends={props.friends} />
            </div>
        )
    }
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
            dispatch({ type: "UPDATE_CAPTION", payload: caption })
        },
        updateFriend: (friend) => {
            dispatch({ type: "UPDATE_FRIEND", payload: friend })
        },
        celebrate: () => {
            dispatch({ type: "CELEBRATE" })
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
