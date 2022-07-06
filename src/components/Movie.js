import React from 'react';
import Review from './Review';

export default class Movie extends React.Component{
    render(){
        return(
            <div className='card'>
                <h3 className='center-text'>{this.props.name}</h3>
                <img src={this.props.image} className="center"></img>
                <div className='card-body'>
                    <h2 className='center-text'>{this.props.release}</h2>
                    <p className='center-text'>{this.props.synopsis}</p>
                </div>
                <div className='card-body'>
                    <Review></Review>
                </div>
            </div>            
        )
    }
}