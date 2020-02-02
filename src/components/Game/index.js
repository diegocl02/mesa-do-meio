import React from 'react'
import { connect } from 'react-redux'
import { Board } from '../board'
import { Captions } from '../captions'
import Player from '../player'
import { Introduction } from '../introduction'
import {
    Intro,
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
            hasSentLastMessage: false,
            gameState: "intro", // "intro" | "play" | "ending"
            introIndex: 0,
            playerPos: "DOWN"
        }
    }
    friendToHome(friend) {
        let friendInt = setInterval(() => {
            let posX = this.props.friends[friend.key].position[0]
            let posY = this.props.friends[friend.key].position[1]

            if (posX >= 0 && posY >= 0 && posY <= this.props.map.layout.length && posX <= this.props.map.layout[0].length) {
                let pos = Engine.findFriendNextPosition(this.props.friends[friend.key])
                this.props.updateFriend({
                    ...friend, position: pos
                })
            }
            else
                clearTimeout(friendInt)
        }, 700)
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
        const hasWon = !(Object.keys(props.friends).map(key => props.friends[key])
            .some(friend => friend.wasSaved == false))

        let spritePlayer = this.state.playerPos == "RIGHT"
            ? Sprites.PlayerRight
            : this.state.playerPos == "LEFT"
                ? Sprites.PlayerLeft
                : this.state.playerPos == "UP"
                    ? Sprites.PlayerUp
                    : Sprites.Player
        const gameObjects = [
            // ...layoutObj,
            {
                sprit: hasWon ? Sprites.Dance : spritePlayer,
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

        if (hasWon) {
            if (this.state.hasSentLastMessage === false) {
                setTimeout(() => {
                    this.setState({ hasSentLastMessage: true, stopWalkingForLastMessage: false })
                    props.updateCaption("You saved all your friends and restored nature's music. Go celebrate!")
                }, 5000)
            }
        }

        if (this.state.stopWalkingForLastMessage == false) {
            setTimeout(() => {
                this.setState({ stopWalkingForLastMessage: true })
                this.props.celebrate()
            }, 5000)
        }
        let caption = props.caption
        if (this.state.gameState == "intro") {
            switch (this.state.introIndex) {
                case 0: {
                    caption = 'I finally have some time off!';
                    break;
                }
                case 1: {
                    caption = 'I like the city life.'
                    break;
                }
                case 2: {
                    caption = "But there's nothing like the fresh air!"
                    break;
                }
                case 3: {
                    caption = 'This place feels like a second home.'
                    break;
                }
                case 4: {
                    caption = "There's always music in the air."
                    break;
                }
                case 5: {
                    caption = 'But what we build can sometimes cost the planet.'
                    break;
                }
                case 6: {
                    caption = 'I will try to restore the sound of nature.'
                    break;
                }
            }
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

                {this.state.gameState == "intro" ? <Intro /> : <Audio />}
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
                    handleKeyPressed={
                        (direction) => {
                            if (this.state.gameState == "playing") {
                                this.setState({
                                    playerPos: direction
                                })
                            }
                            if (this.state.gameState == "intro" && this.state.introIndex >= 0 && this.state.introIndex < 6) {
                                if (direction == "RIGHT")
                                    this.setState({
                                        introIndex: this.state.introIndex + 1
                                    })
                                if (direction == "LEFT" && this.state.introIndex > 0)
                                    this.setState({
                                        introIndex: this.state.introIndex - 1
                                    })
                            }
                            else if (this.state.gameState == "intro" && this.state.introIndex == 6) {
                                this.setState({
                                    gameState: "playing"
                                })
                            }
                        }
                    }
                    handlePlayerMovement={(newDirection) => {
                        if (this.state.gameState == "playing" && this.state.stopWalkingForLastMessage) {
                            let possibleFriendSaved // Check if there is a possible friend close

                            // Check if we find a friend
                            if (possibleFriendSaved = Engine.findCloseFriend(newDirection, Object.keys(props.friends).map(key => props.friends[key]), props.map)) {
                                props.updateCaption(possibleFriendSaved.name + ': ' + possibleFriendSaved.text)
                                props.updatePlayer(newDirection)
                                possibleFriendSaved = { ...possibleFriendSaved, wasSaved: true }
                                props.updateFriend(possibleFriendSaved)
                                setTimeout(() => this.friendToHome(possibleFriendSaved), 1000)
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
                {
                    this.state.gameState == "intro"
                        ? <Introduction currentSlide={this.state.introIndex} ></Introduction>
                        : <Board objects={gameObjects} mapPosition={props.map.position} />
                }
                <Captions
                    text={caption || ""}
                    friends={props.friends}
                    type={this.state.gameState == "intro"
                        ? "normal"
                        : "effect"} />

                {/* Experimental */}
                <button onClick={() => props.experimental()}> Experimental </button>
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
        },
        experimental: () => {
            dispatch({ type: "EXPERIMENTAL" })
        },
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
