import React from "react";
import "./ShowList.css";
import ShowListing from "../ShowListing/ShowLisitng";

class ShowList extends React.Component {
  render() {
    return (
      <div style={{display: (this.props.shows.length>0 ?'inherit':'none')}}>
        <h1>{this.props.title}</h1>
        <div className = 'horizontalRule'/>
        {this.props.shows &&
          this.props.shows.map(show => {
            return <ShowListing 
              key={show.headliner} 
              {...show} 
              onClick={() =>this.props.onClick(show.headliner)} 
            />;
          })}
      </div>
    );
  }
}

export default ShowList;
