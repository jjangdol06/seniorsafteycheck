import React from 'react';
import Dashboard from './components/Dashboard';
import Management from './components/Management';
import NavbarTemplate from './components/NavbarTemplate';
import LoginTemplate from './components/LoginTemplate';
import SigninInsert from './components/SigninInsert';
import SigninTemplate from './components/SigninTemplate';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavbarTemplate/>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/management" component = {Management}/>
          <Route path="/login" component = {LoginTemplate}/>
          <Route path="/signin" children = {SigninInsert} component = {SigninTemplate}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;