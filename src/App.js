import "./App.css";
import HomePage from "./components/HomePage";
import Setting from "./components/Setting";
import { HashRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Setting} />
          <Route exact path="/homepage/:country" component={HomePage} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
