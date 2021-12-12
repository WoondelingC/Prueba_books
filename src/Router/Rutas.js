import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Form from "../Pages/Form";
import Books from "../Pages/Books";

const Index = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/form" component={Form} />
        </Switch>
        <Redirect to="/"/>
      </Router>
    </div>
  );
};

export default Index;
