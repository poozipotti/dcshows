import React from "react";

class ShowListing extends React.Component {
  render() {
    return (
      <div onClick={this.props.onClick} style={{color: this.props.tracked ? 'gold':'white'}} className='ShowListing'>
          <h2>{this.props.headliner}</h2>
          <p>{this.props.otherBands}</p>
          <p>{this.props.month}/{this.props.day}</p>
          <p>{this.props.location}</p>
          <p>
            {this.props.description}
          </p>
      </div>
    );
  }
}

export default ShowListing;