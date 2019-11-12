import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LoginView from 'components/pages/LoginView';
import StudentListView from 'components/pages/StudentListView';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login">
            <LoginView />
          </Route>
          <Route exact path="/list">
            <StudentListView />
          </Route>
          <Route>
            La ressource demandée n'existe pas.
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
