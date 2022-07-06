import React from "react";
import ReviewList from "./ReviewList"
import ReviewForm from "./ReviewForm";

export default class Review extends React.Component{
    render(){
        return(
            <div className="card">
                <ReviewForm />
            </div>
        )
    }
}