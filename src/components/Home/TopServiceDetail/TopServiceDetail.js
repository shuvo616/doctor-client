import React from 'react';
import './TopServiceDetail.css';
const TopServiceDetail = ({topService}) => {
    return (
        <div className="col-md-4">
            <div className="card shadow p-3 mb-5 bg-body rounded">
                <div className="imageSection">
                    <img src={topService.img} alt="" />
                </div>
                <div className="card-body">
                    <h5>{topService.title}</h5>
                    <p>{topService.description}</p>
                    <a href="#" className="btn btn-outline-success">Click For Details</a>
                </div>
            </div>
        </div>
    );
};

export default TopServiceDetail;