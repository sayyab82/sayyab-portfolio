import "./Education.css";

import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaBookOpen,
  FaLaptopCode,
  FaMobileAlt,
  FaCode,
  FaLightbulb,
} from "react-icons/fa";

import hitecLogo from "../images/education/hitec.jpg";
import cadetLogo from "../images/education/cadet-college.jpg";

function Education() {
  const educationData = [
    {
      logo: hitecLogo,
      duration: "2021 - 2025",
      degree: "BS Software Engineering",
      institute: "HITEC University, Taxila",
      description:
        "Completed a Bachelor's degree in Software Engineering with a strong focus on software design, web technologies, mobile application development, databases, networking, and problem-solving.",

      coursework: [
        "Data Structures",
        "DBMS",
        "Software Engineering",
        "Web Engineering",
        "Mobile App Development",
        "Computer Networks",
        "Operating Systems",
        "OOP",
      ],
    },

    {
      logo: cadetLogo,
      duration: "2018 - 2020",
      degree: "Intermediate (Pre-Engineering)",
      institute: "Cadet College Palandri, AJ&K",
      description:
        "Studied Pre-Engineering with a strong foundation in Mathematics, Physics, and Computer Science while developing analytical and problem-solving skills.",

      coursework: [],
    },

    {
      logo: cadetLogo,
      duration: "2016 - 2018",
      degree: "Matriculation (Science)",
      institute: "Cadet College Palandri, AJ&K",
      description:
        "Completed secondary education with a Science background while building discipline, leadership, and academic excellence through the cadet college environment.",

      coursework: [],
    },
  ];

  const highlights = [
    {
      icon: <FaGraduationCap />,
      title: "Software Engineering Graduate",
    },
    {
      icon: <FaLaptopCode />,
      title: "Frontend Development",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Development",
    },
    {
      icon: <FaCode />,
      title: "Problem Solving",
    },
    {
      icon: <FaBookOpen />,
      title: "Continuous Learning",
    },
    {
      icon: <FaLightbulb />,
      title: "Modern Technologies",
    },
  ];

  return (
    <section className="education" id="education">
      <div className="education-title">
        <h4>EDUCATION & LEARNING</h4>

        <h2>My Academic Journey</h2>

        <p>
          My academic journey has provided a strong foundation in software
          engineering principles, programming, and modern technologies while
          continuously encouraging curiosity, innovation, and lifelong learning.
        </p>
      </div>

      <div className="timeline">
        {educationData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <div className="timeline-header">
                <img src={item.logo} alt={item.institute} />

                <div className="timeline-info">
                  <h3>{item.degree}</h3>

                  <h4>
                    <FaUniversity />
                    {item.institute}
                  </h4>

                  <span>
                    <FaCalendarAlt />
                    {item.duration}
                  </span>
                </div>
              </div>

              <p>{item.description}</p>

              {item.coursework.length > 0 && (
                <>
                  <h5>Relevant Coursework</h5>

                  <div className="coursework">
                    {item.coursework.map((course, courseIndex) => (
                      <span key={courseIndex}>{course}</span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="academic-highlights">
        <h3>Academic Highlights</h3>

        <div className="highlight-grid">
          {highlights.map((highlight, index) => (
            <div className="highlight-card" key={index}>
              <div className="highlight-icon">{highlight.icon}</div>

              <h4>{highlight.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;