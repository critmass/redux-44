import {
    ADD_TO_SHOPPING_CART,
    CHANGE_QUANTITY,
    DECREMENT_QUANTITY,
    INCREMENT_QUANTITY,
    REMOVE_FROM_SHOPPING_CART } from "./actionTypes"


const addToShoppingCart = (productId, quantity=1) => {
    return {
        type:ADD_TO_SHOPPING_CART, productId, quantity
    }
}

const removeFromShoppingCart = (productId) => {
    return {
        type:REMOVE_FROM_SHOPPING_CART, productId
    }
}

const changeQuantity = (productId, quantity) => {
    return {
        type:CHANGE_QUANTITY, productId, quantity
    }
}

const incrementQuantity = (productId) => {
    return {
        type:INCREMENT_QUANTITY, productId
    }
}

const decrementQuantity = (productId) => {
    return {
        type:DECREMENT_QUANTITY, productId
    }
}

export {
    addToShoppingCart,
    removeFromShoppingCart,
    changeQuantity,
    incrementQuantity,
    decrementQuantity
 }