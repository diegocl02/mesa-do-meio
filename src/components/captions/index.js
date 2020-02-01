import React from 'react'

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

export function Captions(props) {
    return <div className={"captions"}>
        {props.text != ""
            ? <div className={"captions-border"}>
                {props.text}
            </div>
            : <div> {Object.keys(props.friends).map(key => props.friends[key]).map(friend => {
                const Sprite = friend.sprit
                return <Sprite style={{width: "30px", filter: friend.wasSaved ? 0 : "grayscale(100%)"}}></Sprite>
            })} </div>
        }
    </div>
}