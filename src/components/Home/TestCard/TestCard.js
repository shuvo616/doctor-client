import React from 'react';

const TestCard = ({card}) => {
    return (
        // <div className="container-fluid d-flex justify-content-center">
        //     <div className="row">
        //         <div className="col-md-4">
        //         </div>
                
        //     </div>
        // </div>
        <div className="col-md-4">
            <img className="img-fluid" src={card.img} alt="" />
            <h5>{card.title}</h5>
            <p>{card.descriptions}</p>
            <button className="btn btn-outline-success">Go to Hell</button>
        </div>
    );
};

export default TestCard;