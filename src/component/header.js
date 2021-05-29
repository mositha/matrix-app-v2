import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <div style={{ padding: 10 }}>
      <Link to="/">Dashboard</Link>
      &nbsp;&nbsp;
      <Link to="/student">Student</Link>
    </div>
  );
};

export default MainMenu;
