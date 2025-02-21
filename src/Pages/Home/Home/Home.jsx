import React from 'react';
import { Helmet } from 'react-helmet';

import Banner from '../Banner/Banner';
import Stats from '../Stats/Stats';
import LanguageCategories from '../LanguageCategories/LanguageCategories';

const Home = () => {
    return (
        <div className='w-full'>
            <Helmet>
                <title>TurorHive | Home</title>
            </Helmet>

            <Banner></Banner>
            <Stats></Stats>
            <LanguageCategories></LanguageCategories>




        </div>
    );
};

export default Home;