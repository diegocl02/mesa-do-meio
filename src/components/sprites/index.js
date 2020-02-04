import React from 'react'
import spr_grass from './img/spr_grass.png'
import spr_tree from './img/spr_tree.png'

import spr_player from './img/spr_player.png'
import spr_left from './img/spr_left.png'
import spr_right from './img/spr_right.png'
import spr_up from './img/spr_up.png'

import spr_dance from './img/spr_dance.png'
import spr_dance2 from './img/spr_dance2.png'

import spr_beaver from './img/spr_beaver.png'
import spr_beaver2 from './img/spr_beaver2.png'
import spr_fox from './img/spr_fox.png'
import spr_fox2 from './img/spr_fox2.png'
import spr_hedgehog from './img/spr_hedgehog.png'
import spr_hedgehog2 from './img/spr_hedgehog2.png'
import spr_rabbit from './img/spr_rabbit.png'
import spr_rabbit2 from './img/spr_rabbit2.png'
import spr_raccoon from './img/spr_raccoon.png'
import spr_raccoon2 from './img/spr_raccoon2.png'
import spr_frog from './img/spr_frog.png'
import spr_frog2 from './img/spr_frog2.png'
import spr_owl from './img/spr_owl.png'
import spr_owl2 from './img/spr_owl2.png'
import spr_squirrel from './img/spr_squirrel.png'
import spr_squirrel2 from './img/spr_squirrel2.png'
import spr_wolf from './img/spr_wolf.png'
import spr_wolf2 from './img/spr_wolf2.png'

import spr_note from './img/spr_note.png'

export const Grass = (props) => {
    return <img src={spr_grass} style={{...props.style}}></img>
} 

export const Note = (props) => {
    return <img src={spr_note} style={{...props.style}}></img>
} 

export const Tree = (props) => {
    return <img src={spr_tree} style={{...props.style}}></img>
} 

export const Player = (props) => {
    return <img src={spr_player} style={{...props.style}}></img>
}

export const PlayerLeft = (props) => {
    return <img src={spr_left} style={{...props.style}}></img>
}

export const PlayerRight = (props) => {
    return <img src={spr_right} style={{...props.style}}></img>
}

export const PlayerUp = (props) => {
    return <img src={spr_up} style={{...props.style}}></img>
}

export class Dance extends React.Component{
    constructor(props){
        super(props)
        this.state = {src: spr_dance}
    }
    animationTimer
    componentDidMount(){
        this.animationTimer = setInterval(() => {
            this.setState({src: this.state.src === spr_dance ? spr_dance2 : spr_dance})
        }, 500)
    }
    componentWillUnmount(){
        clearInterval(this.animationTimer)
    }
    render (){
        return <img src={this.state.src} style={{...this.props.style}}></img>
    }
}

export class Fox extends React.Component{
    constructor(props){
        super(props)
        this.state = {src: spr_fox}
    }
    animationTimer
    componentDidMount(){
        this.animationTimer = setInterval(() => {
            this.setState({src: this.state.src === spr_fox ? spr_fox2 : spr_fox})
        }, 500)
    }
    componentWillUnmount(){
        clearInterval(this.animationTimer)
    }
    render (){
        return <img src={this.state.src} style={{...this.props.style}}></img>
    }
}

export class Rabbit extends React.Component{
    constructor(props){
        super(props)
        this.state = {src: spr_rabbit}
    }
    animationTimer
    componentDidMount(){
        this.animationTimer = setInterval(() => {
            this.setState({src: this.state.src === spr_rabbit ? spr_rabbit2 : spr_rabbit})
        }, 500)
    }
    componentWillUnmount(){
        clearInterval(this.animationTimer)
    }
    render (){
        return <img src={this.state.src} style={{...this.props.style}}></img>
    }
} 

export class Racoon extends React.Component{
    constructor(props){
        super(props)
        this.state = {src: spr_raccoon}
    }
    animationTimer
    componentDidMount(){
        this.animationTimer = setInterval(() => {
            this.setState({src: this.state.src === spr_raccoon ? spr_raccoon2 : spr_raccoon})
        }, 500)
    }
    componentWillUnmount(){
        clearInterval(this.animationTimer)
    }
    render (){
        return <img src={this.state.src} style={{...this.props.style}}></img>
    }
}

export class Frog extends React.Component{
    constructor(props){
        super(props)
        this.state = {src: spr_frog}
    }
    animationTimer
    componentDidMount(){
        this.animationTimer = setInterval(() => {
            this.setState({src: this.state.src === spr_frog ? spr_frog2 : spr_frog})
        }, 500)
    }
    componentWillUnmount(){
        clearInterval(this.animationTimer)
    }
    render (){
        return <img src={this.state.src} style={{...this.props.style}}></img>
    }
}

export class Wolf extends React.Component{
    constructor(props){
        super(props)
        this.state = {src: spr_wolf}
    }
    animationTimer
    componentDidMount(){
        this.animationTimer = setInterval(() => {
            this.setState({src: this.state.src === spr_wolf ? spr_wolf2 : spr_wolf})
        }, 500)
    }
    componentWillUnmount(){
        clearInterval(this.animationTimer)
    }
    render (){
        return <img src={this.state.src} style={{...this.props.style}}></img>
    }
}

export class Owl extends React.Component{
    constructor(props){
        super(props)
        this.state = {src: spr_owl}
    }
    animationTimer
    componentDidMount(){
        this.animationTimer = setInterval(() => {
            this.setState({src: this.state.src === spr_owl ? spr_owl2 : spr_owl})
        }, 500)
    }
    componentWillUnmount(){
        clearInterval(this.animationTimer)
    }
    render (){
        return <img src={this.state.src} style={{...this.props.style}}></img>
    }
}

export class Beaver extends React.Component{
    constructor(props){
        super(props)
        this.state = {src: spr_beaver}
    }
    animationTimer
    componentDidMount(){
        this.animationTimer = setInterval(() => {
            this.setState({src: this.state.src === spr_beaver ? spr_beaver2 : spr_beaver})
        }, 500)
    }
    componentWillUnmount(){
        clearInterval(this.animationTimer)
    }
    render (){
        return <img src={this.state.src} style={{...this.props.style}}></img>
    }
}

export class Hedgehog extends React.Component{
    constructor(props){
        super(props)
        this.state = {src: spr_hedgehog}
    }
    animationTimer

    componentDidMount(){
        this.animationTimer = setInterval(() => {
            this.setState({src: this.state.src === spr_hedgehog ? spr_hedgehog2 : spr_hedgehog})
        }, 500)
    }

    componentWillUnmount(){
        clearInterval(this.animationTimer)
    }
    render (){
        return <img src={this.state.src} style={{...this.props.style}}></img>
    }
}

export class Squirrel extends React.Component{
    constructor(props){
        super(props)
        this.state = {src: spr_squirrel}
    }
    animationTimer
    componentDidMount(){
        this.animationTimer = setInterval(() => {
            this.setState({src: this.state.src === spr_squirrel ? spr_squirrel2 : spr_squirrel})
        }, 500)
    }
    componentWillUnmount(){
        clearInterval(this.animationTimer)
    }
    render (){
        return <img src={this.state.src} style={{...this.props.style}}></img>
    }
}
