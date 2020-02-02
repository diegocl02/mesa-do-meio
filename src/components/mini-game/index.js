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
        const style0 = {
            height: "120px",
            width: "240px",
            backgroundSize: "240px",
            backgroundImage: `url(${spr_rabbitB})`,
            backgroundPosition: `120px 0px`
        }

        const style1 = {
            height: "240px",
            width: "240px",
            backgroundSize: "240px",
            backgroundImage: `url(${spr_rabbitB})`,
            backgroundPosition: `0px 0px`
        }
        return <div >
            <div style={{...style0}}></div>
            <div style={{...style1}}></div>
        </div>
    }
}