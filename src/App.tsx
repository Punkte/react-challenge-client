import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LoginView from 'components/pages/LoginView';
import StudentListView from 'components/pages/StudentListView';
import LoginProvider from 'components/context/Login/LoginProvider';
import LoginSteps from 'components/pages/LoginSteps';

import './App.css';
import { getUsers, getPromos, createUser } from 'helpers/api';

const App: React.FC = () => {
  useEffect(() => {
    (async () => {
      console.log('useeffect')
      const students = await createUser({
        first_name: 'salah',
        last_name: 'yolo',
        gender: 'M',
        desc: 'je m\'appelle salah',
        email: 'sal@gmail.com'
      }, '5e1e12b7c2c07500243c3d77');
      console.log('=====')
      console.log(students)
      console.log('=====')
    })()
  }, [])
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
