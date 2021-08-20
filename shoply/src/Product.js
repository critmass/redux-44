import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { Button } from "reactstrap"
import { addToShoppingCart } from "./actionMakers/shoppingCartActionMakers"
import QtyButton from "./QtyButton"

const Product = () => {

    const {productId} = useParams()
    const product = useSelector(state => {
        return state.productLine[productId] })
    const quantity = useSelector(state => {
        return state.shoppingCart[productId]
    })
    const dispatch = useDispatch()

    const handleClick = evt => {
        dispatch(addToShoppingCart(productId))
    }

    return (<div>
        <img src={product.image_url} alt={`${product.name}`}/>
        <div>
            <h2>{product.name}</h2>
            <h5>{product.price}</h5>
            {quantity ?
                <QtyButton productID={productId}/> :
                <Button onClick={handleClick}>
                    Add to Cart
                </Button>
            }

            <p>{product.description}</p>
        </div>
    </div>)
}

export default Product