import React from 'react';
import Banner from '../../shared/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            {/* Helmet  */}
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
           <Banner></Banner>
           <Category></Category>
           <PopularMenu></PopularMenu>
           <Featured></Featured>
        </div>
    );
};

export default Home;