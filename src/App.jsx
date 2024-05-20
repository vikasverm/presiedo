import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PropertyPage from './pages/PropertyPage';
import DashboardPage from './pages/DashboardPage';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/property" component={PropertyPage} />
          <Route path="/dashboard" component={DashboardPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
