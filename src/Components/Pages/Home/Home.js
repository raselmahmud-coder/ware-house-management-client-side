import React from 'react';
import BestSellingProducts from './BestSellingProducts';
import CustomersReview from './CustomersReview/CustomersReview';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import HeroSection from './Banner/HeroSection';

const Home = () => {
    return (
        <>
            <HeroSection/>
            <BestSellingProducts />
            <FeaturedProducts/>
            <CustomersReview />
        </>
    );
};

export default Home;