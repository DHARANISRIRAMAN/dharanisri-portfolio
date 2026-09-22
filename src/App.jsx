import "./App.css";

function App() {
  const skills = [
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Jenkins",
    "Ansible",
    "Linux",
    "Git & GitHub",
    "GitHub Actions",
    "Python",
    "Shell Scripting",
  ];

  const projects = [
    {
      number: "01",
      category: "CLOUD & DEVOPS",
      title: "FinEdge Labs",
      description:
        "AWS cloud infrastructure and DevOps implementation using networking, Terraform, CI/CD, Docker and container deployment.",
      tags: ["AWS", "Terraform", "Jenkins", "Docker", "ECS"],
    },
    {
      number: "02",
      category: "CLOUD DEPLOYMENT",
      title: "MedNova Systems",
      description:
        "Healthcare cloud deployment architecture using AWS services, containerization, monitoring and DevOps practices.",
      tags: ["AWS", "Docker", "ECR", "ECS", "CloudWatch"],
    },
    {
      number: "03",
      category: "FRONTEND DEVELOPMENT",
      title: "TravelExplorer",
      description:
        "A responsive frontend travel exploration website built using HTML, CSS and JavaScript.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    },
  ];

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo">
          D<span>R</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>
      </header>

      {/* HERO */}
      <section id="home" className="hero">

        <div className="hero-left">
          <p className="eyebrow">
            CLOUD & DEVOPS ENGINEER
          </p>

          <h1>
            Hi, I am
            <br />
            <span>Dharanisri.</span>
          </h1>

          <p className="hero-text">
            I build cloud infrastructure, automate deployment
            workflows and explore modern software development
            with a focus on scalable and reliable technology.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore Projects
            </a>

            <a
              href="/resume/Dharanisri_R.pdf"
              download="Dharanisri_R_Resume.pdf"
              className="secondary-button"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-right">

          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="hero-card">

            <div className="card-top">
              <span>01</span>
              <span>PORTFOLIO</span>
            </div>

            <div className="cloud-icon">
              ☁
            </div>

            <h3>
              Cloud
              <br />
              Infrastructure
            </h3>

            <div className="card-line"></div>

            <p>
              AWS · Azure · Terraform
              <br />
              Docker · Kubernetes · CI/CD
            </p>

          </div>

          <div className="gold-dot"></div>
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="section about">

        <div className="section-number">
          01
        </div>

        <div className="section-title">
          <p>ABOUT ME</p>

          <h2>
            Building
            <br />
            <span>with purpose.</span>
          </h2>
        </div>

        <div className="about-content">

          <p>
            I am Dharanisri, a Cloud & DevOps Engineer focused on
            AWS, Azure, automation and cloud infrastructure.
          </p>

          <p>
            Along with Cloud & DevOps, I am currently learning
            software development and building frontend projects
            using modern web technologies.
          </p>

          <div className="about-stats">
            <div>
              <strong>01</strong>
              <span>Cloud Focus</span>
            </div>

            <div>
              <strong>02</strong>
              <span>DevOps Mindset</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Projects</span>
            </div>
          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills">

        <div className="section-number">
          02
        </div>

        <div className="section-title">
          <p>TECHNICAL SKILLS</p>

          <h2>
            Tools I
            <br />
            <span>work with.</span>
          </h2>
        </div>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-card" key={skill}>
              <span>
                0{index + 1}
              </span>

              <h3>
                {skill}
              </h3>

              <div className="skill-arrow">
                ↗
              </div>
            </div>
          ))}

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects">

        <div className="section-number">
          03
        </div>

        <div className="section-title">
          <p>SELECTED WORK</p>

          <h2>
            Projects
            <br />
            <span>that I built.</span>
          </h2>
        </div>

        <div className="project-list">

          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-main">

                <p className="project-category">
                  {project.category}
                </p>

                <h3>
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              <div className="project-arrow">
                ↗
              </div>

            </article>
          ))}

        </div>

      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section experience">

        <div className="section-number">
          04
        </div>

        <div className="section-title">
          <p>EXPERIENCE</p>

          <h2>
            My learning
            <br />
            <span>journey.</span>
          </h2>
        </div>

        <div className="experience-list">

          <div className="experience-box">

            <div className="experience-number">
              01
            </div>

            <div className="experience-content">

              <p>COURSE</p>

              <h3>
                Cloud & DevOps Course
              </h3>

              <span>
                Greens Technology
              </span>

              <small>
                AWS • Azure • DevOps • Cloud Infrastructure • CI/CD
              </small>

            </div>

          </div>

          <div className="experience-box">

            <div className="experience-number">
              02
            </div>

            <div className="experience-content">

              <p>INTERNSHIP</p>

              <h3>
                Cloud & DevOps Engineer Intern
              </h3>

              <span>
                InternsElite
              </span>

              <small>
                Cloud Infrastructure • Linux • Docker • DevOps Tools
              </small>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">

        <div className="contact-content">

          <p className="eyebrow">
            GET IN TOUCH
          </p>

          <h2>
            Let's build
            <br />
            <span>something meaningful.</span>
          </h2>

          <p>
            Open to Cloud, DevOps and software development
            opportunities.
          </p>

          <a
            href="mailto:dharanisri1642004@gmail.com"
            className="contact-email"
          >
            dharanisri1642004@gmail.com
          </a>

          <div className="contact-links">

            <a
              href="https://linkedin.com/in/dharanisri55"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a href="mailto:dharanisri1642004@gmail.com">
              Email ↗
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <div>
          <strong>
            Dharanisri R
          </strong>

          <span>
            Cloud & DevOps Engineer
          </span>
        </div>

        <p>
          © 2026 Dharanisri R
        </p>

      </footer>

    </div>
  );
}

export default App;