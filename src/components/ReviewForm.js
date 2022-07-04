import React from "react";
import Review from "./Review";

export default class ReiewForm extends React.Component{
    render(){
        this.state = {
            input: ""
          };

        let reviews = []

        handleChange = e => {
            this.setState({
              newPlayerName: e.target.value
            });
          }

        handleAddReview() {
            let ()
        }

        return(
            <div className="card">
                <input type="text" placeholder="Leave a Review" value={this.state.input} onChange={this.handleChange}></input>
                <button onClick={this.handleAddReview} className='btn btn-primary'>Post Review</button>
            </div>

        )
    }
}