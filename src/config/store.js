import { createStore, combineReducers } from 'redux'
import { reducer } from './reducer'
import * as GameMap from '../engine/map'

const initialState = {
    player: {
        position: [0, 0]
    },
    map: {
        position: [0, 0],
        layout: GameMap.map[0][0]
    }
}

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store