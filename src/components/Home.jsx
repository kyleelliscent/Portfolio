import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home-page">
      <div className="welcome-message">
        <h1>Welcome to My Portfolio</h1>
        
        <p className="mission-statement">
          <strong>Mission:</strong> To learn how to create web applications using React, Node.js, and other technologies.
        </p>
      </div>
    
    <div className="redirects">
      <Link to="/about" className="redirect-about">
        Learn More About Me
      </Link>
      <Link to="/projects" className="redirect-projects">
        View My Work
      </Link>
    </div>
    </section>
  );
}