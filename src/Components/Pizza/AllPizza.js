import React, { useState } from 'react';
import './allPizza.css'
const AllPizza = ({ el, sumBasket, trashBasket }) => {
    const [toggleButtonTop, setToggleButtonTop] = useState(null)
    const [toggleButtonBottom, setToggleButtonBottom] = useState(null)
    return (
        <div>
            <div className='card'>
                <img src={el.img} alt="" />
                <h3>{el.name}</h3>
                <h3>{el.price + '₽'}</h3>
                <div className='buttons'>
                    <div className='swap_button'>
                        <button onClick={() => setToggleButtonTop('thin')} className={toggleButtonTop === 'thin' ? 'selected' : 'non-active'}>Тонкое</button>
                        <button onClick={() => setToggleButtonTop('traditional')} className={toggleButtonTop === 'traditional' ? 'selected' : 'non-active'}>Традиционное</button>
                    </div>
                    <div className='size_buttons'>
                        <button onClick={() => setToggleButtonBottom('26 см.')} className={toggleButtonBottom === '26 см.' ? 'selected' : 'non-active'}>26 см.</button>
                        <button onClick={() => setToggleButtonBottom('30 см.')} className={toggleButtonBottom === '30 см.' ? 'selected' : 'non-active'}>30 см.</button>
                        <button onClick={() => setToggleButtonBottom('40 см.')} className={toggleButtonBottom === '40 см.' ? 'selected' : 'non-active'}>40 см.</button>
                    </div>
                </div>
                <form onSubmit={(e) => e.preventDefault()} className='basket'>
                    <button onClick={() => sumBasket(el, toggleButtonTop, toggleButtonBottom)} >Добавить в корзину</button>
                    <button onClick={() => trashBasket(el)}>Удалить из корзины</button>
                </form>
            </div>
        </div>
    );
};

export default AllPizza;