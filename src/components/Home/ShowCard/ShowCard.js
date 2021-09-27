import React from 'react';
import doctor from '../../../images/doctor-sm.png'
import img1 from '../../../images/img1.jpg';
import img2 from '../../../images/img2.jpg';
import img3 from '../../../images/img3.jpg';
import TestCard from '../TestCard/TestCard';

const cardData = [
    {
        img: img1,
        title: 'Title one',
        descriptions: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita'
    },
    {
        img: img2,
        title: 'Title Two',
        descriptions: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita'
    },
    {
        img: img3,
        title: 'Title Three',
        descriptions: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita'
    }
]

const ShowCard = () => {
    return (
        // <div className="card text-center">
        //     <div className="overflow">
        //         <img src={doctor} alt="" />
        //     </div>
        //     <div className="card-body text-dark">
        //         <h4 className="card-title"> Card Title</h4>
        //         <p className="card-text text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, officia voluptatum id aspernatur repellat molestias.</p>
        //         <a href="" className="btn btn-outline-success">Get Out</a>
        //     </div>
        // </div>
        
        <section className="card-section">
            <div className="container">
                <div className="row">
                    {
                        cardData.map(card => <TestCard card={card}/> )
                    }
                </div>
            </div>
        </section>
    );
};

export default ShowCard;