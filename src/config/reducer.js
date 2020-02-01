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
        default:
            return state
    }
}