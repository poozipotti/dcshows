import React from "react";
import "./Timeline.css";
import TimelineNode from "./TimelineNode/TimelineNode";
import Connector from "./Connetctor/Connector";

class Timeline extends React.Component {
  render() {
    return (
      <div className="timelineContainer">
        {this.props.dates && this.props.dates.map((date, index) => {
          return (
            <div>
              <TimelineNode
                active={
                  date.month == this.props.startMonth ||
                  date.month == this.props.endMonth
                }
                month={date.month}
                day={date.day}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Timeline;
