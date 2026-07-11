import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { SiFiverr } from "react-icons/si";

function Contact() {

  const form = useRef();

const [loading, setLoading] = useState(false);

const [status, setStatus] = useState("");

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "sayyabnadeem82@gmail.com",
      link: "mailto:sayyabnadeem82@gmail.com",
    },

    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "+92 3109213274",
      link: "tel:+923109213274",
    },

    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Rawalpindi, Pakistan",
      link: "#",
    },

    {
      icon: <FaCheckCircle />,
      title: "Availability",
      value: "Open for Full-Time & Freelance",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      title: "GitHub",
      url: "https://github.com/sayyab82",
    },

    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/sayyab-nadeem-413400275/",
    },

    {
      icon: <SiFiverr />,
      title: "Fiverr",
      url: "https://www.fiverr.com/sayyabtechhub/build-scalable-web-and-mobile-applications-with-react-js-and-react-native?context_referrer=tailored_homepage_perseus&source=recently_viewed_gigs&ref_ctx_id=d100936536114c20a0aaa7b834579a74&context=recommendation&pckg_id=1&pos=1&context_alg=recently_viewed&seller_online=true&imp_id=17a77112-5587-4df0-865c-29b08fe97e50",
    },
  ];

   const sendEmail = (e) => {

  e.preventDefault();

    console.log("Service ID:", process.env.REACT_APP_EMAILJS_SERVICE_ID);
  console.log("Template ID:", process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
  console.log("Public Key:", process.env.REACT_APP_EMAILJS_PUBLIC_KEY);


  setLoading(true);

  setStatus("");



  emailjs
    .sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )

    .then(() => {

      setLoading(false);

      setStatus("success");

      form.current.reset();

    })

    .catch((error) => {

      console.log(error);

      setLoading(false);

      setStatus("error");

    });

};

  return (

    <section className="contact" id="contact">

      {/* =======================
          SECTION TITLE
      ======================= */}

      <div className="contact-title">

        <h4>CONTACT</h4>

        <h2>Let's Work Together</h2>

        <p>
          Have a project in mind, a job opportunity, or simply want to connect?
          I'm always excited to discuss new ideas, collaborate on innovative
          projects, and contribute to meaningful software solutions.
        </p>

      </div>

      {/* =======================
          CONTACT CONTENT
      ======================= */}

      <div className="contact-container">

        {/* =======================
            LEFT SIDE
        ======================= */}

        <div className="contact-left">

          <h3>Contact Information</h3>

          <p>
            Feel free to reach out through any of the following methods.
            I'll do my best to respond as soon as possible.
          </p>

          <div className="contact-cards">

            {contactInfo.map((item, index) => (

              <a
                href={item.link}
                key={index}
                className="contact-card"
              >

                <div className="contact-icon">

                  {item.icon}

                </div>

                <div className="contact-details">

                  <h4>{item.title}</h4>

                  <span>{item.value}</span>

                </div>

              </a>

            ))}

          </div>

        </div>

        {/* =======================
            RIGHT SIDE
        ======================= */}

        <div className="contact-right">

          <form 
          ref={form}
          onSubmit={sendEmail}
          className="contact-form">

            <div className="input-group">

              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
              />

            </div>

            <div className="input-group">

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
              />

            </div>

            <div className="input-group">

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />

            </div>

            <div className="input-group">

              <textarea
                rows="7"
                name="message"
                placeholder="Write your message..."
                required
              ></textarea>

            </div>

            <button
              type="submit"
              className="contact-btn"
            >
               {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </div>

            {/* ==========================================
          SOCIAL LINKS
      ========================================== */}

      <div className="social-section">

        <h3>Connect With Me</h3>

        <p>
          You can also find me on these platforms. Feel free to connect,
          follow my work, or discuss new opportunities.
        </p>

        <div className="social-links">

          {socialLinks.map((social, index) => (

            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="social-link"
              aria-label={social.title}
            >

              <div className="social-icon">

                {social.icon}

              </div>

              <span>{social.title}</span>

            </a>

          ))}

        </div>

      </div>

      {/* ==========================================
          FOOTER
      ========================================== */}

      <footer className="footer">

        <div className="footer-content">

          <h3>Sayyab Nadeem</h3>

          <p>
            Software Engineer | React JS Developer | React Native Developer
          </p>

          <div className="footer-line"></div>

          <p className="copyright">
            © {new Date().getFullYear()} Sayyab Nadeem. All Rights Reserved.
          </p>

          <p className="footer-note">
            Built with React JS ❤️
          </p>

        </div>

      </footer>

    </section>

  );
}

export default Contact;