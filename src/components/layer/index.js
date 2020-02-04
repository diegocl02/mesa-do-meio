import React from 'react'
import * as Sprites from '../sprites'


export class Layer extends React.Component{
    static defaultProps = {
        blockSize: 30,
        width: 16,
        height: 16,
        objects: [
            {
                sprit: Sprites.Grass,
                x: 0,
                y: 2
            }
        ]
    }
    render() {
        return <div style={{ position: "absolute" }}>
            {
                Array.from(Array(this.props.height))
                    .map((y, yIndex) => {
                        return <div className={"board-row"} key={"board" + yIndex}>
                            {Array.from(Array(this.props.width))
                                .map((x, xIndex) => {
                                    const obj = this.props.objects.filter(obj => obj.x == xIndex && obj.y == yIndex)[0]
                                    const Sprit = obj ? obj.sprit : null
                                    return <span key={"cell" + xIndex}>{obj
                                        ? <Sprit style={{ width: this.props.blockSize }}></Sprit>
                                        : <div style={{ width: this.props.blockSize, height:this.props.blockSize, display: "inline-block" }}></div>}
                                    </span>
                                })}
                        </div>
                    })
            }
        </div>
    }
}