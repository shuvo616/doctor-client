import React from 'react';
import './Blog.css'
import quota from '../../../images/quote.png';
import wilson from '../../../images/wilson.png';
import BlogPost from '../BlogPost/BlogPost';

const blogData = [
    {
        img: wilson,
        name: 'Will Son',
        date: '10th April 2021',
        title: 'Brush your teeth twice a day',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, id expedita consequuntur autem amet accusamus illum pariatur cumque. Quidem soluta qui quae temporibus sapiente! Quidem quae cupiditate unde itaque optio, deserunt laudantium veritatis sed atque.'
    },
    {
        img: wilson,
        name: 'Will Son',
        date: '10th April 2021',
        title: 'Brush your teeth twice a day',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, id expedita consequuntur autem amet accusamus illum pariatur cumque. Quidem soluta qui quae temporibus sapiente! Quidem quae cupiditate unde itaque optio, deserunt laudantium veritatis sed atque.'
    },
    {
        img: wilson,
        name: 'Will Son',
        date: '10th April 2021',
        title: 'Brush your teeth twice a day',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, id expedita consequuntur autem amet accusamus illum pariatur cumque. Quidem soluta qui quae temporibus sapiente! Quidem quae cupiditate unde itaque optio, deserunt laudantium veritatis sed atque.'
    }
]

const Blog = () => {
    return (
        <section className="blogSection bg-info my-5 py-5">
            <div className="container">

                <div className="row mb-3">
                    <div className="col-md-6">
                        <h6 className="text-white">Blog Post</h6>
                        <h4 className="text-white">Valuable Blogs by Patient's</h4>
                    </div>
                    <div className="col-md-6">
                        <img src={quota} alt="" className="img-fluid w-25 float-end "/>
                    </div>
                </div>

                <div className="row">
                    {
                        blogData.map(blogData => <BlogPost blogData={blogData}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;