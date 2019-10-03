import React from "react";

class ShowListing extends React.Component {
  render() {
    return (
      <div onClick={this.props.onClick} style={{color: this.props.tracked ? 'gold':'white'}}>
          <h2>{this.props.headliner}</h2>
          <h3>{this.props.otherBands}</h3>
          <h3>{this.props.month}/{this.props.day}</h3>
          <h4>{this.props.location}</h4>
          <p>
            {this.props.description}
          </p>
      </div>
    );
  }
}

export default ShowListing;