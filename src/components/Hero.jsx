export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Sync Your Reading <span>Everywhere</span></h1>
          <p className="hero-text">
            LibriSync keeps your book library and reading progress synchronized across all your devices.
            Never lose your place again.
          </p>
          <div className="hero-buttons">
            <a
              href="https://github.com/prabhathkaluarachchi/LibriSync"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            <a href="#features" className="btn btn-outline">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}