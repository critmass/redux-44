import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import FileNotFound404 from './FileNotFound404'
import Product from './Product'
import ProductList from './ProductList'
import ShoppingCartPage from './ShoppingCartPage'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/products"/>
            </Route>
            <Route exact path="/products">
                <ProductList/>
            </Route>
            <Route path="/products/:productId">
                <Product/>
            </Route>
            <Route exact path="/shopping-cart">
                <ShoppingCartPage/>
            </Route>
            <Route>
                <FileNotFound404/>
            </Route>
        </Switch>
    )
}

export default Routes