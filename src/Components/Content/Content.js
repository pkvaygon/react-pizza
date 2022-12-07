import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Basket from '../Basket/Basket';
import NoBasket from '../NoBasket/NoBasket';
import Home from './../Home/Home';

const Content = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/basket/' element={<Basket />} />
                <Route path='/null-basket/' element={<NoBasket />} />
            </Routes>
        </div>
    );
};

export default Content;