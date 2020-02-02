import React from 'react'
import spr_rabbitB from './img/spr_rabbitB.png'

export class MiniGame extends React.Component {
    generateStyle(position){
        const posx = position[0] * 80
        const posy = position[1] * 80
        return {
            height: "80px",
            width: "80px",
            backgroundSize: "240px",
            backgroundImage: `url(${spr_rabbitB})`,
            backgroundPosition: `-${posx}px -${posy}px`
        }
    }
    render(){
        
        return <div >
            <div style={ this.generateStyle([0,0])}></div>
            <div style={this.generateStyle([1,0])}></div>
            <div style={this.generateStyle([2,0])}></div>
            <div style={this.generateStyle([0,1])}></div>
            <div style={this.generateStyle([1,1])}></div>
            <div style={this.generateStyle([2,1])}></div>
            <div style={this.generateStyle([0,2])}></div>
            <div style={this.generateStyle([1,2])}></div>
            <div style={this.generateStyle([2,2])}></div>
        </div>
    }
}