import React from "react";
import "./Timeline.css";
import TimelineNode from "../TimelineNode/TimelineNode";
import TimelineConnector from "../TimelineConnector/TimeLineConnector";

class Timeline extends React.Component {
  render() {
    return (
      <div className="timelineContainer">
        {this.props.months &&
          this.props.months.map((date, index) => {
            return (
              <div className="timelineContainer">
                <TimelineNode 
                  key = {date.month}
                  active={
                    date.month === this.props.startMonth ||
                    date.month === this.props.endMonth
                  }
                  month={date.month}
                />
                {index < this.props.months.length-1 ? <TimelineConnector key={date.month*9999}/> : null }
              </div>
            );
          })}
      </div>
    );
  }
}

export default Timeline;
