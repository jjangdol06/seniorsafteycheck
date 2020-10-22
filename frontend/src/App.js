import React from 'react';
import Dashboard from './components/Dashboard';
import Management from './components/Management';
import NavbarTemplate from './components/NavbarTemplate';
import LoginTemplate from './components/LoginTemplate';
import SigninInsert from './components/SigninInsert';
import SigninTemplate from './components/SigninTemplate';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import { Route, Switch, BrowserRouter } from 'react-router-dom';
=======
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import LoginTemplate from './components/LoginTemplate';
>>>>>>> 38449d6c996f3e26236357a3ee7a5559c8a154bb

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavbarTemplate/>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
<<<<<<< HEAD
          <Route path="/management" component = {Management}/>
          <Route path="/login" component = {LoginTemplate}/>
          <Route path="/signin" children = {SigninInsert} component = {SigninTemplate}/>
=======
          <Route path="/management" component={Management}/>
          <Route path="/login" component={LoginTemplate}/>
>>>>>>> 38449d6c996f3e26236357a3ee7a5559c8a154bb
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;