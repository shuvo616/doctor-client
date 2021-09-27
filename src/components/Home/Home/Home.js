import React from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import NewTestimonial from '../NewTestimonial/NewTestimonial';
import Services from '../Services/Services';
import ShowCard from '../ShowCard/ShowCard';
import Testimonials from '../Testimonials/Testimonials';
import TopServices from '../TopServices/TopServices';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <ShowCard></ShowCard>
            <TopServices></TopServices>
            <NewTestimonial></NewTestimonial>
        </div>
    );
};

export default Home;