import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_v6e5gws', // Service ID
        'template_js4cfyx', // Template ID
        form.current, 
        'Rl278ZygRImAbAYHh' // Public Key
      )
      .then(
        () => {
          setMessageSent(true); // Set message as sent
          form.current.reset(); // Reset form after successful submission

          // Create success message dynamically
          const successMessage = document.createElement("div");
          successMessage.textContent = "Message sent successfully!";
          Object.assign(successMessage.style, {
            backgroundColor: "#4CAF50", // Green background
            color: "#FFF", // White text
            padding: "10px", // Padding
            marginBottom: "20px", // Margin bottom
            borderRadius: "5px", // Rounded corners
            textAlign: "center", // Center text
            marginTop: "10px", // Space from form
          });

          form.current.parentNode.insertBefore(
            successMessage,
            form.current.nextSibling
          );

          // Remove message after 3 seconds
          setTimeout(() => {
            successMessage.remove();
            setMessageSent(false);
          }, 3000);
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
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
            <form ref={form} onSubmit={sendEmail}>
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
            © {new Date().getFullYear()} LibriSync.
          </p>
          <div className="legal-links">
            <p>
              Developed by{" "}
              <a target="_blank" rel="noopener" href="https://prabhath.online/">
                Prabhath Kaluarachchi
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
