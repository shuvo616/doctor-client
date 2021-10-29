import React from 'react';
import picture from '../../../images/featured.png';
const TestService = () => {
    return (
        <section className="testService my-4">
            <div className="container my-5 py-5">
                <div className="text-center mt-3 mb-3">
                    <h3>Dental Services</h3>
                </div>
                <div className="row">
                    <div className="col-md-5 ">
                        <img className="img-fluid img-thumbnail rounded-circle border" style={{height: "400px", width:"400px"}} src={picture} alt="" />
                    </div>
                    <div className="col-md-7 mt-5">
                        <h2>Exceptional Dental Care, on your Term</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        

                        <button className="btn btn-outline-primary">Click For Detail</button>
                        <button className="btn btn-outline-success ms-3">Dental Care</button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestService;