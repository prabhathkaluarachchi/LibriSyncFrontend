import '../styles/components/features.css';

const features = [
  {
    icon: '📱',
    title: 'Cross-Device Sync',
    description: 'Keep your reading progress synchronized across all your devices in real-time.'
  },
  {
    icon: '☁️',
    title: 'Cloud Backup',
    description: 'Your entire library is securely backed up in the cloud with end-to-end encryption.'
  },
  {
    icon: '📊',
    title: 'Reading Analytics',
    description: 'Track your reading habits with detailed statistics and insights.'
  },
  {
    icon: '📚',
    title: 'Multi-Format Support',
    description: 'Supports EPUB, PDF, and other popular ebook formats.'
  },
  {
    icon: '🗂️',
    title: 'Custom Collections',
    description: 'Organize your books into custom collections and categories.'
  },
  {
    icon: '🔓',
    title: 'Open Source',
    description: 'Completely open-source with a transparent development process.'
  }
];

export default function Features() {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2 className="section-title">Key <span>Features</span></h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}