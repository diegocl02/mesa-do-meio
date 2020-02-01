import React, {Component} from 'react'
import { UP, DOWN, LEFT, RIGHT } from '../../helpers/constants'
import spr_player from './spr_player.png'
import store from '../../config/store'

class Player extends Component {
    getNewPosition(newDirection) {
        const oldPos = store.getState().player.position
        switch(newDirection) {
            case 'RIGHT':
                return [oldPos[0] - 16, oldPos[1]]
            case 'LEFT':
                return [oldPos[0] + 16, oldPos[1]]
            case 'UP':
                return [oldPos[0], oldPos[1] - 16]
            case 'DOWN':
                return [oldPos[0], oldPos[1] + 16]
        }
    }

    dispatchMove(newDirection) {

        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: this.getNewPosition(newDirection)
            }
        })
    }

    handleKeyDown = (e) => {
        e.preventDefault()
        let newDirection;
        
        switch(e.keyCode) {
            case 37:
                newDirection = ('LEFT');
                break;
            case 38:
                newDirection = ('UP');
                break;
            case 39:
                newDirection = ('RIGHT')
                break;
            case 40:
                newDirection = ('DOWN');
                break;
            default:
                return;
        }

        this.props.handlePlayerMovement();
        console.log(newDirection)
    }

    render() {
        return (
            <div
                style={{
                    position: "absolute",
                    top: '5px',
                    left: '5px',
                    width: '16px',
                    height: '16px',
                    backgroundImage: `url(${spr_player})`
                }}
            />
        )
    }

    componentDidMount() {
        window.onkeydown = this.handleKeyDown;
    }
}

export default Player