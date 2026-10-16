import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { useEffect, useState } from "react";

// TEMPLATE: only the structure (empty tags + CSS classes).
// TODO (class): fetch the data, then pass it to each component using props.
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/portfolio.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed");
        }
        return response.json();
      })
      .then(setData)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="status">Loading Portfolio...</p>;
  if (error) return <p className="status">Unable to load portfolio data.</p>;
  return (
    <>
      <Navbar name={data.name} />
      <main>
        <Hero data={data} />
        <About about={data.about} goals={data.goals} interests={data.interests} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Education education={data.education} />
        <Contact email={data.email} socials={data.socials} />
      </main>
      <Footer name={data.name} socials={data.socials} />
    </>
  );
}

export default App;