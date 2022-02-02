import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../../Home/Banner/Banner';
import Brand from '../../Home/Brand/Brand';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Brand></Brand>
            <Services></Services>
        </div>
    );
};

export default Home;