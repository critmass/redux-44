import React from "react"
import {
        Card,
        CardBody,
        CardImg,
        CardText,
        CardTitle,
    } from "reactstrap"
import { Link } from "react-router-dom"
// import "./ProductCard.css"

const ProductCard = ({product}) => {

    const {price, productId, name, image_url} = product

    const handleClick = () => {

    }

    return (
        <Link to={`/products/${productId}`}>
            <Card onClick={handleClick} className="ProductCard-Card">
                <CardTitle className="h4">{name}</CardTitle>
                <CardImg src={image_url} className="ProductCard-img"/>
                <CardBody>
                    <CardText>
                        ${price}
                    </CardText>
                </CardBody>
            </Card>
        </Link>
    )
}

export default ProductCard