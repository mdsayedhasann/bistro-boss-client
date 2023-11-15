import React from 'react';
import featureImage from '../../../assets/home/featured.jpg'
import './featured.css'

const Featured = () => {
    return (
        <div className='featured bg-fixed'>
            <div className='flex justify-center items-center text-white bg-black bg-opacity-60'>
                <div><img className='p-16' src={featureImage} alt="" /></div>
                <div>
                    <p>March 20, 2023</p>
                    <p className='text-xl font-bold'>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='btn btn-outline mt-4 text-white'>
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;