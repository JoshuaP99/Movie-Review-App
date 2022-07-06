import React from "react";

export default class ReviewForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      reviews: []
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      reviews: [...this.state.reviews, this.state]
    })
  }

  handleChange = e => {
    this.setState({
      reviews: e.target.value
    })
  }

  render(){
    console.log(this.state.reviews)    
      return(
            // <div>
            //     <form onSubmit={this.handleSubmit}>
            //       <input placeholder="Leave a Review" />
            //       <button onClick={this.handleAddReview} className='btn btn-primary'  onChange={this.handleChange}>Post Review</button>
            //       {/* <input type="submit" value="submit" /> */}
            //     </form>
            //     <h1>reviews</h1>
            //     {
            //       this.state.reviews.map((review, index) => (
            //         <p key={index}>{review.reviews}</p>
            //       ))
            //     }
            // </div>

            <div>
        <h3>Review Form</h3>
        {/* form */}
        {/* onSubmit is a callback function that is called when the form is submitted */}
        <form onSubmit={this.handleSubmit}>
          {/* onChange is a callback function that is called when the user types in the form field */}
          <textarea rows={5} name="review" onChange={this.handleChange} />
          <br></br>
          <input type="submit" value="submit" />
        </form>

        {/* Review renders below: */}
        <h3>List of Reviews:</h3>

        {/* The map() function is used to iterate over an array and manipulate or change data items*/}
        {this.state.reviews.map(
          (
            review,
            index //map through the reviews array. index is for unique key prop
          ) => (
            <p key={index}>{review.review}</p> //display the review.
          )
        )}
      </div>

        )
      }
    }
