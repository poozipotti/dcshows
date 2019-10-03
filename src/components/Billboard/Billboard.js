import React from "react";
import "./Billboard.css";
import ShowListing from "./ShowListing/ShowLisitng";

class Billboard extends React.Component {
  render() {
    return (
      <div>
        {this.props.shows &&
          this.props.shows.map(show => {
            return <ShowListing {...show} />;
          })}
      </div>
    );
  }
}

export default Billboard;
