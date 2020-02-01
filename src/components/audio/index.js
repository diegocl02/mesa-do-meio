 import React, { Component } from "react"
 import ambience_forest from './ambience_forest.mp3'
 
export default class Audio extends Component {
  componentDidMount() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }
 
  render() {
    return (
      <div>
        <audio className="audio-element" autoPlay loop>
          <source src={ambience_forest} />
        </audio>
      </div>
    )
  }
} 