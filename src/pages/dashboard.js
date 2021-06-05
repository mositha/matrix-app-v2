import React, { useState } from "react";
import { DivBox } from "../component";
import { Sample } from "../pages/index";
const testData = [
  { name: "Tom", age: "25", school: "Colombo" },
  { name: "James", age: "26", school: "Kandy" },
  { name: "Jane", age: "25", school: "Galle" },
  { name: "Steven", age: "22", school: "Colombo" },
];

const Dashboard = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);
  return (
    <div id="mainDiv">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>GO</button>
      <p>{todos[0].text}</p>
      <button onClick={() => setTodos([{ text: "hi" }])}>Change text</button>
      {/* <Sample count={100} /> */}
      <h4>Dashboard</h4>
      {testData.map((item, index) => {
        return (
          <DivBox
            style={{ border: "orange thin solid", padding: 10 }}
            key={index}
            data={item}
          />
        );
      })}
    </div>
  );
};

export default Dashboard;
