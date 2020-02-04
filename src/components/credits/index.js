import React from 'react'
import Typist from 'react-typist';
import * as Sprites from '../sprites'

export const Credits = function (props) {
    return <div >
        <Typist
            key={props.text}
            avgTypingDelay={35}
            startDelay={30}
            className={"credits captions-border"}
            cursor={{ hideWhenDone: true, show: false }}
        >
            <div style={{ padding: "10px 10px 30px" }}>Credits: </div>
            <Typist.Delay ms={1000} />
            <div>Developers and Game Design:</div>
            <div style={{ padding: "10px 10px 20px", fontWeight: "normal" }}>Rodrigo de Mello, Diego Cisneros. </div>
            <Typist.Delay ms={1000} />
            <div>Art and Design:</div>
            <div style={{ padding: "10px 10px 20px", fontWeight: "normal" }}>Rafael Batista de Lima.</div>
            <Typist.Delay ms={1000} />
            <div>Music and Sound:</div>
            <div style={{ padding: "10px 10px 20px", fontWeight: "normal" }}>Victor 'Vic Birth' Nascimento</div>

            <Typist.Delay ms={1000} />
            <div style={{ padding: "10px" }}> THANKS FOR PLAYING!!!!!!</div>
            <Sprites.Racoon style={{ width: "50px" }} />

            <Typist.Delay ms={3500} />
            <div 
                style={{ border: "thin solid white", margin: "10px", padding: "5px", cursor: "pointer" }}
                onClick={() => props.playAgain()}> 
                Play again 
            </div>
        </Typist>
    </div>
}