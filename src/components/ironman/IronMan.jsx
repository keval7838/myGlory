import { useState, useEffect } from "react";
import {
  User,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Zap,
  Cpu,
  Shield,
} from "lucide-react";
import "./IronMan.css"; // Import the CSS file
import { t } from "i18next";

const IronManPortfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      title: "PMPeople | PPM Tool for Seamless Project Collaboration",
      description:
        "Developed a professional project collaboration tool with role-based access control, supporting roles such as Project Manager, Team Member, Requester, Sponsor, Stakeholder, and Assistant Project Manager",
      tech: ["React Native", "Node.js", "MYSQL"],
      link: "https://play.google.com/store/apps/details?id=com.PMPeople&pcampaignid=web_share",
    },
    {
      title: "SEEDLING | Farm Management Application",
      description:
        "Developed a Korean farm management app enabling admins to monitor field performance and users to manage plot allocations and transfers, with Google Maps integration for geolocation-based land mapping and Firebase Cloud Messaging for time-based farm activity reminders",
      tech: ["React Native", "Node.js", "MYSQL"],
      link: "",
    },
    {
      title: "RELISTIFY | Video Creation Application",
      description:
        "Developed a video editing application that allows users to create, merge, and enhance short videos with filters, offering free basic features and advanced tools through a premium subscription model",
      tech: ["React Native", "React Native Firebase"],
      link: "",
    },
    {
      title: "MomsBeyond | Social Networking App for Mothers",
      description:
        "Developed a dedicated social networking platform for mothers to connect, share experiences, and seek support, featuring content sharing, one-on-one chat, community forums, and a Mombassador program to promote engagement and empowerment among users",
      tech: ["React Native", "React Native Firebase"],
      link: "https://play.google.com/store/apps/details?id=com.momsbeyond.wmt.android&pcampaignid=web_share",
    },
  ];

  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 82 },
    { name: "React.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "React Native", level: 88 },
    { name: "MongoDB", level: 80 },
    { name: "Firebase", level: 80 },
  ];

  return (
    <div className={`ironman-portfolio ${isLoaded ? "loaded" : "loading"}`}>
      {/* Background Effects */}

      <div className="background-effects">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
        <div className="particle particle-7"></div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a onClick={() => setActiveSection("home")}>
            <div className="nav-logo">MY GLORY</div>
          </a>

          <div className="nav-links">
            {["home", "about", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`nav-link ${
                  activeSection === section ? "active" : ""
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {activeSection === "home" && (
        <section className="hero-section">
          <div className="hero-content">
            {/* <div className="arc-reactor-container">
              <div className="arc-reactor"></div>
            </div> */}
            <h1 className="hero-title">{t("myName")}</h1>
            <p className="hero-subtitle">Super • Star • Software • Engineer</p>
            <div className="hero-buttons">
              <button
                onClick={() => setActiveSection("projects")}
                className="btn-primary"
              >
                View Projects
              </button>
              <button
                onClick={() => setActiveSection("contact")}
                className="btn-secondary"
              >
                Contact Me
              </button>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === "about" && (
        <section className="section">
          <div className="section-container">
            <h2 className="section-title">ABOUT ME</h2>
            <div className="about-grid">
              <div>
                <h3 className="about-section-header">
                  <User size={24} />
                  Profile
                </h3>
                <p className="about-text">
                  Innovative full-stack developer with a passion for creating
                  cutting-edge technology solutions. Specializing in modern web
                  applications, AI integration, and high-performance systems.
                </p>
                <p className="about-text">
                  When I'm not coding, you can find me working on advanced
                  robotics projects, optimizing arc reactor efficiency, or
                  mentoring the next generation of developers.
                </p>
              </div>
              <div>
                <h3 className="about-section-header">
                  <Cpu size={24} />
                  Skills
                </h3>
                <div className="skills-list">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar-bg">
                        <div
                          className="skill-bar"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === "projects" && (
        <section className="section">
          <div className="section-container">
            <h2 className="section-title">PROJECTS</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <a href={project.link ? project.link : ""}>
                      {project?.link && (
                        <ExternalLink size={20} className="project-link" />
                      )}
                    </a>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="tech-tags">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === "contact" && (
        <section className="section">
          <div className="contact-container">
            <h2 className="section-title">CONTACT</h2>
            <div className="contact-intro">
              <div className="contact-icon">
                <Shield size={40} color="white" />
              </div>
              <p className="contact-description">
                Ready to build the future together? Let's connect and create
                something extraordinary.
              </p>
            </div>
            <div className="contact-grid">
              <a href="mailto:keval.patel0213@gmail.com">
                <div className="contact-card">
                  <Mail size={32} className="contact-card-icon" />
                  <h3 className="contact-card-title">Email</h3>
                  <p className="contact-card-info">keval.patel0213@gmail.com</p>
                </div>
              </a>
              <a href="https://github.com/keval7838">
                <div className="contact-card">
                  <Github size={32} className="contact-card-icon" />
                  <h3 className="contact-card-title">GitHub</h3>
                  <p className="contact-card-info">@keval7838</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/keval-patel-406992344/">
                <div className="contact-card">
                  <Linkedin size={32} className="contact-card-icon" />
                  <h3 className="contact-card-title">LinkedIn</h3>
                  <p className="contact-card-info">keval patel</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default IronManPortfolio;
