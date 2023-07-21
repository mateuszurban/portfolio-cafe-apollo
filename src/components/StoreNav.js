import React, { useEffect } from 'react'
import { Link } from "react-router-dom"

const StoreNav = (props) => {

    useEffect(() => {
    }, [props])



    return (
        <div className="storeNavbar">
            <ul>               
                <div className="logo"></div>
                <li><Link to="/">Apollo Cafe</Link></li>
                <li><Link to="/cart">Cart items: {props.props}</Link></li>
            </ul>
        </div>
    )
}

export default StoreNav;