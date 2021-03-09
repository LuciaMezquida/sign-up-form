import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import Home from "./Home/Home";

function App() {
  const [userName, setUserName] = useState("");
  //Get the user name to pass it throw props to home component
  const saveUserName = (user) => {
    setUserName(user);
  };
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <SignUp setUserName={saveUserName} userName={userName} />
        </Route>
        <Route path="/home">
          <Home userName={userName} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
