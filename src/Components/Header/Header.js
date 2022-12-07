import React, { useState } from 'react';
import logo_pizza from '../../img/logo_pizza.png'
import icon_basket from '../../img/icon_basket.png'
import './header.css'
const Header = () => {
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalOrder, setTotalOrder] = useState(0)
    return (
        <div>
            <header>
                <div className='container'>
                    <div className='header'>
                        <div className='title'>
                            <div className='logo'>
                                <img src={logo_pizza} alt='logo' />
                            </div>
                            <div>
                                <h1>REACT PIZZA</h1>
                                <p>самая вкусная пицца во вселенной</p>
                            </div>
                        </div>
                        <div className='totalPrice'>
                            <div>
                                {`${totalPrice} ₽`}
                            </div>
                            <div> |</div>
                            <div className='totalBasket'>
                                <img width={30} height={30} src={icon_basket} alt='icon_basket' />
                                {totalOrder}
                            </div>
                        </div>
                    </div>

                </div>
            </header>
            <div className='borderLine'></div>
        </div>
    );
};

export default Header;