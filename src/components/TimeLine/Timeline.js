import React from "react";
import "./Timeline.css";
import TimelineNode from "../TimelineNode/TimelineNode";
import TimelineConnector from "../TimelineConnector/TimeLineConnector";

const Timeline = props => {
  const isActive = date => {
    return (
      (date.month === props.startDate.month &&
        date.year === props.startDate.year) ||
      (date.month === props.endDate.month &&
        date.year === props.endDate.year)
    );
  };
  const getOnClick = date => {

    if (props.selectedDate != null) {
      return () => {
        props.onClickConfirm(date);
      }
    }
    else if (isActive(date)) {
      return () => {
        props.onClickSelect(date);
      }
    } else {
      return () => {
      }
    }
  }
  return (
    <div className="timelineContainer">
      {props.dates &&
        props.dates.map((date, index) => {
          return (
            <div className="timelineContainer" key={date.month + '-' + date.year}>
              <TimelineNode
                key={date.month + "-" + date.year + Math.random()}
                selectable={props.selectedDate != null}
                active={isActive(date)}
                onClick={getOnClick(date)}
                selected={
                  props.selectedDate &&
                  date.month === props.selectedDate.month &&
                  date.year === props.selectedDate.year
                }
                date={date}
              />
              {index < props.dates.length - 1 ? (
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

export default Timeline;
