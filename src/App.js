import React from 'react';
import './App.css';
import Companies from './Component/Companies/Companies';
import Clients from './Component/Clients/Clients';
import Users from './Component/User/Users';

function App() {
  return (
    <div className="App">
      <Users/>
      <Clients/>
      <Companies/>
    </div>
  );
}

export default App;
