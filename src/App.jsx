import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      
      <header className="header">
        <h1>Bishnu Charan Nayak</h1>
        <p>Java Full Stack Developer | React | Spring Boot</p>
      </header>

      <nav className="nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a passionate developer from Bhubaneswar Engineering College.
          I’m a Full-Stack Developer and IoT Engineer passionate about building intelligent, real-time systems that connect software, hardware, and AI.

I work across web apps, embedded systems, and AI-assisted workflows, focusing on performance, scalability, and practical impact.

💡 I actively use AI tools to accelerate development, prototype faster, and improve code quality.

I complete ** Try to Hack me lab **
        </p>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <ul>
          <li>Java</li>
          <li>Spring Boot Basic</li>
          <li>Python basics</li>
          <li>JavaScript</li>
          <li>MySQL</li>
          <li>HTML & CSS</li>
          <li>React</li>
          <li>penetration tester</li>
          <li>buritspuit</li>
        </ul>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project">
          <h3>Attendance Management System</h3>
          <p>Built using Java, Spring Boot and MySQL.</p>
        </div>

        <div className="project">
          <h3>3D Particle System</h3>
          <p>Created using Three.js and MediaPipe.</p>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact Me</h2>
<div className="social-links">
  <a href="https://github.com/Bishnu-charan-nayak" target="_blank" rel="noopener noreferrer">
    GitHub
  </a>

  <a href="https://www.linkedin.com/in/bishnu-charan-nayak/" target="_blank" rel="noopener noreferrer">
    LinkedIn
  </a>

  <a href="https://twitter.com/@bishnubablu203" target="_blank" rel="noopener noreferrer">
    Twitter
  </a>
</div>
      </section>

      <footer className="footer">
        <p>© 2026 Bishnu Charan Nayak. All Rights Reserved.</p>
      </footer>
      <nav className="nav">
  <Link to="about" smooth={true} duration={500}>About</Link>
  <Link to="skills" smooth={true} duration={500}>Skills</Link>
  <Link to="projects" smooth={true} duration={500}>Projects</Link>
  <Link to="contact" smooth={true} duration={500}>Contact</Link>
</nav>


    </div>
    
  );
}
import { Link } from "react-scroll";
import Tilt from "react-parallax-tilt";


export default App;