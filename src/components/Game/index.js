import React from 'react'
import { connect } from 'react-redux'
import { Board } from '../board'
import { Captions } from '../captions'
import { Credits } from '../credits'
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
import { MiniGame } from '../mini-game'

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stopWalkingForLastMessage: true,
            hasSentLastMessage: false,
            gameState: "title", // "title" | "intro" | "play" | "ending" | "credits"
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
            {
                sprit: this.state.gameState === "ending" ? Sprites.Dance : spritePlayer,
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
                }, 5500)
            }
        }
        if (this.state.hasSentLastMessage == true && this.state.gameState !== "ending" && this.state.gameState !== "credits") {
            setTimeout(() => {
                props.celebrate()
                this.setState({ gameState: "ending" })
                setTimeout(() => {
                    this.setState({ gameState: "credits" })
                }, 12000)
            }, 5000)
        }
        let caption = props.caption
        if (this.state.gameState == "intro" || this.state.gameState == "title") {
            switch (this.state.introIndex) {
                case 0: {
                    caption = 'Use Arrows to move, enter to interact';
                    break;
                }
                case 1: {
                    caption = 'I finally have some time off!';
                    break;
                }
                case 2: {
                    caption = 'I like the city life.'
                    break;
                }
                case 3: {
                    caption = "But there's nothing like the fresh air!"
                    break;
                }
                case 4: {
                    caption = 'This place feels like a second home.'
                    break;
                }
                case 5: {
                    caption = "There's always music in the air."
                    break;
                }
                case 6: {
                    caption = 'But what we build can sometimes cost the planet.'
                    break;
                }
                case 7: {
                    caption = 'I will try to restore the sound of nature.'
                    break;
                }
            }
        }
        if (this.state.gameState == "ending")
            caption = 0

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

                {this.state.gameState == "intro" || this.state.gameState == "title" ? <Intro /> : <Audio />}
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
                {this.state.gameState !== "mini-game" ? <Player
                    position={props.player.position}
                    handleKeyPressed={
                        (direction) => {
                            if (this.state.gameState == "playing") {
                                this.setState({
                                    playerPos: direction
                                })
                            }
                            if (this.state.gameState == "title") {
                                if (direction == "RIGHT")
                                    this.setState({
                                        introIndex: this.state.introIndex + 1, gameState: "intro"
                                    })
                            }
                            if (this.state.gameState == "intro" && this.state.introIndex >= 0 && this.state.introIndex < 7) {
                                if (direction == "RIGHT")
                                    this.setState({
                                        introIndex: this.state.introIndex + 1
                                    })
                                if (direction == "LEFT" && this.state.introIndex > 0)
                                    this.setState({
                                        introIndex: this.state.introIndex - 1
                                    })
                            }
                            else if (this.state.gameState == "intro" && this.state.introIndex == 7) {
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
                                props.updateCaption(possibleFriendSaved.name + ': Help me solving the puzzle')
                                props.updatePlayer(newDirection)

                                // Start miniGame
                                this.setState({ friend: possibleFriendSaved, gameState: "mini-game" })
                            }
                            else if (Engine.isChangeNewMap(newDirection, props.map.layout, GameMap.map, props.map.position)) {
                                const newMapPos = Engine.getNewMapPos(newDirection, props.map.layout, GameMap.map, props.map.position)

                                props.updatePlayer(Engine.getNewPosOnMap(newDirection, props.map.layout, GameMap.map, props.map.position))
                                props.updateMap({
                                    position: newMapPos,
                                    layout: GameMap.map[newMapPos[1]][newMapPos[0]]
                                })
                            }
                            else if (Engine.isValidNewPosition(newDirection, props.map, Object.keys(props.friends).map(key => props.friends[key]))) {
                                props.updatePlayer(newDirection)
                            }

                        }
                    }}
                />
                    : null
                }
                {
                    this.state.gameState === "intro" || this.state.gameState === "title"
                        ? <Introduction currentSlide={this.state.introIndex} ></Introduction>
                        : this.state.gameState != "credits"
                            ? <Board objects={gameObjects} mapPosition={props.map.position} />
                            : null
                }
                {
                    this.state.gameState != "credits"
                        ? <Captions
                            text={caption || ""}
                            friends={props.friends}
                            type={this.state.gameState == "title" ? "normal" : "effect"}
                            onTypeDone={() => {
                                if (this.state.gameState != "mini-game")
                                    props.updateCaption(0)
                            }}
                        />
                        : null
                }
                {
                    this.state.gameState == "mini-game"
                        ? <div style={{ position: "absolute", top: "60px" }}>
                            <MiniGame friend={this.state.friend} win={() => {
                                let possibleFriendSaved = { ...this.state.friend, wasSaved: true }
                                props.updateFriend(possibleFriendSaved)
                                props.updateCaption(possibleFriendSaved.name + ': ' + possibleFriendSaved.text)
                                setTimeout(() => this.setState({ gameState: "playing" }), 1000)
                                setTimeout(() => this.friendToHome(possibleFriendSaved), 2000)
                            }}></MiniGame>
                        </div>
                        : null
                }
                {
                    this.state.gameState == "credits"
                        ? <Credits playAgain={() => {
                            this.setState({
                                stopWalkingForLastMessage: true,
                                hasSentLastMessage: false,
                                gameState: "title", 
                                introIndex: 0,
                                playerPos: "DOWN"
                            })
                            props.resetGame()
                        }} />
                        : null
                }
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
        resetGame: () => {
            dispatch({ type: "RESET_GAME" })
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
