import React from 'react'

export function Captions(props) {
    return <div className={"captions"}>
        <div className={"captions-border"}>
            {props.text}
        </div>
    </div>
}