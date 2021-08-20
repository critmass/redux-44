import React from "react"
import { useSelector } from "react-redux"
import ProductCard from "./ProductCard"
import { v4 as uuidv4 } from "uuid"
// import "./ProductCard.css"

const ProductList = () => {
    const products = useSelector(state => state.productLine)
    const rows = Object.entries(products).reduce(
        (rowsOfProducts, productInfo, index) => {
            const product = {
                productId:productInfo[0], ...productInfo[1] }
            if( index % 3) {
                const row = rowsOfProducts[0]
                return [[product, ...row], ...rowsOfProducts.slice(1)]
            }
            else {
                return [[product], ...rowsOfProducts]
            }
        }, [])
    return (
        <div className="container">
            {
                rows.map( row => (
                        <div className="row" key={uuidv4()}>
                            {row.map( product => {
                                return (
                                    <div className="col" key={product.productId}>
                                        <ProductCard product={product}/>
                                    </div>
                                )
                            })}
                        </div>
                    ))
            }
        </div>
    )
}

export default ProductList