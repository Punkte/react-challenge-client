import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LoginView from 'components/pages/LoginView';
import StudentListView from 'components/pages/StudentListView';
import LoginProvider from 'components/context/Login/LoginProvider';

import './App.css';

const App: React.FC = () => {
  return (
    <LoginProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path={['/login', '/inscription']}>
              <LoginView />
            </Route>
            <Route exact path="/list">
              <StudentListView />
            </Route>
            <Route>La ressource demandée n'existe pas.</Route>
          </Switch>
        </Router>
      </div>
    </LoginProvider>
  );
};

export default App;
