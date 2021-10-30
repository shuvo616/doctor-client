import React from 'react';

const BlogPost = (props) => {
    const {img,name,date,title,description} = props.blogData;
    return (
        <div className="col-md-4">
            <div className="card p-4">
                <div className="parentDiv d-flex mb-3">
                    <div className="imageDiv">
                        <img src={img} alt="" />
                    </div>
                    <div className="contentDiv ms-3 p-3">
                        <h5>{name}</h5>
                        <h6 className="text-muted">{date}</h6>
                    </div>
                </div>
                <h4>{title}</h4>
                <p className="text-start">{description}</p>
                <button className="btn btn-outline-info">Read More</button>
            </div>
        </div>
    );
};

export default BlogPost;