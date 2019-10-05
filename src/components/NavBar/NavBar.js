import React from 'react';
import './Navbar.css';
import TimeFilter from '../../containers/TimeFilter';

function App() {
  return (
    <div>

    <div className="Navbar">
      <h1 className="navbarTitle">Shows</h1>
      <TimeFilter/>
    </div>
    <div className="initialBuffer"/>
    </div>
  );
}

export default App;
