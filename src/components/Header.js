import React, { useState } from 'react'
import {FaShoppingCart} from "react-icons/fa";
import Order from './Order';
import { Link } from 'react-router-dom';

const showOrders = (props) => {
    let summa = 0;
    props.orders.forEach(el => summa  += Number.parseFloat(el.price))
    return( <div>
        {props.orders.map (el => (
            <Order onDelete = {props.onDelete} item = {el}/>
        ))}
        <p className='summa'>Сумма всех Товаров: {summa}$</p>
    </div>
    )
}

const showNothing = () =>{
    return (<div className='empty'>
        <div>Товаров нет!</div>
    </div>)
}

export default function Header(props){
    let [cartOpen, setCartOpen] = useState(false);
    
    return(
        <header>
        <div>
            <span className='logo'>Clothes</span>
            <ul className='nav'>
                <li>About us</li>
                <li>Contacts</li>
                <li>Items</li>
            </ul>
            <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
            
            {cartOpen && (
                <div className='shop-cart'>
                     {props.orders.length > 0?
                     showOrders(props) : showNothing()}
                </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
    )
}