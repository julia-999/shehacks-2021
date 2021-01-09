import React from "react";
import './Home.css';
import roomImage from './sven-brandsma-GmRiN7tVW1w-unsplash.jpg';

class Home extends React.Component {
  render() {
    return(
      <div className="home">
        {/* <img src={roomImage}  alt="image of decorated room" style={{width: "100%", height: "auto"}}/> */}
        <svg height="600" width="600" position="absolute">
          <circle cx="300" cy="400" r="200" />
        </svg>
      </div>
    );
  }
}

export default Home;
