import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./components/mainPage";
import MainStatsEqui from "./components/statEquivalent/mainStatsEqui";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cube_calc">
          <MainPage />
        </Route>
        <Route path="/monster_life">
          <MainStatsEqui />
        </Route>
      </Switch>
    </Router>
    /* <div className="App">
        <MainPage />
    </div> */
  );
}

export default App;
