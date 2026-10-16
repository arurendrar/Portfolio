function About({ about, goals, interests }) {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div>
          <h2 className="section-title">About <span className="gradient-text">me</span></h2>
          <p className="muted">{about}</p>
          <p className="muted">{goals}</p>
        </div>

        <div className="card">
          <h3>Interests</h3>
          <div className="badges">
            {interests.map((interest) => (
              <span className="badge" key={interest}>{interest}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;