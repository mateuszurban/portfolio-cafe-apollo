import React from "react";

import Nav from "./components/Nav"
import StoreNav from "./components/StoreNav";
import Footer from './components/Footer';
import StoreItems from './components/StoreItems'

import './css/style.css'



const Store = () => {
    return (
        <>
        <Nav/>
        <h2>Store will appear here.</h2>
        {/* <StoreNav/>
        <StoreItems/>
        <Footer/> */}
        </>
    )
}

export default Store