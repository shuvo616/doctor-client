import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'

const infoData = [
    {
        title: 'Opening hours',
        description: 'We are open 24/7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit our Location',
        description: 'Broklin, NewYork 1111, USA',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Call US Now',
        description: '+22 1122 1111',
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="row w-75">
                {
                    infoData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;