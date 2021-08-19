import { combineReducers } from "redux"
import discountReducer from "./discountReducer"
import productLineReducer from "./productLineReducer"
import shoppingCartReducer from "./shoppingCartReducer"

const rootRuducer = combineReducers({
    productLine:productLineReducer,
    shoppingCart:shoppingCartReducer,
    discount:discountReducer
})

export default rootRuducer