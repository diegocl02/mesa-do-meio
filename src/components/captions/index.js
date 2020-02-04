import React from 'react'
// import ReactTypingEffect from 'react-typing-effect';

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
                return <Sprite key={friend.name} style={{
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