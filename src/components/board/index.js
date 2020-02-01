import React from 'react'
import * as Sprites from '../sprites'
import { Layer } from '../layer'
import '../../App.css';

export class Board extends React.Component {
    static defaultProps = {
        blockSize: 30,
        width: 20,
        height: 11,
        objects: [
            {
                sprit: Sprites.Tree,
                x: 0,
                y: 2
            },
            {
                sprit: Sprites.Tree,
                x: 0,
                y: 1
            },
            {
                sprit: Sprites.Tree,
                x: 1,
                y: 2
            },
            {
                sprit: Sprites.Tree,
                x: 13,
                y: 2
            },
            {
                sprit: Sprites.Tree,
                x: 14,
                y: 2
            },
        ]
    }

    terrainLayer() {
        return <div style={{ position: "absolute" }}>
            {
                Array.from(Array(this.props.height))
                    .map((y, yIndex) => {
                        return <div className={"board-row"}>
                            {Array.from(Array(this.props.width))
                                .map((x, xIndex) => {
                                    const Sprit = Sprites.Grass
                                    return <span><Sprit style={{ width: this.props.blockSize }}></Sprit></span>
                                })}
                        </div>
                    })
            }
        </div>
    }
    
    render() {
        return <div className={"board"}>
            {
                [
                    this.terrainLayer(),
                    <Layer {...this.props} ></Layer>
                ]
            }
        </div>
    }
}