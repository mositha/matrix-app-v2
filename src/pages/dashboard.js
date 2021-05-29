import { DivBox } from "../component";
const testData = [
  { name: "Tom", age: "25", school: "Colombo" },
  { name: "James", age: "26", school: "Kandy" },
  { name: "Jane", age: "25", school: "Galle" },
  { name: "Steven", age: "22", school: "Colombo" },
];

const Dashboard = () => {
  return (
    <div id="mainDiv">
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

      {testData.map((item, index) => {
        return (
          <DivBox
            style={{
              border: "red thin solid",
              backgroundColor: "green",
              padding: 10,
            }}
            key={index}
            data={item}
          />
        );
      })}
    </div>
  );
};

export default Dashboard;
