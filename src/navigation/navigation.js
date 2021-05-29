import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Footer } from "../component";
import { Dashboard, Student } from "../pages";

const Navigation = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/student">
            <Student />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default Navigation;
