import React from "react";

export default class Review extends React.Component{
    render(){
        return (
            <div className="card" id="review" style={{backgroundColor: "black", color: "white"}}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.review.author}</h5>
                    <p className="card-text">
                        {this.props.review.rating} <br/>
                        "{this.props.review.text}"
                    </p>
                </div>
            </div>
        )
    }
}