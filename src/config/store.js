import { createStore, combineReducers } from 'redux'
import { reducer } from './reducer'

const initialState = {
    wins: 1
}

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store