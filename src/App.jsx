import { useState } from "react";
import CaloriesRecordForm from "./components/CaloriesRecordForm";
import RecordList from "./components/RecordList";

const initRecords = [
  {
    id: 0,
    date: new Date(2023, 9, 12),
    content: "egg+beans",
    meal: "BreakFast",
    calories: 340,
  },
  {
    id: 1,
    date: new Date(2023, 2, 12),
    content: "Chicken",
    meal: "Lunch",
    calories: 540,
  },
  {
    id: 2,
    date: new Date(2023, 3, 12),
    content: "Chocolate",
    meal: "Snacks",
    calories: 100,
  },
];
function App() {
  const [nextId, setNextId] = useState(3);
  const [records, setRecords] = useState(initRecords);
  const formSumbitHandler = (record) => {
    const formattedRecord = {
      ...record,
      id: nextId,
    };
    setNextId((prev) => prev + 1);
    setRecords([formattedRecord, ...records]);
  };
  return (
    <>
      <CaloriesRecordForm onFormSubmit={formSumbitHandler} />
      <RecordList records={records} />
    </>
  );
}

export default App;
