import "./About.css";
import profile from "../images/profile.jpeg";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-section-title">
        <h4>ABOUT ME</h4>
        <h2>Get To Know Me Better</h2>
      </div>

      <div className="about-container">

        <div className="about-image">

          <div className="image-card">
            <img src={profile} alt="Sayyab Nadeem" />
          </div>

        </div>

        <div className="about-content">

          <h2>
            I'm <span>Sayyab Nadeem</span>
          </h2>

          <h3>
            React JS & React Native Developer & Software Engineer
          </h3>

          <p>
            I am a passionate Software Engineering graduate with a strong
            interest in creating modern, responsive and user-friendly web
            applications. My primary focus is React JS, where I enjoy turning
            ideas into interactive digital experiences.
          </p>

          <p>
            I continuously improve my skills by building real-world projects,
            learning modern frontend technologies and following industry best
            practices. My goal is to deliver clean, scalable and high-quality
            applications that provide an exceptional user experience.
          </p>

          <div className="skills-tags">

            <span>React JS</span>
            <span>React Native</span>
            <span>JavaScript</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>REST APIs</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>Responsive UI</span>

          </div>

          <div className="info-grid">

            <div>
              <h5>Name</h5>
              <p>Sayyab Nadeem</p>
            </div>

            <div>
              <h5>Email</h5>
              <p>sayyabnadeem82@gmail.com</p>
            </div>

            <div>
              <h5>Education</h5>
              <p>BS Software Engineering</p>
            </div>

            <div>
              <h5>Location</h5>
              <p>Pakistan</p>
            </div>

          </div>

          <a href="sayyab-82-resume.pdf" className="about-btn" download>
            Download CV
          </a>

        </div>

      </div>

      <div className="stats">

        <div className="stat-card">
          <h2>10+</h2>
          <p>Projects</p>
        </div>

        <div className="stat-card">
          <h2>8+</h2>
          <p>Technologies</p>
        </div>

        <div className="stat-card">
          <h2>100%</h2>
          <p>Dedication</p>
        </div>

      </div>

    </section>
  );
}

export default About;