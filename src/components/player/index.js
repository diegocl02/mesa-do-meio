import React, {Component} from 'react'
import { UP, DOWN, LEFT, RIGHT } from '../../helpers/constants'
import spr_player from './spr_player.png'

class Player extends Component {
    // constructor(props) {
    //     this.state= {
    //         direction: newDirection
    //     }
    // }

    handleKeyDown = (e) => {
        let newDirection;
        
        switch(e.keyCode) {
            case 37:
                newDirection = { top: 0, left: -1 , dir: LEFT};
                break;
            case 38:
                newDirection = { top: -1, left: 0 , dir: UP};
                break;
            case 39:
                newDirection = { top: 0, left: 1, dir: RIGHT};
                break;
            case 40:
                newDirection = { top: 1, left: 0, dir: DOWN };
                break;
            default:
                return;
        }

        this.props.handlePlayerMovement(newDirection);
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