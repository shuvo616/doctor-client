import React from 'react';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeatureService from '../FeatureService/FeatureService';
import Footer from '../Footer/Footer';
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
            <FeatureService></FeatureService>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <TopServices></TopServices>
            <NewTestimonial></NewTestimonial>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;