// HomePage.jsx
import "react";
import "./Home.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import myImage from "../assets/1.jpg";

const Home = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
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
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">HTML</span>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <h2>{t("FeaturedProjects")}</h2>
        <div className="projects-grid">
          {[1, 2, 3].map((project) => (
            <div key={project} className="project-card">
              <div className="project-image">
                <img src={myImage} alt="Description of your image"></img>
              </div>
              <h3>
                {t("Project")} {project}
              </h3>
              <p>
                Description of project {project}. Explain the key features and
                technologies used.
              </p>
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
