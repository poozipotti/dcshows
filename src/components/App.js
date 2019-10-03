import React from 'react';
import Timeline from './TimeLine/Timeline';
import Billboard from './Billboard/Billboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Shows</h1>
      <Timeline/>
      <Billboard/>
    </div>
  );
}

export default App;
