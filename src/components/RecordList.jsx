import React from "react";
import styles from "./RecordList.module.css";
import CalorieRecord from "./CalorieRecord";
import styled from "styled-components";
const List = styled.ul`
  list-style: none;
  padding: 0;
  border: 1px solid #ccc;
  border-radius: 10px;

  & li {
    margin: 10px;
  }
`;
export default function RecordList(props) {
  return (
    <List>
      {props.records.map(({ content, date, calories, meal, id }) => {
        return (
          <li key={id}>
            <CalorieRecord
              content={content}
              meal={meal}
              date={date}
              calories={calories}
            />
          </li>
        );
      })}
    </List>
  );
}
