import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="footer">
            <ul className='credits'>
            <h4>Credits:</h4>
            <p><a href="https://www.flaticon.com/free-icons/coffee-bean" title="coffee bean icons">Coffee bean icons created by photo3idea_studio - Flaticon</a></p>
            <br />
            <p>Photo by <a href="https://unsplash.com/@devintavery?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Devin Avery</a> on <a href="https://unsplash.com/photos/kAV1KsIiqgw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
            
            <br />
            <p>Photo by <a href="https://unsplash.com/@katya?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Katya Ross</a> on <a href="https://unsplash.com/photos/Adg9B8NTxj0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
            
            </ul>
            <ul className='links'>
                <li><Link to="/mission">about</Link></li>
                <li><Link to="/stories">stories</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/contact">contact</Link></li>
            </ul>
            
        </div>
    )
}


export default Footer;