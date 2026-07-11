import "./Skills.css";

import {
  FaReact,
  FaMobileAlt,
  FaCode,
  FaDatabase,
  FaTools,
  FaGitAlt,
  FaCheckCircle,
} from "react-icons/fa";

function Skills() {
  const skillCategories = [
    {
      icon: <FaReact />,
      title: "Frontend Development",
      skills: [
        "React JS",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Responsive Design",
      ],
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Development",
      skills: [
        "React Native",
        "Flutter",
        "Dart",
        "Android UI",
        "Cross Platform Development",
      ],
    },
    {
      icon: <FaCode />,
      title: "Programming Languages",
      skills: ["JavaScript", "Java", "C++", "Dart"],
    },
    {
      icon: <FaDatabase />,
      title: "Database & APIs",
      skills: ["REST APIs", "JSON", "Firebase", "MySQL"],
    },
    {
      icon: <FaTools />,
      title: "Development Tools",
      skills: [
        "VS Code",
        "GitHub Desktop",
        "Postman",
        "Figma",
        "Android Studio",
        "npm",
      ],
    },
    {
      icon: <FaGitAlt />,
      title: "Version Control",
      skills: ["Git", "GitHub"],
    },
  ];

  const services = [
    "Responsive Websites",
    "React Web Applications",
    "React Native Mobile Apps",
    "REST API Integration",
    "Reusable Components",
    "Modern UI Implementation",
    "Performance Optimization",
    "Bug Fixing",
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-title">
        <h4>TECHNICAL EXPERTISE</h4>
        <h2>Technologies & Tools I Use</h2>
        <p>
          I build modern, scalable and responsive web and mobile applications
          using industry-standard technologies and development tools.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skill-card" key={index}>
            <div className="card-icon">{category.icon}</div>

            <h3>{category.title}</h3>

            <div className="badge-container">
              {category.skills.map((skill, i) => (
                <span className="skill-badge" key={i}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="services-card">
        <h3>What I Can Build</h3>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-item" key={index}>
              <FaCheckCircle />
              <span>{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;