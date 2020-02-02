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
            let xIndex = 5

            Object.keys(state.friends).forEach(key => {
                newFriends[key] = {
                    ...state.friends[key], 
                    position: [xIndex, 5],
                    map: [2, 2]
                }
                xIndex += 2
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