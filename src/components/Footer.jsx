export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log("Form data:", data);
    // Add your API call here
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">LibriSync</h3>
            <p className="footer-tagline">Your Library Management Solution</p>
          </div>
          
          <div className="contact-form">
            <h4 className="link-title">Get in Touch</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  className="form-input"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} LibriSync. All rights reserved.
          </p>
          <div className="legal-links">
            <p>
              Developed by <a target="_blank" rel="noopener" href="https://prabhath.online/">Prabhath Kaluarachchi</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}