import React from 'react';
import './App.scss';
import EmployeeCards from './Containers/EmployeeCard';

const App = () => {
  return (
    <>
      <h1>Ticket Tracker</h1>
      <EmployeeCards />
    </>
  );
};

export default App;
