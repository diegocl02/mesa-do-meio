import * as GameMap from '../engine/map'

export const reducer = (state, action) => {
    switch (action.type) {
        case "MOVE_PLAYER":
            return {
                ...state, player: {
                    ...state.player,
                    position: action.payload
                }
            }
        case "CHANGE_MAP":
            return {
                ...state, map: {
                    ...action.payload
                }
            }
        case "UPDATE_CAPTION":
            return { ...state, caption: action.payload }
        case "UPDATE_FRIEND":
            return { ...state, friends: { ...state.friends, [action.payload.key] : action.payload} }
        case "CELEBRATE":
        {
            let newFriends = {}
            let xIndex = 6
            let yIndex = 6

            Object.keys(state.friends).forEach(key => {
                newFriends[key] = {
                    ...state.friends[key], 
                    position: [xIndex, yIndex],
                    map: [2, 2]
                }
                yIndex = xIndex > 13 ? yIndex + 2 : yIndex
                xIndex = xIndex > 13 ? 6 : xIndex + 2
            })
            return {
                ...state,
                player: {
                    position: [9, 5],
                    friendsSaved: []
                },
                map: {
                    position: [2, 2],
                    layout: GameMap.map[2][2]
                },
                friends: newFriends
            }
        }
        case "EXPERIMENTAL":
            {
                let newFriends = {}
    
                Object.keys(state.friends).forEach(key => {
                    newFriends[key] = {
                        ...state.friends[key],
                        wasSaved: true
                    }
                })
                return {
                    ...state,
                    friends: newFriends
                }
            }
        default:
            return state
    }
}