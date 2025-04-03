import '../styles/components/about.css';

const technologies = ['React', 'Node.js', 'Express', 'MongoDB', 'Vite', 'CSS3'];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About <span>LibriSync</span></h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              LibriSync was born out of a passion for reading and the frustration of losing reading
              progress when switching between devices. Our mission is to create a seamless reading
              experience across all platforms.
            </p>
            <p>
              The project is developed with a focus on privacy, user experience, and cross-platform
              compatibility. We believe that your reading data belongs to you, and we're committed to
              keeping it private and secure.
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
                <div className="progress-fill" style={{ width: '75%' }}></div>
              </div>
              <span className="progress-text">75% complete</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}