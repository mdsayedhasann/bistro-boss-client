import React, { useEffect, useState } from 'react';
import SectionHeading from '../../../components/SectionHeading';
import MenuItem from '../../shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)
        })
    } ,[])
    return (
        <section className='py-5'>
            <SectionHeading subheading={'Check it Out'} heading={'From Our Menu'}>

            </SectionHeading>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                
                }
            </div>
        </section>
    );
};

export default PopularMenu;