export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return { wins: action.payload }
        default:
            return state
    }
}