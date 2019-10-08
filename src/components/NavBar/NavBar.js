import React from "react";
import "./Navbar.css";
import TimeFilter from "../../containers/TimeFilter";

const Navbar =  () => {
  return (
    <div>
      <div className="Navbar">
        <h1 className="navbarTitle">Shows To Look Out For</h1>
        <div className='playButton'>
          <iframe
            title='playlist'
            src="https://open.spotify.com/embed/playlist/4IjrjeUI5eJKnwS2mcxNv7?si=QlCP49CyR36tXUe-KKDY-A"
            width="300"
            height="80"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
        <TimeFilter />
      </div>
      <div className="initialBuffer" />
    </div>
  );
}

export default Navbar;
