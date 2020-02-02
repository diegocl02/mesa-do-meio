 import React, { Component } from "react"
 import ambience_forest from './tracks/ambience_forest.mp3'
 import acoustic_fox from './tracks/acoustic_fox.mp3'
 import ambi_wolf from './tracks/ambi_wolf.mp3'
 import bass_owl from './tracks/bass_owl.mp3'
 import flute_bird from './tracks/flute_bird.mp3'
 import keys_racoon from './tracks/keys_racoon.mp3'
 import percussion_rabbit from './tracks/percussion_rabbit.mp3'
 import picapau from './tracks/picapau.mp3'
 import synth_squirrel from './tracks/synth_squirrel.mp3'
 import synthbass_frog from './tracks/synthbass_frog.mp3'
 import trumpet_beaver from './tracks/trumpet_beaver.mp3'
 import together from './tracks/together.mp3'
 import final_track from './tracks/final_track.mp3'

export class Intro extends React.Component {
  componentDidMount() {
    const sound = document.getElementById("intro")
  }

  render() {
    return (
        <audio id="intro" autoPlay>
          <source src={final_track} />
        </audio>
    )
  }
}
 
export class Audio extends React.Component {
  componentDidMount() {
    const ambience = document.getElementById("audio-element")
  }
 
  render() {
    return (
      <div>
        <audio id="audio-element" autoPlay loop>
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

export class OwlTrack extends React.Component{    
    componentDidMount(){
      const owl_track = document.getElementsByClassName("owl")[0]
      owl_track.play()
    }

    render (){
        return (
          <audio className="owl"><source src={bass_owl} /></audio>
          )
    }
}

export class BeaverTrack extends React.Component{    
    componentDidMount(){
      const beaver_track = document.getElementsByClassName("beaver")[0]
      beaver_track.play()
    }

    render (){
        return (
          <audio className="beaver"><source src={trumpet_beaver} /></audio>
          )
    }
}

export class HedgehogTrack extends React.Component{    
    componentDidMount(){
      const hedgehog_track = document.getElementsByClassName("hedgehog")[0]
      hedgehog_track.play()
    }

    render (){
        return (
          <audio className="hedgehog"><source src={picapau} /></audio>
          )
    }
}

export class SquirrelTrack extends React.Component{    
    componentDidMount(){
      const squirrel_track = document.getElementsByClassName("squirrel")[0]
      squirrel_track.play()
    }

    render (){
        return (
          <audio className="squirrel"><source src={synth_squirrel} /></audio>
          )
    }
}

export class FinalTrack extends React.Component{    
    componentDidMount(){
      const final_track = document.getElementsByClassName("final-track")[0]
      setTimeout(function() {
          final_track.play()
        }, 4000)
    }

    render (){
        return (
          <audio className="final-track"><source src={together} /></audio>
          )
    }
} 