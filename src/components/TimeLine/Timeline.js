import React from "react";
import "./Timeline.css";
import TimelineNode from "../TimelineNode/TimelineNode";
import TimelineConnector from "../TimelineConnector/TimeLineConnector";

class Timeline extends React.Component {
  render() {
    return (
      <div className="timelineContainer">
        {this.props.dates &&
          this.props.dates.map((date, index) => {
            return (
              <div className="timelineContainer">
                <TimelineNode 
                  key = {date.month +'-'+ date.year}
                  active={
                    (date.month === this.props.startDate.month && date.year === this.props.startDate.year) ||
                    (date.month === this.props.endDate.month && date.year === this.props.endDate.year)
                  }
                  date={date}
                />
                {index < this.props.dates.length-1 ? <TimelineConnector key={date.month +'-' + date.year + '-' + Math.random()}/> : null }
              </div>
            );
          })}
      </div>
    );
  }
}

export default Timeline;
