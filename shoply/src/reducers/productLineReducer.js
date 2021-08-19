import {
        ADD_TO_PRODUCT_LINE,
        REMOVE_FROM_PRODUCT_LINE
    } from "../actionMakers/actionTypes";
import data from "./data.json"

const INITIAL_STATE = data.products

const productLineReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_PRODUCT_LINE:
            return {
                ...state,
                [action.productId]:{...action.product}
            }
        case REMOVE_FROM_PRODUCT_LINE:
            const newState = {...state}
            delete newState[action.productId]
            return newState
        default:
            return state
    }
}

export default productLineReducer