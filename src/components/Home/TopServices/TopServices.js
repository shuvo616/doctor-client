import React from 'react';
import gastrology from '../../../images/gastro.jpg';
import general from '../../../images/general.jpg';
import dental from '../../../images/dental.jpg';
import TopServiceDetail from '../TopServiceDetail/TopServiceDetail';

const topServiceData = [
    {
        img: gastrology,
        title: 'Gastroenterology',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
    },
    {
        img: general,
        title: 'Laparoscopic-Surgery',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
    },
    {
        img: dental,
        title: 'Dental-Maxillofacial-Surgery',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
    }
]

const TopServices = () => {
    return (
        <div className="top-service mt-5 mb-5">
            <h2 className="text-center">Best Services</h2>
            <div className="container mt-5">
                <div className="row">
                    {
                        topServiceData.map(topService => <TopServiceDetail topService={topService}></TopServiceDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TopServices;