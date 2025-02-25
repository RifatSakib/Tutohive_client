import React from 'react';
import { Helmet } from 'react-helmet';

import Banner from '../Banner/Banner';
import Stats from '../Stats/Stats';
import LanguageCategories from '../LanguageCategories/LanguageCategories';
import Accordion from '../../Accordion/Accordion';
import Hero from '../../Hero/Hero';

const Home = () => {
    return (
        <div className='w-full'>
            <Helmet>
                <title>TurorHive | Home</title>
            </Helmet>

            <Banner></Banner>
            <Stats></Stats>
            <LanguageCategories></LanguageCategories>
            <Accordion></Accordion>

            <Hero></Hero>








        </div>
    );
};

export default Home;