import React from 'react';

const PatientOpinionData = (props) => {

        const {quote,name,city,img} = props.opinionData;

    return (
        <div className="col-md-4">
            <div className="card p-4 mb-5">
                <p>{quote}</p>

                <div className="parentDiv d-flex">
                    <div className="imageDiv">
                        <img src={img} alt="" />
                    </div>
                    <div className="contentDiv ms-3 mt-3">
                        <h5>{name}</h5>
                        <h6>{city}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientOpinionData;