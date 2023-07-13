import React from "react";

import Nav from "./components/Nav";
import Footer from './components/Footer'

import './css/style.css'

const Team = () => {
    return (
        <>
        <Nav/>
        <div className="team">
            
            <div className="person">
                <div className="personPicture"></div>
                <h2 className="personName">Maria</h2>
                <h4 className="">Lead of sustainability efforts</h4>
                <p className="personDescription">Commodi asperiores maxime nam cupiditate, autem sed quam nemo similique repellat, incidunt, officiis rem mollitia aspernatur ut aliquid in cumque cum quos praesentium dignissimos aut reprehenderit aperiam.</p>
            </div>
            <div className="person">
                <div className="personPicture"></div>
                <h2 className="personName">George</h2>
                <h4 className="">Farming genius</h4>
                <p className="personDescription">Deserunt fugiat harum exercitationem amet illo accusamus distinctio? Nesciunt asperiores esse explicabo ipsa sequi saepe magni, a itaque reiciendis, sed dicta totam dolorum.</p>
            </div>
            <div className="person">
                <div className="personPicture"></div>
                <h2 className="personName">Ann</h2>
                <h4 className="">Story weaver</h4>
                <p className="personDescription">Vitae voluptatum mollitia odio in sapiente eaque asperiores reprehenderit dolores atque eos et dicta officia unde. Animi provident ut odio itaque at veniam qui ipsam  consectetur aliquam.</p>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Team