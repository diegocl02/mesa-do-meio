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
            map: [2, 2],
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
        }
    }
}

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store