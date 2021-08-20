import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
        Button,
        Input,
        InputGroup,
        InputGroupAddon
    } from "reactstrap"
import {
        decrementQuantity,
        incrementQuantity,
        removeFromShoppingCart
    } from "./actionMakers/shoppingCartActionMakers"

const QtyButton = ({productID}) => {
    const qty = useSelector(state => {
        return state.shoppingCart[productID]})

    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(incrementQuantity(productID))
    }

    const handleDecrement = () => {
        if(qty - 1) {
            dispatch(decrementQuantity(productID))
        }
        else {
            dispatch(removeFromShoppingCart(productID))
        }
    }

    return (
        <InputGroup>
            <InputGroupAddon>
                <Button onClick={handleIncrement}>
                    +
                </Button>
            </InputGroupAddon>
                <Input
                    type="text"
                    name="qty"
                    value={qty}
                />
            <InputGroupAddon>
                <Button onClick={handleDecrement}>
                    -
                </Button>
            </InputGroupAddon>
        </InputGroup>
    )
}

export default QtyButton