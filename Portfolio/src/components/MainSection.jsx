import React from 'react';
import "./MainSection.css";

const App = () => {
  return (
    <div id="main-section">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <div id="hero">
      <div id="hero-1">
        <div id="hero-2">
          <p id="hello">Hello, I'm</p>
          <h1 id="name">Swetha S</h1>
          <p>Full-Stack Developer</p>
          <div id="d-c-btn">
            <button id="Download">Resume</button>
            <a href="#footer"><button id="Contact">Contact</button></a>
          </div>
          <div id="icons">
            <a href="https://www.linkedin.com/in/swetha-s-83994128b/">
              <img src="https://tangerine-hummingbird-1479b6.netlify.app/assets/linkedin.png" alt="linkedin" id="linkedin" />
            </a>
            <a href="https://github.com/Swethas2005">
              <img src="https://tangerine-hummingbird-1479b6.netlify.app/assets/github.png" alt="github" id="github" />
            </a>
          </div>
        </div>
        <img src="./Photos/Swetha logo.jpg" alt="profile" id="img-pro" />
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div id="About">
      <p className="para-a">Get To Know More</p>
      <p>About Me</p>
      <div id="about-2">
        <img src="./Images/Swetha logo" alt="profile-2" />
        <p>
          "Hello there! I'm Swetha, a passionate and aspiring Full Stack Developer on a mission to transform innovative
          ideas into seamless digital experiences. With a knack for problem-solving and a love for coding, I thrive in
          the dynamic world of web development."
        </p>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <div id="skills">
      <p className="para-a">Get To Know More</p>
      <p>Skills</p>
      <div id="logo-container">
        <div id="icon-1">
          <img className="logos" src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg" alt="HTML" />
          <img className="logos" src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg" alt="CSS" />
          <img className="logos" src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg" alt="JavaScript" />
          <img className="logos" src="https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg" alt="React" />
          <img className="logos" src="https://chiranjeev-thapliyal.vercel.app/svg/redux.svg" alt="Redux" />
          <img className="logos" src="https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg" alt="Node.js" />
        </div>
        <div id="icon-2">
          <img className="logos" src="https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg" alt="MongoDB" />
          <img className="logos" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" alt="Bootstrap" />
          <img className="logos" src="https://chiranjeev-thapliyal.vercel.app/svg/git.svg" alt="Git" />
          <img className="logos" src="https://ih1.redbubble.net/image.794239987.0240/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" alt="npm" />
          <img className="logos" src="https://www.svgrepo.com/show/354202/postman-icon.svg" alt="Postman" />
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <>
      <div id="projects">
        <p className="para-a">Get To Know More</p>
        <p>Projects</p>
        <div id="projects-container">
          <ProjectCard
            imgSrc="./Photos/SHINE.png"
            name="SHINE"
            description="Shine.com connects jobseekers and recruiters by accurately matching candidate profiles to the relevant job."
            techStack="HTML | CSS | JAVASCRIPT"
            liveLink="https://swethas2005.github.io/Shine/"
            githubLink="https://github.com/Swethas2005/Shine"
          />
          <ProjectCard
            imgSrc="./Photos/Screenshot 2024-01-13 203444.png"
            name="SHINCHAN"
            description="Super hero resume is all about a brief details of my childhood superhero shinchan character in comedy genre."
            techStack="HTML | CSS | JAVASCRIPT"
            liveLink="https://wondrous-cascaron-ab1398.netlify.app/"
            githubLink="https://github.com/Swethas2005/Superhero-Resume"
          />
        </div>
      </div>
      <div id="projects-2">
        <div id="projects-container-2">
          <ProjectCard
            imgSrc="./Photos/BeautyBebo.png"
            name="BEAUTYBEBO"
            description="BeautyBebo is a personalized beauty app providing tailored skincare and makeup recommendations, expert advice, and easy shopping options, all in one platform."
            techStack="React | Chakra UI | JavaScript"
            liveLink="https://roaring-tartufo-609604.netlify.app/"
            githubLink="https://github.com/Swethas2005/BeautyBebo-Website-clone"
          />
          <ProjectCard
            imgSrc="./Photos/BOOKHUB.png"
            name="BOOKHUB"
            description="BookHub: Digital library with vast e-book collection, accessible on multiple devices."
            techStack="HTML | CSS | JavaScript | Git | React | ChakraUI"
            liveLink="https://majestic-frangollo-827b07.netlify.app/"
            githubLink="https://github.com/Swethas2005/BookHub"
          />
        </div>
      </div>
    </>
  );
};

const ProjectCard = ({ imgSrc, name, description, techStack, liveLink, githubLink }) => {
  return (
    <div className="project-card">
      <img className="project-logo" src={imgSrc} alt={name} />
      <p id="website-name">{name}</p>
      <p>{description}</p>
      <p>{techStack}</p>
      <div id="btn-holder">
        <a href={liveLink}><button className="projects-btn">Live <i className="fa-solid fa-arrow-up-right-from-square"></i></button></a>
        <a href={githubLink}><button className="projects-btn">Github <i className="fa-brands fa-github"></i></button></a>
      </div>
    </div>
  );

  
};

export default App;
