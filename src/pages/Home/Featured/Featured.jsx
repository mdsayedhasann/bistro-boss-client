import React from 'react';
import featureImage from '../../../assets/home/featured.jpg'
import './featured.css'
import SectionHeading from '../../../components/SectionHeading';

const Featured = () => {
    return (
        <div className='featured bg-fixed'>
           <div className='text-white bg-black bg-opacity-60 h-full '>
           <div className='pt-8'>
           <SectionHeading heading='Featured Item' subheading='Check It Out'></SectionHeading>
           </div>
            <div className='flex justify-center items-center '>
                <div><img className='p-16' src={featureImage} alt="" /></div>
                <div>
                    <p>March 20, 2023</p>
                    <p className='text-xl font-bold'>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='btn btn-outline mt-4 text-white border-0 bg-black bg-opacity-20 border-b-2 border-white'>
                        Order Now
                    </button>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Featured;