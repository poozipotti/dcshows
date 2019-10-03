import React from "react";
import "../Timeline.css";

class Timeline extends React.Component {
  render() {
    return (
      <div className="nodeContainer">
        <div className={this.props.active ? "nodeSelected" : "node"}></div>
        <span className="nodeLabel">{this.props.month}/{this.props.day}</span>
      </div>
    );
  }
}

export default Timeline;
