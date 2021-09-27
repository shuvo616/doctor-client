import React from 'react';
import client from '../../../images/user1.jpg';
import NewTestimonialDetail from '../NewTestimonialDetail/NewTestimonialDetail';


const testimonialData= [
    {
        img: client,
        name: 'Shorna Porny',
        designation: 'CEO',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, vel.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, vel.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, vel.'
    },
    {
        img: client,
        name: 'Porimoni sfsd',
        designation: 'CTO',
        description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, vel.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, vel.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, vel.'
    }
]

const NewTestimonial = () => {
    return (
        <div className="cardSection mt-5 mb-5">
            <h3 className="text-center mt-5 py-5">New Testimonial</h3>
            <div className="container">
                <div className="row">
                    {
                        testimonialData.map(testimonial => <NewTestimonialDetail testimonial={testimonial}></NewTestimonialDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default NewTestimonial;