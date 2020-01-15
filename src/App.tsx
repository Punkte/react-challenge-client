import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LoginView from 'components/pages/LoginView';
import StudentListView from 'components/pages/StudentListView';
import LoginProvider from 'components/context/Login/LoginProvider';
import LoginSteps from 'components/pages/LoginSteps';

import './App.css';
import api, { getUsers, getPromos, createUser, updateUserById } from 'helpers/api';
import { ISkillUser, ISkill } from 'models/Skill';

const App: React.FC = () => {
  return (
    <LoginProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path={['/login', '/inscription']}>
              <LoginSteps />
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
