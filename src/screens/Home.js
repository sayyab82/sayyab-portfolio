import React from 'react';
import './Home.css';
import profileImage from '../images/profile.jpeg';
function Home() {
  return (
    <div className="main-div" id='home'>
        <div className="navdiv">
             <nav className="navbar">

            <div className="logo">
                Sayyab<span>.</span>
            </div >

            <ul className="nav-links">

                <li><a href="#home">Home</a></li>

                <li><a href="#about">About</a></li>

                <li><a href="#skills">Skills</a></li>

                <li><a href="#projects">Projects</a></li>

                <li><a href="#education">Education</a></li>

                <li><a href="#services">Services</a></li>

                <li><a href="#contact">Contact</a></li>

                  </ul>

        </nav>

        </div>

       <div className="hero-content">

        <div className="left">

          <p className="intro">👋 Hello, I'm </p>

          <h1>
            Sayyab <span>Nadeem</span>
          </h1>

          <h2>
            React JS Developer & Software Engineer
          </h2>

          <p className="description">
            I build responsive, modern and scalable web applications using
            React JS, JavaScript, HTML, CSS and REST APIs. Passionate about
            creating clean UI, excellent user experiences and solving
            real-world problems through software.
          </p>

          <div className="buttons">

            <a href="#projects" className="btn primary">
              View Projects
            </a>

            <a
              href="sayyab-82-resume.pdf"
              className="btn secondary"
              download
            >
              Download CV
            </a>

          </div>

          <div className="socials">

            <a href="https://github.com/sayyab82/" target="_blank" rel="noopener noreferrer">
              GitHub https://github.com/sayyab82/
            </a>

            <a href="https://www.linkedin.com/in/sayyab-nadeem-413400275/">
              LinkedIn https://www.linkedin.com/in/sayyab-nadeem-413400275/
            </a>

            <a href="mailto:sayyabnadeem82@gmail.com">
              Email sayyabnadeem82@gmail.com
            </a>

          </div>

        </div>

        <div className="right">

          <div className="image-box">

            <img
                src={profileImage}
                alt="Profile"
            />

          </div>

        </div>

      </div>
    </div>
  );
}
export default Home;