import React from 'react'
import spr_grass from './img/spr_grass.png'
import spr_tree from './img/spr_tree.png'

export const Grass = (props) => {
    return <img src={spr_grass} style={{...props.style}}></img>
} 

export const Tree = (props) => {
    return <img src={spr_tree} style={{...props.style}}></img>
} 
