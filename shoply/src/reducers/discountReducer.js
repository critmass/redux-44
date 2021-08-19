import {
        ADD_DISCOUNT,
        REMOVE_DISCOUNT
    } from "../actionMakers/actionTypes";

const INITIAL_STATE = {
    REMOVE10: .10,
    REMOVE20: .20,
    REMOVE30: .30
}

const discountReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_DISCOUNT:
            return {
                ...state,
                [action.discountCode]:action.discount
        }
        case REMOVE_DISCOUNT:
            const newState = {...state}
            delete newState[action.discountCode]
            return newState
        default:
            return state
    }
}

export default discountReducer