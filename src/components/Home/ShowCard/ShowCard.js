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