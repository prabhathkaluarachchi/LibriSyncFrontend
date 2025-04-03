const features = [
  {
    icon: '🗃️',
    title: 'Centralized Python Dictionary',
    description: 'All resources (books, magazines, DVDs, CDs) are stored in a memory-efficient Python dictionary, enabling real-time updates and instant access.'
  },
  {
    icon: '⚡',
    title: 'High-Speed Retrieval',
    description: 'Retrieve data from collections with ultra-fast lookup speeds thanks to Python’s optimized hash-table implementation.'
  },
  {
    icon: '📊',
    title: 'Usage Analytics',
    description: 'Track daily trends—including resource popularity, lending frequency, and inventory status—with built-in statistical tools.'
  },
  {
    icon: '📈',
    title: 'Scalable Architecture',
    description: 'Easily expand collections with support for thousands of resources while maintaining performance.'
  },
  {
    icon: '🗂️',
    title: 'Dynamic Categorization',
    description: 'Organize resources by subject, format, type, or custom tags with flexible metadata management.'
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