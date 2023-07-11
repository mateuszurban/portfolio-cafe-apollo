import React from 'react'
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-headline">
            <h2>Sustainable coffee for a better future.</h2>
            <p>Coffee that's delicious and responsible. Supporting local communities and fighting for the planet.</p>
            <button><Link to="/mission">Join us</Link></button>
            </div>
            <div className="hero-img"></div>
        </div>
    )
}


export default Hero;