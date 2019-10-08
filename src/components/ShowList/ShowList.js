import React from "react";
import "./ShowList.css";
import ShowListing from "../ShowListing/ShowLisitng";

const ShowList = props => {
  return (
    <div style={{ display: (props.shows.length > 0 ? 'inherit' : 'none') }}>
      <h1>{props.title}</h1>
      <div className='horizontalRule' />
      {props.shows &&
        props.shows.map(show => {
          return <ShowListing
            key={show.headliner}
            {...show}
            onClick={() => props.onClick(show.headliner,show.tracked)}
          />;
        })}
    </div>
  );
}

export default ShowList;
