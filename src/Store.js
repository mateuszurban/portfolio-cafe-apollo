import React, { useState, useEffect } from "react";

import StoreNav from "./components/StoreNav";
import Footer from './components/Footer';

import './css/style.css'

const Store = () => {

    // Array of products, delivered as objects:
    const itemsList = [{name: 'Alfa Coffee', key: '001', price: '23,99'}, {name: 'Beta Coffee', key: '002', price: '19,99'}, {name: 'Charlie Coffee', key: '003', price: '27,99'}, {name: 'Delta Coffee', key: '004', price: '23,99'}, {name: 'Echo Coffee', key: '005', price: '24,99'}, {name: 'Foxtrot Coffee', key: '006', price: '25,99'}, {name: 'Golf Coffee', key: '007', price: '32,99'}, {name: 'Hotel Coffee', key: '008', price: '21,99'}, ];

    // State of the shopping cart
    const [cartState, setCartState] = useState([]);

    const addToCart = (prop) => {
        setCartState (
            [
                ...cartState,
                prop
            ]
        );
        setCartNumber (cartNumber + 1)
        // Here, I need to send this cart state to localstorage
        saveToLocalStorage();
    }

    // This hook takes care of updating the state in a way, that I wanted it to work. So, basically, it watches the value of cartState, and if it changed, it will kind of force the update.
    // Without this, React would wait to render, and this is fine in terms of optimization. But in my case, this waiting for re-render was not the best solution, because my cart-number would never display a proper number. Thus, my fix.
    // Also, it will take care of updating localStorage
    useEffect(() => {
        // consoleLogCartState();
        saveToLocalStorage();
    }, [cartState])

    const consoleLogCartState = () => {
        console.log('cart is now: ')
        console.table(cartState)
    }

    const RenderStoreItems = (props) => {
        return (
            <>
                <div className="items">
                    {props.props.map(function(prop) {
                        return (
                            <div className="item" key={prop.key}>
                                <div className="itemImage"></div>
                                <div className="itemName">{prop.name}</div>
                                <div className="itemPrice">{prop.price}$</div>
                                <div className="itemAddToCartButton" onClick={() => addToCart(prop)}>Add to cart</div>
                            </div>
                        )
                    })}
                </div>
            </>
            
        )
    }

    const saveToLocalStorage = () => {
        localStorage.setItem('cartState', JSON.stringify(cartState))
    }

    // State for shopping cart quantity
    const [cartNumber, setCartNumber] = useState(0);

    return (
        <>
        <StoreNav props={cartNumber}/>
        <RenderStoreItems props={itemsList}/>
        <Footer/>
        </>
    )
}

export default Store