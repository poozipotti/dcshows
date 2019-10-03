import React from 'react';
import './App.css';
import TrackedShows from '../containers/TrackedShows';
import UntrackedShows from '../containers/UntrackedShows';
import TimeFilter from '../containers/TimeFilter';

function App() {
  return (
    <div className="App">
      <h1>Shows</h1>
      <TimeFilter/>
      <TrackedShows/>
      <UntrackedShows/>
    </div>
  );
}

export default App;
