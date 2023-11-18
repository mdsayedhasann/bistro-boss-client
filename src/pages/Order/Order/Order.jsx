import React from 'react';
import Cover from '../../shared/Cover/Cover';
import shopBg from '../../../assets/shop/banner2.jpg'

const Order = () => {
    return (
        <div>
            <Cover img={shopBg} heading={'Order Now'} content={'Order Online Our Food'}></Cover>
        </div>
    );
};

export default Order;