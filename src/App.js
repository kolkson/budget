import React from 'react';
import GlobalStyles from './index.css';
import { Budget } from './components'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";


function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact to="/" component={Budget} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
