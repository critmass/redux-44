const INITIAL_STATE = "(^_^)/"

const moodManager = (state={face:INITIAL_STATE}, action) => {
    switch (action.type) {
        case "HAPPY":
            return {...state, face:action.payload}
        case "SAD":
            return {...state, face:action.payload}
        case "ANGRY":
            return {...state, face:action.payload}
        case "RUNNING":
            return {...state, face:action.payload}
        default:
            return state
    }
}

