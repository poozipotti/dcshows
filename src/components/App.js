import React from 'react';
import './App.css';
import TrackedShows from '../containers/TrackedShows';
import UntrackedShows from '../containers/UntrackedShows';
import Navbar from '../components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TrackedShows/>
      <UntrackedShows/>
    </div>
  );
}

export default App;
