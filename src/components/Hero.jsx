export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
          Manage Your Library <span>Everywhere</span>
          </h1>
          <p className="hero-text">
            <i>"<b>LibriSync</b> is a powerful Python-based system designed to organize and
            manage all your educational resources in one place. Keep track of
            books, magazines, DVDs, and CDs with effortless synchronization
            across your institution."</i>
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
            <a href="#features" className="btn btn-outline">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
