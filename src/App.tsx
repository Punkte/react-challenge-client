import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from 'components/pages/Home';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
};

export default App;
