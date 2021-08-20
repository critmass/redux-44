import {
        ADD_TO_SHOPPING_CART,
        CHANGE_QUANTITY,
        DECREMENT_QUANTITY,
        INCREMENT_QUANTITY,
        REMOVE_FROM_SHOPPING_CART
    } from "../actionMakers/actionTypes";

const INITIAL_STATE = {}

const shoppingCartReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_SHOPPING_CART:
            return {
                ...state,
                [action.productId]:action.quantity
            }
        case REMOVE_FROM_SHOPPING_CART:
            const newState = {...state}
            delete newState[action.productId]
            return newState
        case CHANGE_QUANTITY:
            return {...state,[action.productId]:action.quantity}
        case INCREMENT_QUANTITY:
            return {
                ...state,
                [action.productId]: (state[action.productId] + 1)
            }
        case DECREMENT_QUANTITY:
            return {
                ...state,
                [action.productId]: (state[action.productId] - 1)
            }
        default:
            return state
    }
}

export default shoppingCartReducer