import React from "react"
import { useDispatch } from "react-redux"
import {
        Card,
        CardBody,
        CardImg,
        CardText,
        CardTitle,
        CardFooter
    } from "reactstrap"
import { addToShoppingCart, incrementQuantity } from "./actionMakers/shoppingCartActionMakers"
// import "./ProductCard.css"

const ProductCard = ({product}) => {

    const {price, productId, name} = product
    const {description, image_url} = product
    const dispatch = useDispatch()

    const handleClick = () => {
        try{
            dispatch(
                incrementQuantity(productId)
            )
        }
        catch{
            dispatch(
                addToShoppingCart( productId, 1 )
            )
        }
    }

    return (
        <Card onClick={handleClick} className="ProductCard-Card">
            <CardTitle className="h4">{name}</CardTitle>
            <CardImg src={image_url} className="ProductCard-img"/>
            <CardBody>
                <CardText>
                    {description}
                </CardText>
            </CardBody>
            <CardFooter>
                ${price}
            </CardFooter>
        </Card>
    )
}

export default ProductCard