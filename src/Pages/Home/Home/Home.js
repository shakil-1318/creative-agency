import React from 'react';
import Banner from '../../Home/Banner/Banner';
import Brand from '../../Home/Brand/Brand';
import Header from '../../Shared/Header/Header';
import Contact from '../Contact/Contact';
import Feature from '../Feature/Feature';
import Review from '../Review/Review';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Brand></Brand>
            <Services></Services>
            <Feature></Feature>
            <Review></Review>
            <Contact></Contact>
        </div>
    );
};

export default Home;