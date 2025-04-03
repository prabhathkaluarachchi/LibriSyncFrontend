const technologies = ["ReactJs", "Vite", "API", "Python", "Git", "CSS","HTML5"];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">
          About <span>LibriSync</span>
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              LibriSync was developed to address the challenges of managing
              physical and digital educational resources in institutional
              settings. Our system emerged from the need for a unified solution
              to track books, media, and their circulation efficiently.
            </p>
            <p>
              As an open-source solution, we're committed to providing
              educational institutions with a transparent, customizable tool
              that respects their operational requirements and privacy
              standards.
            </p>
          </div>
          <div className="about-tech">
            <h3 className="tech-title">Technologies Used</h3>
            <div className="tech-tags">
              {technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="progress-container">
              <h4 className="progress-title">Development Status</h4>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "95%" }}></div>
              </div>
              <span className="progress-text">95% complete</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
