import React from "react";
import Stars from "./Stars";

export default class ReviewList extends React.Component{
    render(){
        return(
            <div className="card">
                <textarea className="form-control" placeholder="Write a Review" value={this.props.review}></textarea>
                <Stars></Stars>
                <button className='btn btn-primary col-2 mx-auto' value={this.props.input}>Post Review</button>
            </div>

        )
    }

}