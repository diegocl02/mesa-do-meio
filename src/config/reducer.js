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
        default:
            return state
    }
}