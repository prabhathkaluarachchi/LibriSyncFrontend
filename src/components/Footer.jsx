import '../styles/components/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">LibriSync</h3>
            <p className="footer-tagline">Sync your reading across all devices</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4 className="link-title">Links</h4>
              <ul className="link-list">
                <li><a href="#features">Features</a></li>
                <li><a href="#github">GitHub</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h4 className="link-title">Connect</h4>
              <ul className="link-list">
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Discord</a></li>
                <li><a href="#">Email</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} LibriSync. All rights reserved.
          </p>
          <div className="legal-links">
            <p>
              Code & Developed By
            </p>
            <a target='blank' href="https://prabhath.online/">Prabhath Kaluarachchi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}