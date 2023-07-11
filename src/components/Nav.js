import React from 'react'
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className="navbar">
            <ul>               
                <div className="logo"></div>
                <li><Link to="/">Apollo Cafe</Link></li>
                <li><Link to="/mission">Mission</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/stories">Stories</Link></li>
                <li><Link to="/store">Store</Link></li>
            </ul>
        </div>
    )
}

export default Nav;