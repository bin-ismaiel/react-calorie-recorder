import React from "react";
import "./RecordList.css";
import CalorieRecord from "./CalorieRecord";
export default function RecordList(props) {
  return (
    <ul className="record-list">
      {props.records.map(({ content, date, calories, meal }) => {
        return (
          <li>
            <CalorieRecord
              content={content}
              meal={meal}
              date={date}
              calories={calories}
            />
          </li>
        );
      })}
    </ul>
  );
}
