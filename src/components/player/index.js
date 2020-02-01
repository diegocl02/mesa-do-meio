import React, {Component} from 'react'
import { UP, DOWN, LEFT, RIGHT } from '../../helpers/constants'
import spr_player from './spr_player.png'

class Player extends Component {
    getNewPosition(newDirection) {
        const oldPos = this.props.position
        switch(newDirection) {
            case 'RIGHT':
                return [oldPos[0] + 1, oldPos[1]]
            case 'LEFT':
                return [oldPos[0] - 1, oldPos[1]]
            case 'UP':
                return [oldPos[0], oldPos[1] - 1]
            case 'DOWN':
                return [oldPos[0], oldPos[1] + 1]
        }
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

        this.props.handlePlayerMovement(this.getNewPosition(newDirection));
    }

    render() {
        console.log('player', this.props.position)
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