import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <section className="footerSection bg-secondary mt-5 p-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h4 className="bg-light text-dark p-3 text-center">Service</h4>
                        <p>Emergency Dental Care</p>
                        <p>Emergency Dental Care</p>
                        <p>Emergency Dental Care</p>
                        <p>Emergency Dental Care</p>
                    </div>
                    <div className="col-md-3">
                        <h4 className="bg-light text-dark p-3 text-center">Service</h4>
                        <p>Emergency Dental Care</p>
                        <p>Emergency Dental Care</p>
                        <p>Emergency Dental Care</p>
                        <p>Emergency Dental Care</p>
                    </div>
                    <div className="col-md-3">
                        <h4 className="bg-light text-dark p-3 text-center">Service</h4>
                        <p>Emergency Dental Care</p>
                        <p>Emergency Dental Care</p>
                        <p>Emergency Dental Care</p>
                        <p>Emergency Dental Care</p>
                    </div>
                    <div className="col-md-3">
                        <h4 className="bg-light text-dark p-3">Test Demo</h4>
                        <p>Emergency Dental Care</p>
                        
                        <div className="d-flex text-center customIcon">
                            <p><FontAwesomeIcon className="iconStyle" icon={faCoffee} /></p>
                            <p><FontAwesomeIcon className="iconStyle" icon={faCoffee} /></p>
                            <p><FontAwesomeIcon className="iconStyle" icon={faCoffee} /></p>
                        </div>
                        <p>Call Now</p>
                        <button className="btn btn-primary">Call Us Now</button>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <p>@CopyRight 2022 Doctors Portal All Right Reserved</p>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </section>
    );
};

export default Footer;