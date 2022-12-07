import React, { useState } from 'react';
import logo_pizza from '../../img/logo_pizza.png'
import icon_basket from '../../img/icon_basket.png'
import './home.css';
import cheezburger_pizza from '../../img/cheezburger_pizza.png'
import cheez_pizza from '../../img/cheez_pizza.png'
import shrimps_pizza from '../../img/shrimps_pizza.png'
import cheez_chicken from '../../img/cheez_chicken.png'
import AllPizza from '../Pizza/AllPizza';
import { Link } from 'react-router-dom';
function Home() {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalOrder, setTotalOrder] = useState(0);

    const sumBasket = (el, type, size) => {
        const local = JSON.parse(localStorage.getItem("pizza"));
        setTotalPrice(totalPrice + el.price);
        setTotalOrder(totalOrder + 1);
        console.log(local);
        if (local == null) {
            localStorage.setItem("pizza", JSON.stringify([{ ...el, type, size }]));
        } else {
            localStorage.setItem("pizza", JSON.stringify([...local, { ...el, type, size }]));
        }
    };
    const trashBasket = (el) => {
        setTotalPrice(totalPrice - el.price);
        setTotalOrder(totalOrder - 1)
        if (totalOrder === 0 && totalPrice === 0) {
            setTotalOrder(0);
            setTotalPrice(0);
        }
    };

    const arr = [
        {
            id: 1,
            img: cheezburger_pizza,
            name: 'Чизбургер-пицца',
            price: 350,
        },
        {
            id: 2,
            img: cheez_pizza,
            name: 'Куриная-пицца',
            price: 430,
        }, {
            id: 3,
            img: shrimps_pizza,
            name: 'Креветки по-азиатски',
            price: 300,
        }, {
            id: 4,
            img: cheez_chicken,
            name: 'Сырная-пицца',
            price: 580,
        },
    ];

    return (
        <div>
            <header className='fixedHeader'>
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
                        <Link to={'/basket/'} style={{ textDecoration: 'none' }}>
                            <button className='totalPrice'>
                                <div>
                                    {`${totalPrice} ₽`}
                                </div>
                                <div> |</div>
                                <div className='totalBasket'>
                                    <img width={30} height={30} src={icon_basket} alt='icon_basket' />
                                    {totalOrder}
                                </div>
                            </button>
                        </Link>
                    </div>

                </div>
                <div className='borderLine'></div>
            </header>
            <main className='container'>
                <section className='sort'>
                    <div>
                        <ul>
                            <li>Все</li>
                            <li>Мясные</li>
                            <li>Вегетарианская</li>
                            <li>Гриль</li>
                            <li>Острые</li>
                            <li>Закрытые</li>
                        </ul>
                    </div>
                    <div>
                        Сортировка по:⠀
                        <select>
                            <option value="">популярности</option>
                            <option value="">по цене</option>
                            <option value="">по алфавиту</option>
                        </select>
                    </div>
                </section>
                <h2 className='title_2'>Все пиццы</h2>
                <section>
                    <div className='flex_pizza'>
                        {arr.map(el => (
                            <AllPizza el={el} sumBasket={sumBasket} trashBasket={trashBasket} key={el.id} />
                        ))}
                    </div>
                </section>
                <div className='empty'></div>
            </main>
        </div>

    );
}

export default Home;