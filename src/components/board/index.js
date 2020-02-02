import React from 'react'
import * as Sprites from '../sprites'
import { Layer } from '../layer'
import '../../App.css';
import * as GameMap from '../../engine/map'

export class Board extends React.Component {
    static defaultProps = {
        blockSize: 30,
        width: 20,
        height: 11,
        objects: [],
        mapPosition: [0, 0]
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

    mapFromPng() {
        return <div style={{ position: "absolute" }}>
            <img
                style={{ width: `${this.props.width * this.props.blockSize}px` }}
                src={GameMap.mapPng[this.props.mapPosition[1]][this.props.mapPosition[0]]}>
            </img>
        </div>
    }

    render() {
        return <div className={"board"}>
            {
                [
                    this.terrainLayer(),
                    // this.mapFromPng(),
                    <Layer {...this.props} > </Layer>
                ]
            }
        </div>
    }
}