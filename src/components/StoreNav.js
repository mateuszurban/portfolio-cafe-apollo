import React from 'react'
import { Link } from "react-router-dom"

const StoreNav = () => {
    return (
        <div className="storeNavbar">
            <ul>               
                <div className="logo"></div>
                <li><Link to="/">Apollo Cafe</Link></li>
                <li><Link to="/cart">Cart items: </Link></li>
            </ul>
        </div>
    )
}

export default StoreNav;