import React, { useEffect, useState } from 'react';
import SectionHeading from '../../../components/SectionHeading';

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
            <div>
                {
                menu.map(item => <li key={item._id}> {item.name} </li>)
                
                }
            </div>
        </section>
    );
};

export default PopularMenu;