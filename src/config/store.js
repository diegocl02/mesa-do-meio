import { createStore, combineReducers } from 'redux'
import { reducer } from './reducer'
import * as GameMap from '../engine/map'

const initialState = {
    player: {
        position: [10, 6]
    },
    map: {
        position: [2, 2],
        layout: GameMap.map[2][2]
    }
}

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store