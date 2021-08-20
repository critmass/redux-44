import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "reactstrap"
import { removeFromShoppingCart } from "./actionMakers/shoppingCartActionMakers"
import QtyButton from "./QtyButton"

const ShoppingCartPage = () => {
    const {shoppingCart, productLine} =
                            useSelector( state => state )
    const dispatch = useDispatch()

    const handleClick = () => {
        for( let productCode in shoppingCart ) {
            dispatch(removeFromShoppingCart(productCode))
        }
    }

    return (<div><div>
        <ul>
            {Object.keys(shoppingCart).map( productCode => {
                return (<li>
                    {productLine[productCode].name}:
                    <QtyButton productID={productCode}/> $
                    {productLine[productCode].price * shoppingCart[productCode]}
                </li>)
            })}
        </ul>
        Total: $ {
            Object.keys(shoppingCart).reduce( (sum, productCode) => {
                return sum + ( shoppingCart[productCode] * productLine[productCode].price )
        },0)}</div>
        <Button onClick={handleClick}>Check Out</Button>
    </div>)
}

export default ShoppingCartPage