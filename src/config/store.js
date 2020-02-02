import { createStore } from 'redux'
import { reducer } from './reducer'
import * as GameMap from '../engine/map'
import * as Sprites from '../components/sprites'
import spr_rabbitB from '../components/mini-game/img/spr_rabbitB.png'
import spr_foxB from '../components/mini-game/img/spr_foxB.png'
import spr_racoonB from '../components/mini-game/img/spr_raccoonB.png'
import spr_frogB from '../components/mini-game/img/spr_frogB.png'
import spr_wolfB from '../components/mini-game/img/spr_wolfB.png'
import spr_owlB from '../components/mini-game/img/spr_owlB.png'
import spr_hedgehogB from '../components/mini-game/img/spr_hedgehogB.png'
import spr_squirrelB from '../components/mini-game/img/spr_squirrelB.png'
import spr_beaverB from '../components/mini-game/img/spr_beaverB.png'

const initialState = {
    player: {
        position: [10, 6],
        friendsSaved: [],
        onMiniGame: false
    },
    map: {
        position: [2, 2],
        layout: GameMap.map[2][2]
    },
    friends: {
        fox: {
            key: "fox",
            name : "Mr. StarFox",
            sprit: Sprites.Fox,
            position: [10, 5],
            map: [3, 5],
            text: "Don't get too cocky, Star Fox!",
            origin: {
                map: [2, 2],
                position: [13, 4]
            },
            wasSaved: false,
            src: spr_foxB
        },
        rabbit: {
            key: "rabbit",
            name : "Pablo Coelho",
            sprit: Sprites.Rabbit,
            position: [12, 5],
            map: [2, 3],
            text: "Don't take life too seriously. You'll never get out alive!",
            origin: {
                map: [0, 0],
                position: [12, 5]
            },
            wasSaved: false,
            src: spr_rabbitB
        },
        racoon: {
            key: "racoon",
            name : "Rocket",
            sprit: Sprites.Racoon,
            position: [12, 5],
            map: [0, 5],
            text: "I live for the simple things... like how much this is gonna hurt",
            origin: {
                map: [0, 0],
                position: [12, 5]
            },
            wasSaved: false,
            src: spr_racoonB
        },
        frog: {
            key: "frog",
            name : "crazy frog",
            sprit: Sprites.Frog,
            position: [15, 5],
            map: [1, 2],
            text: "Wh-wha-what's going on-on? Ding, ding, This is the Crazy Frog",
            origin: {
                map: [0, 0],
                position: [12, 5]
            },
            wasSaved: false,
            src: spr_frogB
        },
        wolf: {
            key: "wolf",
            name : "Remus",
            sprit: Sprites.Wolf,
            position: [15, 5],
            map: [0, 0],
            text: "The dog ate my sheet music...",
            origin: {
                map: [0, 0],
                position: [12, 5]
            },
            wasSaved: false,
            src: spr_wolfB
        },
        owl: {
            key: "owl",
            name : "Jano",
            sprit: Sprites.Owl,
            position: [10, 6],
            map: [4, 0],
            text: "I brought you a song, or maybe a letter from h...",
            origin: {
                map: [0, 0],
                position: [12, 5]
            },
            wasSaved: false,
            src: spr_owlB
        },
        beaver: {
            key: "beaver",
            name : "Sneaky",
            sprit: Sprites.Beaver,
            position: [10, 3],
            map: [1, 1],
            text: "I miss my dam... my river... sadboy cry:((",
            origin: {
                map: [0, 0],
                position: [12, 5]
            },
            wasSaved: false,
            src: spr_beaverB
        },
        hedgehog: {
            key: "hedgehog",
            name : "Sunic",
            sprit: Sprites.Hedgehog,
            position: [15, 6],
            map: [3, 0],
            text: "Gotta go fast!",
            origin: {
                map: [0, 0],
                position: [12, 5]
            },
            wasSaved: false,
            src: spr_hedgehogB
        },
        squirrel: {
            key: "squirrel",
            name : "Alvim",
            sprit: Sprites.Squirrel,
            position: [10, 6],
            map: [0, 3],
            text: "I'm the guy to bring you some music! Did you know I had a band?",
            origin: {
                map: [0, 0],
                position: [12, 5]
            },
            wasSaved: false,
            src: spr_squirrelB
        }
    }
}

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store