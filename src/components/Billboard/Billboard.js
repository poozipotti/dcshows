import React from "react";
import "./Billboard.css";
import ShowListing from "./ShowListing/ShowLisitng";

class Billboard extends React.Component {
  render() {
    return (
      <div>
        {this.props.shows &&
          this.props.shows.map(show => {
            return <ShowListing key={show.headliner} {...show} toggleShow={() =>this.props.toggleShow(show.headliner)} />;
          })}
      </div>
    );
  }
}

export default Billboard;
