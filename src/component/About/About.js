import React from "react";
import "./AboutMe.css";
import pic from "./assets/akshay.jpg";

const About = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-content">
        {/* Image Section */}
        <div className="about-me-image">
          <img src={pic} alt="Your Name" />
        </div>

        {/* Text Section */}
        <div className="about-me-text">
          <h1>About Me</h1>
          <p>
            Hi! I'm Akshay Raj, a passionate Full Stack Developer with a love
            for building web applications that make a difference. With
            experience in both front-end and back-end technologies, I enjoy
            creating seamless and user-friendly experiences.
          </p>
          <p>
            My expertise includes working with technologies like React, Node.js,
            Express, and databases such as MongoDB and PostgreSQL. I'm always
            eager to learn new tools and improve my skills to deliver the best
            solutions for my projects.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or enjoying outdoor
            activities. Let's connect and build something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
