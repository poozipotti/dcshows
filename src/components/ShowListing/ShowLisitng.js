import React from "react";
import './ShowListing.css'

const ShowListing = props => {
    return (
      <div onClick={props.onClick} style={{color: props.tracked ? 'gold':'white'}} className='ShowListing'>
          <h2>{props.headliner}</h2>
          <p>{props.otherBands}</p>
          <p>{props.month}/{props.day}</p>
          <p>{props.location}</p>
          <p>
            {props.description}
          </p>
      </div>
    );
}

export default ShowListing;