import { ADD_TO_PRODUCT_LINE, EDIT_PRODUCT, REMOVE_FROM_PRODUCT_LINE } from "./actionTypes"
import { v4 as uuidv4 } from "uuid"


const addToProductLine = (
    name, price, description, image_url, productId=uuidv4()) => {
        return {
            type:ADD_TO_PRODUCT_LINE,
            product:{name, price, description, image_url},
            productId
        }
}

const removeFromProductLine = (productId) => {
    return {
        type:REMOVE_FROM_PRODUCT_LINE,
        productId
    }
}

const editProduct = ( productId, productChanges ) => {
    return {
        type:EDIT_PRODUCT,
        productId, productChanges
    }
}

export {addToProductLine, removeFromProductLine, editProduct}