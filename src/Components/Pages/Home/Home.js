import React from 'react';
import BestSellingProducts from './BestSellingProducts';
import CustomersReview from './CustomersReview/CustomersReview';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import HeroSection from './HeroSection';

const Home = () => {
    return (
        <>
            <HeroSection/>
            <h2>from home page</h2>
            <BestSellingProducts />
            <FeaturedProducts/>
            <CustomersReview />
        </>
    );
};

export default Home;