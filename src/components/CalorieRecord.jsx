import "./CalorieRecord.css";
import CalorieRecordDate from "./CalorieRecordDate";
import StyledRecordCell from "./common/StyledRecordCell";

export default function CalorieRecord(props) {
  return (
    <ul className="record">
      <li>
        <CalorieRecordDate date={props.date}></CalorieRecordDate>
      </li>
      <li>{props.content}</li>
      <li>{props.meal}</li>
      <li className="record-calories">
        <StyledRecordCell> {props.calories}</StyledRecordCell>
      </li>
    </ul>
  );
}
