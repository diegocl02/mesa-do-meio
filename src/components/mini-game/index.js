import React from 'react'
import spr_rabbitB from './img/spr_rabbitB.png'

export class MiniGame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: [0, 0],
            isSelected: false,
            mapa: this.generateRandomMap(),
            win: false
        }
    }
    static defaultProps = {
        src: spr_rabbitB,
        width : 600
    }

    generateRandomMap() {
        let numbers = []
        let map = []

        for (let i = 0; i < 3; i++) {
            let row = []
            for (let j = 0; j < 3; j++) {
                while (1) {
                    let n = Math.floor(Math.random() * Math.floor(9))
                    if (!numbers.includes(n)) {
                        numbers.push(n)
                        row.push(n)
                        break;
                    }
                }
            }
            map.push(row)
        }
        return map
    }

    generateStyle(position) {
        const posx = position[0] * 80
        const posy = position[1] * 80

        return {
            height: "80px",
            width: "80px",
            backgroundSize: "240px",
            backgroundImage: `url(${this.props.friend.src || this.props.src})`,
            backgroundPosition: `-${posx}px -${posy}px`
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
        if (this.state.win == false) {
            let posx = this.state.current[0]
            let posy = this.state.current[1]

            switch (e.keyCode) {
                case 37:
                    {
                        // Left
                        if (this.state.current[0] > 0) {
                            this.setState({ current: [posx - 1, posy] })
                            if (this.state.isSelected) {
                                let newMap = [...this.state.mapa]
                                let tmp = newMap[posy][posx]

                                newMap[posy][posx] = newMap[posy][posx - 1]
                                newMap[posy][posx - 1] = tmp
                                let isWin = this.checkWinner(newMap)
                                this.setState({
                                    mapa: newMap,
                                    win: isWin
                                })
                                if (isWin) {
                                    this.props.win()
                                }
                            }
                        }
                        break;
                    }
                case 38: {
                    // up
                    if (this.state.current[1] > 0) {
                        this.setState({ current: [this.state.current[0], this.state.current[1] - 1] })
                        if (this.state.isSelected) {
                            let newMap = [...this.state.mapa]
                            let tmp = newMap[posy][posx]

                            newMap[posy][posx] = newMap[posy - 1][posx]
                            newMap[posy - 1][posx] = tmp
                            let isWin = this.checkWinner(newMap)
                            this.setState({
                                mapa: newMap,
                                win: isWin
                            })
                            if (isWin) {
                                this.props.win()
                            }
                        }
                    }
                    break;
                }
                case 39: {
                    // right
                    if (this.state.current[0] < 2) {
                        this.setState({ current: [this.state.current[0] + 1, this.state.current[1]] })
                        if (this.state.isSelected) {
                            let newMap = [...this.state.mapa]
                            let tmp = newMap[posy][posx]

                            newMap[posy][posx] = newMap[posy][posx + 1]
                            newMap[posy][posx + 1] = tmp
                            let isWin = this.checkWinner(newMap)
                            this.setState({
                                mapa: newMap,
                                win: isWin
                            })
                            if (isWin) {
                                this.props.win()
                            }
                        }
                    }
                    break;
                }
                case 40: {
                    // down
                    if (this.state.current[1] < 2) {
                        this.setState({ current: [this.state.current[0], this.state.current[1] + 1] })
                        if (this.state.isSelected) {
                            let newMap = [...this.state.mapa]
                            let tmp = newMap[posy][posx]

                            newMap[posy][posx] = newMap[posy + 1][posx]
                            newMap[posy + 1][posx] = tmp
                            let isWin = this.checkWinner(newMap)

                            this.setState({
                                mapa: newMap,
                                win: isWin
                            })
                            if (isWin) {
                                this.props.win()
                            }
                        }
                    }
                    break;
                }
                case 13: {
                    this.setState({ isSelected: this.state.isSelected ? false : true })
                    break;
                }
                default:
                    return;
            }
        }
    }

    checkWinner(mapa) {
        const val = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8]
        ]
        return mapa.toString() == val.toString()
    }

    render() {
        let posx = this.state.current[0]
        let posy = this.state.current[1]
        const arrayOfTiles = [
            <div style={this.generateStyle([0, 0])}></div>,
            <div style={this.generateStyle([1, 0])}></div>,
            <div style={this.generateStyle([2, 0])}></div>,
            <div style={this.generateStyle([0, 1])}></div>,
            <div style={this.generateStyle([1, 1])}></div>,
            <div style={this.generateStyle([2, 1])}></div>,
            <div style={this.generateStyle([0, 2])}></div>,
            <div style={this.generateStyle([1, 2])}></div>,
            <div style={this.generateStyle([2, 2])}></div>,
        ]
        console.log(this.state)

        return <div >
            {this.state.mapa.map((row, y) => <div key={"row" + y} style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                {row.map((cell, x) =>
                    <div key={"row" + x} style={{
                        border: x == this.state.current[0] && y == this.state.current[1]
                            ? `solid 2px ${this.state.isSelected ? `blue` : `red`}`
                            : 'solid 2px gray'
                    }}>
                        {arrayOfTiles[cell]}
                    </div>
                )}
            </div>)}

            {this.props.width < 800
                ? <div key={"controls"}>
                    {
                        <div className={"commands"} style={{top: "150px"}}>
                            <div key="box" className={"button-box"}>

                                <div key="left" className={"button left"} onClick={() => {
                                    if (this.state.current[0] > 0) {
                                        this.setState({ current: [posx - 1, posy] })
                                        if (this.state.isSelected) {
                                            let newMap = [...this.state.mapa]
                                            let tmp = newMap[posy][posx]

                                            newMap[posy][posx] = newMap[posy][posx - 1]
                                            newMap[posy][posx - 1] = tmp
                                            let isWin = this.checkWinner(newMap)
                                            this.setState({
                                                mapa: newMap,
                                                win: isWin
                                            })
                                            if (isWin) {
                                                this.props.win()
                                            }
                                        }
                                    }
                                }}> {`◄`} </div>

                                <div key="col" style={{ display: "flex", flexDirection: "column" }}>
                                    <div key="up" className={"button up"} onClick={() => {
                                        if (this.state.current[1] > 0) {
                                            this.setState({ current: [this.state.current[0], this.state.current[1] - 1] })
                                            if (this.state.isSelected) {
                                                let newMap = [...this.state.mapa]
                                                let tmp = newMap[posy][posx]

                                                newMap[posy][posx] = newMap[posy - 1][posx]
                                                newMap[posy - 1][posx] = tmp
                                                let isWin = this.checkWinner(newMap)
                                                this.setState({
                                                    mapa: newMap,
                                                    win: isWin
                                                })
                                                if (isWin) {
                                                    this.props.win()
                                                }
                                            }
                                        }
                                    }}> {`▲`} </div>
                                    <div key="down" className={"button down"} onClick={() => {
                                        if (this.state.current[1] < 2) {
                                            this.setState({ current: [this.state.current[0], this.state.current[1] + 1] })
                                            if (this.state.isSelected) {
                                                let newMap = [...this.state.mapa]
                                                let tmp = newMap[posy][posx]

                                                newMap[posy][posx] = newMap[posy + 1][posx]
                                                newMap[posy + 1][posx] = tmp
                                                let isWin = this.checkWinner(newMap)

                                                this.setState({
                                                    mapa: newMap,
                                                    win: isWin
                                                })
                                                if (isWin) {
                                                    this.props.win()
                                                }
                                            }
                                        }
                                    }}> {`▼`} </div>

                                </div>
                                <div key="ri" className={"button right"} onClick={() => {
                                    if (this.state.current[0] < 2) {
                                        this.setState({ current: [this.state.current[0] + 1, this.state.current[1]] })
                                        if (this.state.isSelected) {
                                            let newMap = [...this.state.mapa]
                                            let tmp = newMap[posy][posx]

                                            newMap[posy][posx] = newMap[posy][posx + 1]
                                            newMap[posy][posx + 1] = tmp
                                            let isWin = this.checkWinner(newMap)
                                            this.setState({
                                                mapa: newMap,
                                                win: isWin
                                            })
                                            if (isWin) {
                                                this.props.win()
                                            }
                                        }
                                    }
                                }}> {`►`} </div>
                            </div>

                            <div key="ent" className={"button enter"} onClick={() => {
                                this.setState({ isSelected: this.state.isSelected ? false : true })
                            }}> Enter </div>
                        </div>
                    }
                </div>
                : null
            }
        </div>
    }

    componentDidMount() {
        window.onkeydown = this.handleKeyDown;
    }
}