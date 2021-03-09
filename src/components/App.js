import "./App.css";
import { Route, Switch } from "react-router-dom";
import SingUp from "./SingUp/SingUp";
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SingUp} />
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
