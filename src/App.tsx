import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import StudentListView from 'components/pages/StudentListView';
import LoginProvider from 'components/context/Login/LoginProvider';
import LoginSteps from 'components/pages/LoginSteps';
import Dashboard from 'components/pages/Dashboard';

import './App.css';
import api, { getUsers, getPromos, createUser, updateUserById } from 'helpers/api';
import { ISkillUser, ISkill } from 'models/Skill';
import UserProfile from 'components/pages/UserProfile';
import EditProfile from 'components/pages/EditProfile';

const App: React.FC = () => {
  return (
    <LoginProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path={['/login', '/inscription']}>
              <LoginSteps />
            </Route>
            <Route exact path={"/"}>
              <Dashboard />
            </Route>
            <Route exact path="/list">
              <StudentListView />
            </Route>
            <Route path="/profile/:id" >
              <UserProfile />
            </Route>
            <Route path="/edit-profile/:id" >
              <EditProfile />
            </Route>
            <Route>La ressource demandée n'existe pas.</Route>
          </Switch>
        </Router>
      </div>
    </LoginProvider>
  );
};

export default App;
