import React from "react";
import './TimelineNode.css';
const monthMap = {
  1:'jan',
  2:'feb',
  3:'mar',
  4:'apr',
  5:'may',
  6:'jun',
  7:'jul',
  8:'aug',
  9:'sep',
  10:'oct',
  11:'nov',
  12:'dec'
}
class TimelineNode extends React.Component {
  render() {
    return (
      <div className="nodeContainer">
        <div className={this.props.active ? "nodeSelected" : "node"}></div>
        <span className="nodeLabel">{monthMap[this.props.date.month]}</span>
      </div>
    );
  }
}

export default TimelineNode;
