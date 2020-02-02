import { createStore } from 'redux'
import { reducer } from './reducer'
import * as GameMap from '../engine/map'
import * as Sprites from '../components/sprites'

const initialState = {
    player: {
        position: [10, 6],
        friendsSaved: []
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
                position: [12, 5]
            },
            wasSaved: false
        },
        rabbit: {
            key: "rabbit",
            name : "Mr. Rabbit",
            sprit: Sprites.Rabbit,
            position: [12, 5],
            map: [2, 3],
            text: "Don't take life too seriously. You'll never get out alive!",
            origin: {
                map: [0, 0],
                position: [12, 5]
            },
            wasSaved: false
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
            wasSaved: false
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
            wasSaved: false
        },
        wolf: {
            key: "wolf",
            name : "Remus",
            sprit: Sprites.Wolf,
            position: [15, 5],
            map: [0, 0],
            text: "The dog ate my homework",
            origin: {
                map: [0, 0],
                position: [12, 5]
            },
            wasSaved: false
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
            wasSaved: false
        },
        beaver: {
            key: "beaver",
            name : "Sneaky",
            sprit: Sprites.Beaver,
            position: [10, 3],
            map: [1, 1],
            text: "I miss my dam... and my river... sadboy cry:((",
            origin: {
                map: [0, 0],
                position: [12, 5]
            },
            wasSaved: false
        },
        hedgehog: {
            key: "hedgehog",
            name : "Sonic",
            sprit: Sprites.Hedgehog,
            position: [15, 6],
            map: [3, 0],
            text: "Gotta go fast",
            origin: {
                map: [0, 0],
                position: [12, 5]
            },
            wasSaved: false
        },
        squirrel: {
            key: "squirrel",
            name : "Alvim",
            sprit: Sprites.Squirrel,
            position: [10, 6],
            map: [0, 3],
            text: "I'm the guy to bring you some music, did you know I had a band?",
            origin: {
                map: [0, 0],
                position: [12, 5]
            },
            wasSaved: false
        }
    }
}

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store