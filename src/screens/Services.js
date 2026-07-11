import "./Services.css";

import {
  FaReact,
  FaMobileAlt,
  FaCode,
  FaPaintBrush,
  FaServer,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaReact />,
      title: "React JS Development",

      description:
        "Build fast, scalable and responsive web applications using modern React practices, reusable components and clean architecture.",

      includes: [
        "Responsive User Interface",
        "Reusable Components",
        "State Management",
        "Modern React Hooks",
      ],

      technologies: [
        "React JS",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Bootstrap",
      ],
    },

    {
      icon: <FaMobileAlt />,
      title: "React Native Development",

      description:
        "Develop cross-platform Android and iOS mobile applications with excellent performance and intuitive user experience.",

      includes: [
        "Cross Platform Apps",
        "Reusable Components",
        "Navigation",
        "API Integration",
      ],

      technologies: [
        "React Native",
        "JavaScript",
        "Expo",
        "Android",
        "iOS",
      ],
    },

    {
      icon: <FaCode />,
      title: "Responsive Website Development",

      description:
        "Convert modern UI designs into pixel-perfect responsive websites that work beautifully on every device.",

      includes: [
        "Mobile Responsive",
        "Modern Layout",
        "Cross Browser Support",
        "Clean Code",
      ],

      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Bootstrap",
      ],
    },

    {
      icon: <FaServer />,
      title: "REST API Integration",

      description:
        "Connect frontend applications with backend services through secure and efficient REST API integration.",

      includes: [
        "Axios Integration",
        "Dynamic Data",
        "Authentication",
        "Error Handling",
      ],

      technologies: [
        "REST API",
        "Axios",
        "JSON",
        "React",
      ],
    },

    {
      icon: <FaPaintBrush />,
      title: "UI Implementation",

      description:
        "Transform Figma and modern UI designs into fully interactive React applications with pixel-perfect accuracy.",

      includes: [
        "Figma to React",
        "Interactive UI",
        "Animations",
        "Reusable Layout",
      ],

      technologies: [
        "React",
        "CSS",
        "JavaScript",
        "Figma",
      ],
    },

    {
      icon: <FaTools />,
      title: "Maintenance & Optimization",

      description:
        "Improve existing React applications by fixing bugs, enhancing performance and optimizing user experience.",

      includes: [
        "Bug Fixes",
        "Code Refactoring",
        "Performance Optimization",
        "UI Improvements",
      ],

      technologies: [
        "React",
        "JavaScript",
        "Git",
        "Debugging",
      ],
    },
  ];

  return (
    <section className="services" id="services">

      <div className="services-title">

        <h4>SERVICES</h4>

        <h2>Services I Offer</h2>

        <p>
          I create modern, responsive and user-friendly web and mobile
          applications with clean architecture, maintainable code and a strong
          focus on performance and user experience.
        </p>

      </div>

      <div className="services-grid">

        {services.map((service, index) => (

          <div className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <div className="includes">

              <h5>What's Included</h5>

              <ul>

                {service.includes.map((item, i) => (

                  <li key={i}>
                    <FaCheckCircle />
                    {item}
                  </li>

                ))}

              </ul>

            </div>

            <div className="technology-badges">

              {service.technologies.map((tech, i) => (

                <span key={i}>
                  {tech}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>


            {/* ============================
          DEVELOPMENT PROCESS
      ============================= */}

      <div className="development-process">

        <h3>My Development Process</h3>

        <p>
          I follow a structured workflow to ensure every project is delivered
          with quality, efficiency, and attention to detail.
        </p>

        <div className="process-grid">

          <div className="process-card">
            <div className="process-number">01</div>
            <h4>Requirement Analysis</h4>
            <p>
              Understanding project goals, business requirements, and client
              expectations before starting development.
            </p>
          </div>

          <div className="process-card">
            <div className="process-number">02</div>
            <h4>Planning & Design</h4>
            <p>
              Planning the application structure, UI layout, reusable
              components, and overall development strategy.
            </p>
          </div>

          <div className="process-card">
            <div className="process-number">03</div>
            <h4>Development</h4>
            <p>
              Building clean, scalable, and responsive applications using
              modern React and React Native best practices.
            </p>
          </div>

          <div className="process-card">
            <div className="process-number">04</div>
            <h4>Testing</h4>
            <p>
              Testing functionality, responsiveness, performance, and fixing
              issues to ensure a reliable user experience.
            </p>
          </div>

          <div className="process-card">
            <div className="process-number">05</div>
            <h4>Deployment & Support</h4>
            <p>
              Assisting with deployment and providing support to ensure smooth
              project delivery and future improvements.
            </p>
          </div>

        </div>

      </div>

      {/* ============================
          CALL TO ACTION
      ============================= */}

      <div className="services-cta">

        <h2>Let's Build Something Amazing Together</h2>

        <p>
          Whether you need a modern React website, a React Native mobile
          application, or improvements to an existing project, I'm ready to
          help turn your ideas into reality.
        </p>

        <a href="#contact" className="services-btn">
          Let's Talk
        </a>

      </div>

    </section>
  );
}

export default Services;