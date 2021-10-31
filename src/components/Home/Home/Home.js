import React from 'react';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeatureService from '../FeatureService/FeatureService';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import NewTestimonial from '../NewTestimonial/NewTestimonial';
import PatientOpinion from '../PatientOpinion/PatientOpinion';
import Services from '../Services/Services';
import TopServices from '../TopServices/TopServices';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeatureService></FeatureService>
            <MakeAppointment></MakeAppointment>
            <PatientOpinion></PatientOpinion>
            <TopServices></TopServices>
            <NewTestimonial></NewTestimonial>
            <Blog></Blog>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;