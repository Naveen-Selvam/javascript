import React from "react";
import UserForm from "./UserForm";
import "./App.css";
import { Route } from "react-router-dom";
import SuccesfullySubmit from "./SuccesfullySubmit";
import Dashboard from "./Dashboard";
import Login from "./Login";

const App = (props) => {
  return (
    <div>
      <Route path="/" exact render={(props) => <UserForm {...props} />} />
      <Route path="/login" exact component={Login} />
      <Route
        path="/submit"
        exact
        render={(props) => <SuccesfullySubmit {...props} />}
      />
      <Route
        path="/login/dashboard"
        exact
        render={(props) => <Dashboard {...props} />}
      />
    </div>
  );
};

export default App;
