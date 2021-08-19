import { ADD_DISCOUNT, REMOVE_DISCOUNT } from "./actionTypes"


const addDiscount = (discountCode, discount) => {
    return {
        type:ADD_DISCOUNT, discountCode, discount
    }
}

const removeDiscount = (discountCode) => {
    return{
        type:REMOVE_DISCOUNT, discountCode
    }
}

export { addDiscount, removeDiscount }