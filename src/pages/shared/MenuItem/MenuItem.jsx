import React from 'react';

const MenuItem = ({item}) => {
    const {name, image, recipe, price} = item
    return (
        <div className='flex space-x-5 items-center'>
            <div><img className='w-28 rounded-b-3xl rounded-r-3xl' src={image} alt="" /></div>
            <div>
                <h3 className='uppercase font-bold'>{name}</h3>
                <p>{recipe}</p>
            </div>
            <div>
                <p className='text-yellow-500'>
                ${price}
                </p>
            </div>
        </div>
    );
};

export default MenuItem;