import React from 'react'
import spr_grass from './img/spr_grass.png'
import spr_tree from './img/spr_tree.png'
import spr_player from './img/spr_player.png'
import spr_fox from './img/spr_fox.png'
import spr_fox2 from './img/spr_fox2.png'
import spr_rabbit from './img/spr_rabbit.png'
import spr_rabbit2 from './img/spr_rabbit2.png'
import spr_raccoon from './img/spr_raccoon.png'
import spr_raccoon2 from './img/spr_raccoon2.png'
import spr_frog from './img/spr_frog.png'
import spr_frog2 from './img/spr_frog2.png'
import spr_owl from './img/spr_owl.png'
import spr_owl2 from './img/spr_owl2.png'
import spr_wolf from './img/spr_wolf.png'
import spr_wolf2 from './img/spr_wolf2.png'

export const Grass = (props) => {
    return <img src={spr_grass} style={{...props.style}}></img>
} 

export const Tree = (props) => {
    return <img src={spr_tree} style={{...props.style}}></img>
} 

export const Player = (props) => {
    return <img src={spr_player} style={{...props.style}}></img>
}

export class Fox extends React.Component{
    constructor(props){
        super(props)
        this.state = {src: spr_fox}
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({src: this.state.src === spr_fox ? spr_fox2 : spr_fox})
        }, 500)
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
    componentDidMount(){
        setInterval(() => {
            this.setState({src: this.state.src === spr_rabbit ? spr_rabbit2 : spr_rabbit})
        }, 500)
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
    componentDidMount(){
        setInterval(() => {
            this.setState({src: this.state.src === spr_raccoon ? spr_raccoon2 : spr_raccoon})
        }, 500)
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
    componentDidMount(){
        setInterval(() => {
            this.setState({src: this.state.src === spr_frog ? spr_frog2 : spr_frog})
        }, 500)
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
    componentDidMount(){
        setInterval(() => {
            this.setState({src: this.state.src === spr_wolf ? spr_wolf2 : spr_wolf})
        }, 500)
    }
    render (){
        return <img src={this.state.src} style={{...this.props.style}}></img>
    }
}
