import React from 'react';
import quota from '../../../images/quote.png';
import ema from '../../../images/ema.png';
import PatientOpinionData from '../PatientOpinionData/PatientOpinionData';


const opinionData = [
    {
        quote : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vero mollitia, assumenda molestias error neque veniam. Iusto illum expedita, sit eveniet facilis necessitatibus minus voluptates quia facere atque accusantium beatae!",
        name : "Wilson Harry",
        city: "California",
        img: ema
    },
    {
        quote : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vero mollitia, assumenda molestias error neque veniam. Iusto illum expedita, sit eveniet facilis necessitatibus minus voluptates quia facere atque accusantium beatae!",
        name : "Wilson Harry",
        city: "California",
        img: ema
    },
    {
        quote : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vero mollitia, assumenda molestias error neque veniam. Iusto illum expedita, sit eveniet facilis necessitatibus minus voluptates quia facere atque accusantium beatae!",
        name : "Wilson Harry",
        city: "California",
        img: ema
    }
]

const PatientOpinion = () => {
    return (
        <section className="patientOpinion bg-warning my-5 py-5">
            <div className="container">
                <div className="row mb-3">
                    <div className="col-md-6">
                        <h6 className="text-white">Patient Opinion</h6>
                        <h4 className="text-white">What's Our Patient Say's</h4>
                    </div>
                    <div className="col-md-6">
                        <img src={quota} alt="" className="img-fluid w-25 float-end "/>
                    </div>
                </div>
                <div className="row">
                    {
                        opinionData.map(opinionData => <PatientOpinionData opinionData={opinionData}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default PatientOpinion;