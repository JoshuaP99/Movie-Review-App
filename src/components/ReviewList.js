import React from "react";

export default class ReviewList extends React.Component{
    render(){
        return(
            <div className="card">
                <input className="form-control" placeholder="Write a Review"></input>
                <button className='btn btn-primary'>Post Review</button>
            </div>

        )
    }
}