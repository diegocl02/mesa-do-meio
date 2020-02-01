import React from 'react'
import * as Sprites from '../sprites'
import '../App.css';

export class Board extends React.Component {
    static defaultProps = {
        width: 16,
        height: 16,
        objects: [{
            sprit: Sprites.Tree,
            x: 0,
            y: 0
        }]
    }
    render() {
        return <div>
            {
                Array.from(Array(this.props.height))
                    .map((y, yIndex) => {
                        return <div className={"board-row"}>
                            {Array.from(Array(this.props.width))
                                .map((x, xIndex) => {
                                    const obj = this.props.objects.filter(obj => obj.x == xIndex && obj.y == yIndex)[0]
                                    const Sprit = obj ? obj.sprit : Sprites.Grass
                                    
                                    return <span><Sprit></Sprit></span>
                                })}
                        </div>
                    })
            }
        </div>
    }
}