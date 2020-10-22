import React from 'react';
import Dashboard from './components/Dashboard';
import Management from './components/Management';
import NavbarTemplate from './components/NavbarTemplate';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavbarTemplate/>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/management" component = {Management}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;