import React from 'react';
import Timeline from './TimeLine/Timeline';
import TrackShow from '../containers/TrackShow';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Shows</h1>
      <Timeline/>
      <TrackShow/>
    </div>
  );
}

export default App;
