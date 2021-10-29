import React from 'react';
import './FeatureService.css'
import feature from '../../../images/featured.png';

const FeatureService = () => {
    return (
        <section className="featureService my-5 py-5">
            <div className="container">
                <h2 className="text-center my-5">Feature Service</h2>
                <div className="row">
                    <div className="col-md-6">
                        <img className="customImg" src={feature} alt="" />
                    </div>
                    <div className="col-md-6 bg-light p-4">
                        <h3 className="mt-5">Exceptional Dental Care</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aspernatur neque enim non nihil laborum facilis inventore esse, reprehenderit, nulla sunt eaque accusantium ducimus deserunt consectetur architecto odit vitae eligendi!</p>
                        <button className="btn btn-outline-primary me-2">Dental Care</button>
                        <button className="btn btn-outline-primary">Other Features</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureService;