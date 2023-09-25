import { useState } from "react";
import styles from "./CaloriesRecordForm.module.css";
import styled from "styled-components";
export default function CaloriesRecordForm(props) {
  const [dateValue, setDateValue] = useState();
  const [mealValue, setMealValue] = useState();
  const [contentValue, setContentValue] = useState();
  const [caloriesValue, setCaloriesValue] = useState();
  const onChangeDateHandler = (e) => {
    setDateValue(e.target.value);
  };
  const onChangeMealHandler = (e) => {
    setMealValue(e.target.value);
  };
  const onChangeContentHandler = (e) => {
    setContentValue(e.target.value);
  };
  const onChangeCaloriesHandler = (e) => {
    setCaloriesValue(e.target.value);
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    console.log(props);
    props.onFormSubmit({
      date: new Date(dateValue),
      content: contentValue,
      calories: caloriesValue,
      meal: mealValue,
    });
    setDateValue(new Date());
    setCaloriesValue("");
    setMealValue("");
    setContentValue("");
  };
  let Form = styled.form`
    & #calories {
      border: ${(props) => props.calories < 0 && "2px soild red"};
      color: ${(props) => props.calories < 0 && "red"};
      background-color: ${(props) => props.calories < 0 && "white"};
    }
  `;
  return (
    <Form calories={caloriesValue}>
      <label htmlFor="date">Date:</label>
      <input
        value={dateValue}
        type="date"
        id="date"
        onChange={onChangeDateHandler}
      ></input>
      <label htmlFor="meal">Meal:</label>
      <select value={mealValue} id="meal" onChange={onChangeMealHandler}>
        <option value="BreakFast">BreakFast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snack">Snack</option>
      </select>
      <label htmlFor="content">Content:</label>
      <input
        value={contentValue}
        type="text"
        id="content"
        onChange={onChangeContentHandler}
      ></input>
      <label htmlFor="calories">Caloires:</label>
      <input
        value={caloriesValue}
        type="number"
        id="calories"
        onChange={onChangeCaloriesHandler}
      ></input>
      <div className={styles.footer}>
        <button onClick={onClickHandler}>Add Record</button>
      </div>
    </Form>
  );
}
