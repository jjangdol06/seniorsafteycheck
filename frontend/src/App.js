import React from 'react';
import Dashboard from './components/Dashboard';
import NavbarTemplate from './components/NavbarTemplate';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <NavbarTemplate/>
      <Dashboard/>
    </div>
  );
};

export default App;