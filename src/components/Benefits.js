import React from 'react'
import { Link } from "react-router-dom"

const Benefits = () => {
    return (
        <div className="benefits">
            <div className="benefits-img"></div>
            <div className="benefits-headline">
                <h2>Company that serves.</h2>
                <p>Apollo Cafe always aims towards fair trade practices. Income stability for farmers, promoting healthy environment and empowering communities. For now <em>and</em> for the future.</p>
                <button className='button'><Link to="/stories">Visit our farms</Link></button>
                <button className='buttonAlt'><Link to="/mission">Learn more</Link></button>
            </div>
        </div>
    )
}


export default Benefits;