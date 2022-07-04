import React from "react";
import ReviewList from "./ReviewList"

export default class Review extends React.Component{
    render(){
        return(
            <div className="card">
                <ReviewList></ReviewList>
            </div>
        )
    }
}