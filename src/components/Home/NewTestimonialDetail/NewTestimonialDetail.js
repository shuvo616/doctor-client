import React from "react";
import rightImage from '../../../images/Logo.png';
import './NewTestimonialDetail.css';

const NewTestimonialDetail = ({ testimonial }) => {
  return (
    <div className="col-md-6 ">
      <div className="shadow p-3 mb-5 bg-body rounded">
        <div className="testimonial">
          <p className="test-start py-3">{testimonial.description}</p>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-4">
                  <div className="client-img">
                    <img className="img-fluid" src={testimonial.img} alt="" />
                  </div>
                </div>
                <div className="col-md-8">
                  <h6>{testimonial.name}</h6>
                  <p>{testimonial.designation}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-3">
              <img className="img-fluid" src={rightImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTestimonialDetail;
