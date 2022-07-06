import React from 'react';
import '../App.css';

export default class Stars extends React.Component{
    render(){
        return(
          <div class="dropdown col-lg mx-auto">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Rating
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <button>1 Star</button>
              <li><a class="dropdown-item">1 Star</a></li>
              <li><a class="dropdown-item" >1 Star</a></li>
              <li><a class="dropdown-item" >1 Star</a></li>
              <li><a class="dropdown-item" >1 Star</a></li>
            </ul>
          </div>
        )
    }
}