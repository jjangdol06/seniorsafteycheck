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
>>>>>>> 69cf986fe0eeafd604a0ef523a8825a280d176a7

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavbarTemplate/>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/management/:id" component = {Management}/>
          <Route path="/login" component = {LoginTemplate}/>
          <Route path="/signin" children = {SigninInsert} component = {SigninTemplate}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;