import { useState } from "react";

import {
  Mail,
  Menu,
  X,
  ArrowRight,
  Code2,
  ExternalLink,
} from "lucide-react";
import "./App.css";

// CHANGE THESE TO YOUR PERSONAL DETAILS
const profile = {
  name: "Your Name",
  role: "Frontend Developer",
  email: "you@example.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
};

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Java",
  "PostgreSQL",
  "Git & GitHub",
];

const projects = [
  {
    title: "Cineverse",
    description:
      "A modern movie website built with Next.js, featuring movie pages and a responsive interface.",
    technologies: ["Next.js", "React", "CSS"],
    icon: "🎬",
    github: "",
    live: "",
  },
  {
    title: "AI Chat",
    description:
      "An interactive chatbot interface that responds to user messages using JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    icon: "💬",
    github: "",
    live: "",
  },
  {
    title: "Voting System",
    description:
      "A Java console application that records votes and displays voting statistics.",
    technologies: ["Java"],
    icon: "🗳️",
    github: "",
    live: "",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <header className="navbar">
      <a href="#home" className="logo">
        &lt;Portfolio<span>/&gt;</span>
      </a>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-content">
        <p className="intro">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>{profile.name}.</span>
          <br />
          I build things for the web.
        </h1>

        <h2>{profile.role}</h2>

        <p className="hero-text">
          I'm a passionate developer who enjoys creating beautiful,
          responsive and user-friendly websites. I love transforming
          creative ideas into real digital experiences.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View My Work <ArrowRight size={18} />
          </a>

          <a href="#contact" className="outline-btn">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="circle">
          <Code2 size={90} strokeWidth={1.3} />
          <p>CREATE • CODE • BUILD</p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section alt-section" id="about">
      <div className="container about-layout">
        <div>
          <p className="section-label">01 / INTRODUCTION</p>
          <h2 className="section-title">
            About <span>Me</span>
          </h2>

          <p className="description">
            I'm an aspiring software developer with a strong interest
            in web development and modern technologies.
          </p>

          <p className="description">
            I enjoy learning new programming languages, solving
            problems and building applications that provide useful
            experiences. My goal is to keep improving my skills
            while working on exciting projects.
          </p>
        </div>

        <div className="about-card">
          <Code2 size={42} />
          <h3>What I Do</h3>
          <p>
            I create responsive websites, develop interactive
            interfaces and build practical software projects.
          </p>

          <div className="about-tags">
            <span>Frontend</span>
            <span>Web Design</span>
            <span>Development</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section container" id="skills">
      <p className="section-label">02 / MY TOOLKIT</p>

      <h2 className="section-title">
        My <span>Skills</span>
      </h2>

      <p className="description">
        Technologies I use and continue to learn.
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={skill}>
            <small>{String(index + 1).padStart(2, "0")}</small>
            <h3>{skill}</h3>
            <Code2 size={21} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section alt-section" id="projects">
      <div className="container">
        <p className="section-label">03 / SELECTED WORK</p>

        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <p className="description">
          Here are some of the projects I've worked on.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className={`project-image image-${index}`}>
                <span>{project.icon}</span>
              </div>

              <div className="project-content">
                <small>PROJECT 0{index + 1}</small>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub Source Code
                     
                    </a>
                  ) : (
                    <span>Add GitHub link</span>
                  )}

                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      <ExternalLink size={17} /> Live Demo
                    </a>
                  ) : (
                    <span>Add demo link</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact container" id="contact">
      <p className="section-label">04 / GET IN TOUCH</p>

      <h2 className="section-title">
        Let's Work <span>Together.</span>
      </h2>

      <p className="description">
        Have a project, question or opportunity? Feel free to
        reach out. I'm always interested in connecting with
        other developers and exploring new ideas.
      </p>

      <a href={`mailto:${profile.email}`} className="primary-btn">
        <Mail size={19} /> Send Me an Email
      </a>

      <div className="social-links">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          GitHub
        </a>

        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          Linkedin 
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>

      <p>Built with React + Vite 💜</p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}