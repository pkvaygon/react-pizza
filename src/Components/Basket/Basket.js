import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './basket.css'
import nobasket from '../../img/nobasket.png'
import { Link } from 'react-router-dom';
const Basket = () => {
    const [pizza, setPizza] = useState(null)
    useEffect(() => {
        setPizza(JSON.parse(localStorage.getItem("pizza")))
        localStorage.clear()
    }, [])


    return (
        <div>
            {
                pizza == null ?
                    <div>
                        <div className='fixedHeader'>
                            <Link to={'/'}><Header /></Link>
                        </div>
                        <div className='nobasket'>

                            <img src={nobasket} alt="LOGO" />
                        </div>
                    </div>

                    :
                    <div>
                        <Link to={'/'}><Header /></Link>
                        <div className='basket1'>
                            {
                                pizza?.map(pizza =>
                                    <div className='basket' key={pizza.id}>
                                        <img src={pizza.img} alt="" />
                                        <div>
                                            <h3>{pizza.name}</h3>
                                            <h4>{pizza.type === 'thin' ? 'тонкое' : 'традиционное'}</h4>
                                            <h4>{pizza.size}</h4>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default Basket;