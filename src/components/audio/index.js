 import React, { Component } from "react"
 import ambience_forest from './tracks/ambience_forest.mp3'
 import acoustic_fox from './tracks/acoustic_fox.mp3'
 import ambi_wolf from './tracks/ambi_wolf.mp3'
 import bass_owl from './tracks/bass_owl.mp3'
 import flute_bird from './tracks/flute_bird.mp3'
 import keys_racoon from './tracks/keys_racoon.mp3'
 import percussion_rabbit from './tracks/percussion_rabbit.mp3'
 import synth_squirrel from './tracks/synth_squirrel.mp3'
 import synthbass_frog from './tracks/synthbass_frog.mp3'
 import trumpet_beaver from './tracks/trumpet_beaver.mp3'
 import final_track from './tracks/final_track.wav'
 
export class Audio extends React.Component {
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

export class RabbitTrack extends React.Component{    
    componentDidMount(){
      const rabbit_track = document.getElementsByClassName("rabbit")[0]
      rabbit_track.play()
    }

    render (){
        return (
          <audio className="rabbit"><source src={percussion_rabbit} /></audio>
          )
    }
}


export class WolfTrack extends React.Component{    
    componentDidMount(){
      const wolf_track = document.getElementsByClassName("wolf")[0]
      wolf_track.play()
    }

    render (){
        return (
          <audio className="wolf"><source src={ambi_wolf} /></audio>
          )
    }
}

export class FrogTrack extends React.Component{    
    componentDidMount(){
      const frog_track = document.getElementsByClassName("frog")[0]
      frog_track.play()
    }

    render (){
        return (
          <audio className="frog"><source src={synthbass_frog} /></audio>
          )
    }
}

export class RacoonTrack extends React.Component{    
    componentDidMount(){
      const racoon_track = document.getElementsByClassName("racoon")[0]
      racoon_track.play()
    }

    render (){
        return (
          <audio className="racoon"><source src={keys_racoon} /></audio>
          )
    }
}

export class FoxTrack extends React.Component{    
    componentDidMount(){
      const fox_track = document.getElementsByClassName("fox")[0]
      fox_track.play()
    }

    render (){
        return (
          <audio className="fox"><source src={acoustic_fox} /></audio>
          )
    }
}

export class FinalTrack extends React.Component{    
    componentDidMount(){
      const final_track = document.getElementsByClassName("final-track")[0]
      final_track.play()
    }

    render (){
        return (
          <audio className="final-track"><source src={final_track} /></audio>
          )
    }
} 