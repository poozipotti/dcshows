import React from "react";
import "./Timeline.css";
import TimelineNode from "../TimelineNode/TimelineNode";
import TimelineConnector from "../TimelineConnector/TimeLineConnector";

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.isActive = this.isActive.bind(this);
    this.getOnClick = this.getOnClick.bind(this);
  }
  isActive = date => {
    return (
      (date.month === this.props.startDate.month &&
        date.year === this.props.startDate.year) ||
      (date.month === this.props.endDate.month &&
        date.year === this.props.endDate.year)
    );
  };
  getOnClick = date => {

      if(this.props.selectedDate != null){
        return () => {
          this.props.onClickConfirm(date);
        }
      }
      else if(this.isActive(date)){
        return () => {
          this.props.onClickSelect(date);
        }
      }else{
        return () => {
        }
      } 
  }
  render() {
    return (
      <div className="timelineContainer">
        {this.props.dates &&
          this.props.dates.map((date, index) => {
            return (
              <div className="timelineContainer" key={date.month + '-' + date.year}>
                <TimelineNode
                  key={date.month + "-" + date.year + Math.random()}
                  selectable={this.props.selectedDate != null}
                  active={this.isActive(date)}
                  onClick={this.getOnClick(date)}
                  selected={
                    this.props.selectedDate &&
                    date.month === this.props.selectedDate.month &&
                    date.year === this.props.selectedDate.year
                  }
                  date={date}
                />
                {index < this.props.dates.length - 1 ? (
                  <TimelineConnector
                    key={date.month + "-" + date.year + "-" + Math.random()}
                  />
                ) : null}
              </div>
            );
          })}
      </div>
    );
  }
}

export default Timeline;
