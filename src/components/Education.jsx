function Education({ education }) {
  return (
    <section id="education" className="section dark-section">
      <div className="container">
        <h2 className="section-title">My <span className="gradient-text">education</span></h2>

        <div className="grid">
          {education.map((item) => (
            <div className="card" key={`${item.degree}-${item.year}`}>
              <p className="year">{item.year}</p>
              <h3>{item.degree}</h3>
              <p>{item.college}</p>
              <p className="muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;