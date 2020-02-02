import React from 'react'
import ReactTypingEffect from 'react-typing-effect';

// friend: {
//     key: "fox",
//     name : "Mr. StarFox",
//     sprit: Sprites.Fox,
//     position: [15, 5],
//     map: [0, 1],
//     text: "Don't get too cocky, Star Fox!",
//     origin: {
//         map: [0, 0],
//         position: [12, 5]
//     },
//     wasSaved: false
// }

export class Captions extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return <div className={"captions"}>
            {this.props.text != ""
                ? <div className={"captions-border"}>
                   <ReactTypingEffect text={this.props.text} speed={40} typingDelay={200} cursor="" eraseDelay={30000}></ReactTypingEffect>
                </div>
                : <div> {Object.keys(this.props.friends).map(key => this.props.friends[key]).map(friend => {
                    const Sprite = friend.sprit
                    return <Sprite style={{
                        width: "30px",
                        filter: friend.wasSaved
                            ? 0
                            : "contrast(0) sepia(100%) hue-rotate(190deg) saturate(2000%) brightness(100%) grayscale(100%)"
                    }}>
                    </Sprite>
                })} </div>
            }
        </div>
    }
}