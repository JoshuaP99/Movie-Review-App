import React from 'react';
import ReviewList from './ReviewList';

export default class Movie extends React.Component{
render() {
    return (
        <div className="card" style={{backgroundColor: "black", color: "white"}}>
            <img src={this.props.movie.image} className="center"></img>
            <div className="card-title">
                <h2 className='center-text'>{this.props.movie.name}</h2>
            </div>
            <div className="card-text">
                <p className='center-text'>{this.props.movie.synopsis}</p>
            </div>
            <div className="card" style={{backgroundColor: "black", color: "white"}}>
                <br />
                <h4 className='center-text'>User Reviews</h4>
                <ReviewList reviews={this.props.movie.reviews} />
            </div>
      </div>
    );
  }
}