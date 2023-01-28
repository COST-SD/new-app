import React, { Component } from "react";

const NewsItem= (props)=> {
    

        let { title, description, imageUrl,url,author,date,source } = props;
        return (
            <div className="my-1">
                <div className="card">
                    <img src={!imageUrl?"https://www.ndtv.com/india-news/wipro-sacks-450-freshers-for-poor-performance-in-latest-tech-layoffs-3714138":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body"> 
                    <h5 className="card-title">{title}
                        <span className="position-absolute top-0 badge rounded-pill bg-danger" style={{left:'50%',zIndex:'1'}}>{source}</span>
                        </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-danger">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                        <a href={url} target="_blank" className="btn btn-primary">
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        );
        }

export default NewsItem;
