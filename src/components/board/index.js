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
        return <div key="terrain" style={{ position: "absolute" }}>
            {
                Array.from(Array(this.props.height))
                    .map((y, yIndex) => {
                        return <div className={"board-row"} key={"board-row-" + yIndex}>
                            {Array.from(Array(this.props.width))
                                .map((x, xIndex) => {
                                    const Sprit = Sprites.Grass
                                    return <span key={"board-cell" + xIndex}><Sprit style={{ width: this.props.blockSize }}></Sprit></span>
                                })}
                        </div>
                    })
            }
        </div>
    }
    mapFromPng() {
        return <div key="pngmap" style={{ position: "absolute" }}>
            <img
                style={{ width: `${this.props.width * this.props.blockSize}px`, height: `${this.props.height * this.props.blockSize}px`}}
                src={GameMap.mapPng[this.props.mapPosition[1]][this.props.mapPosition[0]]}>
            </img>
        </div>
    }
    render() {
        return <div className={"board"} key={"board-main"}>
            {
                [
                    this.terrainLayer(),
                    this.mapFromPng(),
                    <Layer key="elements" {...this.props} > </Layer>
                ]
            }
        </div>
    }
}