import "./Projects.css";
import { useState } from "react";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaUserTie,
  FaLaptopCode,
  FaCalendarAlt,
  FaFlagCheckered,
} from "react-icons/fa";

/* ERP Images */

import erp1 from "../images/erp/dashboard.png";
import erp2 from "../images/erp/crm.png";
import erp3 from "../images/erp/vendors.png";
import erp4 from "../images/erp/reports.png";

/* Portfolio Images */

import port1 from "../images/portfolio/home.png";
import port2 from "../images/portfolio/about.png";
import port3 from "../images/portfolio/skills.png";
import port4 from "../images/portfolio/contact.png";

/* React Native Images */

import rn1 from "../images/reactnative/home.png";
import rn2 from "../images/reactnative/login.png";
import rn3 from "../images/reactnative/profile.png";
import rn4 from "../images/reactnative/settings.png";

function Projects() {

  const projects = [

    {

      title: "ERP Dashboard",

      description:
        "A modern ERP Dashboard built with React JS featuring CRM, Vendor Management, Reports, reusable components and responsive layouts for efficient business management.",

      technologies: [
        "React JS",
        "JavaScript",
        "CSS",
        "REST API",
        "React Router",
      ],

      overview: {

        role: "Frontend Developer",

        platform: "Web Application",

        timeline: "2 Months",

        status: "Completed",

      },

      features: [

        "Responsive Dashboard",

        "CRM Module",

        "Vendor Management",

        "Reports",

        "Reusable Components",

        "Authentication",

      ],

      images: [erp1, erp2, erp3, erp4],

      github: "https://github.com/sayyab82/erp-system-",

      demo: "#",

    },

    {

      title: "Portfolio Website",

      description:
        "A personal portfolio website designed using React JS to showcase projects, skills, education and professional experience with a modern responsive UI.",

      technologies: [

        "React JS",

        "CSS",

        "Responsive Design",

        "React Router",

      ],

      overview: {

        role: "Frontend Developer",

        platform: "Website",

        timeline: "Ongoing",

        status: "In Progress",

      },

      features: [

        "Responsive Design",

        "Smooth Navigation",

        "Reusable Components",

        "Modern UI",

        "Glassmorphism",

      ],

      images: [port1, port2, port3, port4],

      github: "#",

      demo: "#",

    },

     {

      title: "React Native Mobile App",

     

      description:
        "A cross-platform mobile application developed using React Native with clean UI, reusable components and optimized user experience.",

     
      technologies: [

        "React Native",

        "JavaScript",

        "Firebase",

        "REST API",

      ],

      overview: {

        role: "Mobile App Developer",

        platform: "Android",

        timeline: "1 Month",

        status: "Completed",

      },

      features: [

        "Authentication",

        "Responsive UI",

        "Firebase",

        "Navigation",

        "Reusable Components",

      ],

      images: [rn1, rn2, rn3, rn4],

      github: "#",

      demo: "#",

     },

  ];

  const [selectedImages, setSelectedImages] = useState(
    projects.map(() => 0)
  );

  const changeImage = (projectIndex, imageIndex) => {

    const updated = [...selectedImages];

    updated[projectIndex] = imageIndex;

    setSelectedImages(updated);

  };

  return (

    <section className="projects" id="projects">

      <div className="projects-title">

        <h4>MY PROJECTS</h4>

        <h2>Featured Work & Case Studies</h2>

        <p>
          Here are some of my featured projects that demonstrate my
          problem-solving abilities, frontend development skills and experience
          in building responsive web and mobile applications.
        </p>

      </div>

      <div className="project-stats">

        <div className="project-stat">

          <h2>10+</h2>

          <p>Projects</p>

        </div>

        <div className="project-stat">

          <h2>15+</h2>

          <p>Technologies</p>

        </div>

        <div className="project-stat">

          <h2>Web + Mobile</h2>

          <p>Applications</p>

        </div>

      </div>

      {projects.map((project, projectIndex) => (

        <div
          className={`project-card ${
            projectIndex % 2 !== 0 ? "reverse" : ""
          }`}
          key={projectIndex}
        >

          <div className="project-images">

            <div className="main-image">

              <img
                src={project.images[selectedImages[projectIndex]]}
                alt={project.title}
              />

            </div>

            <div className="thumbnail-gallery">

              {project.images.map((image, imageIndex) => (

                <img
                  key={imageIndex}
                  src={image}
                  alt="thumbnail"
                  className={
                    selectedImages[projectIndex] === imageIndex
                      ? "active-thumbnail"
                      : ""
                  }
                  onClick={() =>
                    changeImage(projectIndex, imageIndex)
                  }
                />

              ))}

            </div>

          </div>

          <div className="project-content">

            <h2>{project.title}</h2>

            <div className="tech-badges">

              {project.technologies.map((tech, index) => (

                <span key={index}>{tech}</span>

              ))}

            </div>

            <p>{project.description}</p>

            <div className="overview">

              <div>

                <FaUserTie />

                <div>

                  <h5>Role</h5>

                  <p>{project.overview.role}</p>

                </div>

              </div>

              <div>

                <FaLaptopCode />

                <div>

                  <h5>Platform</h5>

                  <p>{project.overview.platform}</p>

                </div>

              </div>

              <div>

                <FaCalendarAlt />

                <div>

                  <h5>Timeline</h5>

                  <p>{project.overview.timeline}</p>

                </div>

              </div>

              <div>

                <FaFlagCheckered />

                <div>

                  <h5>Status</h5>

                  <p>{project.overview.status}</p>

                </div>

              </div>

            </div>

             <div className="feature-list"> 

              {project.features.map((feature, index) => (

                <div key={index} className="feature">

                  <FaCheckCircle />

                  <span>{feature}</span>

                </div>

              ))}

            </div>

            <div className="project-buttons">

              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="live-btn"
              >

                <FaExternalLinkAlt />

                Live Demo

              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >

                <FaGithub />

                GitHub

              </a>

            </div>

          </div>

        </div>

      ))}

    </section>

  );
}

export default Projects;