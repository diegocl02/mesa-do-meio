export const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_PLAYER":
            return { player: action.payload }
        default:
            return state
    }
}