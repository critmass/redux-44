import React from "react"
import { Navbar, Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"

const ShoplyNavbar = () => {
    return (<div>
        <Navbar>
            <NavLink exact to="/products">
                Products
            </NavLink>
            <Nav>
                <NavItem>
                    <NavLink exact to="/shopping-cart">
                        🛒
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    </div>)
}

export default ShoplyNavbar