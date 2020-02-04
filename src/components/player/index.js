import React, { Component } from 'react'

class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: window.innerWidth
        }
    }
    getNewPosition(newDirection) {
        const oldPos = this.props.position
        switch (newDirection) {
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

        switch (e.keyCode) {
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
        this.props.handleKeyPressed(newDirection)
        this.props.handlePlayerMovement(this.getNewPosition(newDirection));
    }

    render() {
        //console.log('player', this.props.position)
        return this.state.width < 800
            ? <div key="com" className={"commands"}>
                <div key="box" className={"button-box"}>

                    <div key="le" className={"button left"} onClick={(e) => {
                        e.preventDefault()
                        this.props.handleKeyPressed("LEFT")
                        this.props.handlePlayerMovement(this.getNewPosition("LEFT"));
                    }}> {`◄`} </div>

                    <div key="co" style={{ display: "flex", flexDirection: "column" }}>
                        <div key="up" className={"button up"} onClick={(e) => {
                            e.preventDefault()
                            this.props.handleKeyPressed("UP")
                            this.props.handlePlayerMovement(this.getNewPosition("UP"));
                        }}> {`▲`} </div>
                        <div key="do" className={"button down"} onClick={(e) => {
                            e.preventDefault()
                            this.props.handleKeyPressed("DOWN")
                            this.props.handlePlayerMovement(this.getNewPosition("DOWN"));
                        }}> {`▼`} </div>

                    </div>
                    <div key="ri" className={"button right"} onClick={(e) => {
                        e.preventDefault()
                        this.props.handleKeyPressed("RIGHT")
                        this.props.handlePlayerMovement(this.getNewPosition("RIGHT"));
                    }}> {`►`} </div>
                </div>

                <div key="ent" className={"button enter"}> Enter </div>
            </div>
            : null
}

componentDidMount() {
    window.onkeydown = this.handleKeyDown;
}
}

export default Player