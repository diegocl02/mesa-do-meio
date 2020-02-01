import React, {Component} from 'react'
import { UP, DOWN, LEFT, RIGHT } from '../../helpers/constants'

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
        console.log(newDirection);
    }

    render() {
        return (
        <div>
            <img src="https://drive.google.com/open?id=1rZ2FCF5h-XtzsM-5lOrDo25ZETM1xHwn" alt="player"></img>
        </div>
        )
    }

    componentDidMount() {
        window.onkeydown = this.handleKeyDown;
    }
}

export default Player