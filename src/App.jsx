import RecordList from "./components/RecordList";
const records = [
  {
    date: new Date(2023, 9, 12),
    content: "egg+beans",
    meal: "BreakFast",
    calories: 340,
  },
  {
    date: new Date(2023, 2, 12),
    content: "Chicken",
    meal: "Lunch",
    calories: 540,
  },
  {
    date: new Date(2023, 3, 12),
    content: "Chocolate",
    meal: "Snacks",
    calories: 100,
  },
];
function App() {
  return (
    <>
      <RecordList records={records} />
    </>
  );
}

export default App;
