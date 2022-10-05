import React from "react";
import Navbar from "./navbar";
import Banner from "./banner";
const Homepage = () => {
  return (
    <div className="homepage">
    <div className="image-section">
     <div className="background-img" >
      <Navbar />
     <Banner/>
      </div>
      </div>
    </div>
  );
};

export default Homepage;
