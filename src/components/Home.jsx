// HomePage.jsx
import "react";
import "./Home.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import pm from "../assets/pm.png";
import seed from "../assets/seed.png";
import moms from "../assets/moms.png";
import rel from "../assets/r.png";
import ap from "../assets/ap.webp";

const Home = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const projectSkills = [
    "React Native",
    "React Js",
    "JavaScript",
    "Node.js",
    "CSS",
    "HTML",
    "Git",
  ];

  const projects = [
    {
      name: "PMPeople | PPM Tool for Seamless Project Collaboration",
      des: "Developed a professional project collaboration tool with role-based access control, supporting roles such as Project Manager, Team Member, Requester, Sponsor, Stakeholder, and Assistant Project Manager.",
      img: pm,
    },
    {
      name: "SEEDLING | Farm Management Application",
      des: "Developed a Korean farm management app enabling admins to monitor field performance and users to manage plot allocations and transfers, with Google Maps integration for geolocation-based land mapping and Firebase Cloud Messaging for time-based farm activity reminders",
      img: seed,
    },
    {
      name: "RELISTIFY | Video Creation Application",
      des: "Developed a video editing application that allows users to create, merge, and enhance short videos with filters, offering free basic features and advanced tools through a premium subscription model",
      img: rel,
    },
    {
      name: "MomsBeyond | Social Networking App for Mothers",
      des: "Developed a dedicated social networking platform for mothers to connect, share experiences, and seek support, featuring content sharing, one-on-one chat, community forums, and a Mombassador program to promote engagement and empowerment among users",
      img: moms,
    },
  ];
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="nav-logo">{t("Portfolio")}</div>

        <div>
          <select
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            value={i18n.language}
            className="language-select"
          >
            <option value="en">🇬🇧 English</option>
            <option value="kr">🇰🇷 Korean</option>
          </select>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#home">{t("Home")}</a>
          </li>
          <li>
            <a href="#about">{t("About")}</a>
          </li>
          <li>
            <a href="#projects">{t("Projects")}</a>
          </li>
          <li>
            <a onClick={() => navigate("/contact")}>{t("Contact")}</a>
          </li>
        </ul>
      </nav>

      <section className="hero-section" id="home">
        <div className="hero-content">
          <h1>
            {t("intro1")} <span className="highlight">{t("myName")}</span>
          </h1>
          <p className="subtitle">Full Stack Developer</p>
          <p className="description">{t("myDescription")}</p>
          <button className="cta-button">{t("ViewMyWork")}</button>
        </div>
        <div className="plan-mode">
          <img src={ap} alt=" image"></img>
        </div>
        <div className="plan-mode-2">
          <img src={ap} alt="image"></img>
        </div>
      </section>

      <section className="about-section" id="about">
        <h2>{t("AboutMe")}</h2>
        <div className="about-content">
          <div className="about-text">
            <p>{t("title")}</p>
          </div>
          <div className="skills">
            <h3>{t("MySkills")}</h3>
            <div className="skill-tags">
              {projectSkills.map((skills) => (
                <span className="skill-tag">{skills}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* projects */}
      <section className="projects-section" id="projects">
        <h2>{t("FeaturedProjects")}</h2>
        <div className="projects-grid">
          {projects.map((item) => (
            <div key={item} className="project-card">
              <div className="project-image">
                <img src={item?.img} alt=" image"></img>
              </div>
              <h3>{item?.name}</h3>
              <p>{item?.des}</p>
              <div className="project-links">
                <a href="#" className="project-link">
                  {t("viewLive")}
                </a>
                <a href="#" className="project-link">
                  {t("SourceCode")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <h2>{t("GetInTouch")}</h2>
        <div className="contact-content">
          <form className="contact-form">
            <input type="text" placeholder={t("name")} />
            <input type="email" placeholder={t("email")} />
            <textarea placeholder={t("message")}></textarea>
            <button type="submit" className="submit-button">
              {t("sendMessage")}
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
