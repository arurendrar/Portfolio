import { Github, Linkedin } from "lucide-react";

function Footer({ name, socials }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {name}</p>
        <div className="social-icons">
          <a className="icon-link" href={socials.github} target="_blank" rel="noreferrer" aria-label={`${name} on GitHub`}><Github size={18} /></a>
          <a className="icon-link" href={socials.linkedin} target="_blank" rel="noreferrer" aria-label={`${name} on LinkedIn`}><Linkedin size={18} /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;