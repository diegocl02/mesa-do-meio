export const reducer = (state, action) => {
    switch (action.type) {
        case "MOVE_PLAYER":
            return { player: {
            	position: action.payload
            } }
        default:
            return state
    }
}