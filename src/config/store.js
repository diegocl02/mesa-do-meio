import { createStore } from 'redux'
import { reducer } from './reducer'
import * as GameMap from '../engine/map'
import * as Sprites from '../components/sprites'

const initialState = {
    player: {
        position: [0, 0],
        friendsSaved: []
    },
    map: {
        position: [0, 0],
        layout: GameMap.map[0][0]
    },
    friends: {
        fox: {
            key: "fox",
            name : "Mr. StarFox",
            sprit: Sprites.Fox,
            position: [15, 5],
            map: [0, 1],
            text: "Don't get too cocky, Star Fox!",
            origin: {
                map: [0, 0],
                position: [12, 5]
            },
            wasSaved: false
        },
        rabbit: {
            key: "rabbit",
            name : "Mr. Rabbit",
            sprit: Sprites.Rabbit,
            position: [15, 5],
            map: [1, 0],
            text: "Don't take life too seriously. You'll never get out alive!",
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