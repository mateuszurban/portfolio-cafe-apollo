import React, { useState } from "react";

import Nav from "./components/Nav";
import Footer from './components/Footer';

import './css/style.css'

const Cart = () => {

    const RenderCartItems = () => {
        // Here will be some logic, to load localstorage contents
        const cartItemsLogic = () => {
            const getLocalStorageData = localStorage.getItem('cartState');
            const cartItemsValue = JSON.parse(getLocalStorageData);
            return cartItemsValue || "Your cart is empty.";
        }

        const cartContentsToRender = cartItemsLogic();
       
        // I want this to create a modal, with some kind of "thank you" note
        const confirmOrder = () => {
            console.log("Thank you for your order.")
        }
        
        return (
            <div className="cartItems">
                <h2>Your order will include: </h2>
                {cartContentsToRender.map(function (content) {
                    return (
                        <>
                            <div className="cartItem">
                                <p>{content.name}</p>
                                <p>{content.price}$</p>
                            </div>
                        </>
                    )
                })}
                <button onClick={confirmOrder}>Confirm order</button>
            </div>
            
        )
        
    }

    return (
        <>
        <Nav/>
        <RenderCartItems/>
        <Footer/>
        </>
    )
}

export default Cart