import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src = {require('../../assets/Images/1710405630689.jpg')} alt = '' />

            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                My name is Sanskriti Singh, currently persuing my B.Tech in Computer Science at Madan Mohan Malaviya University Of Technology, Gorakhpur.
                I am skilled in C++ and problem solving and have a good knowledge in data structure and algorithms.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;