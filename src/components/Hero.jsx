function Hero() {
return ( <section className="hero"> <img
     src="/profile.jpg"
     alt="Laxmikant Yadav"
     className="profile-image"
   />

  <h1 className="hero-title">
    Hi, I'm Laxmikant Yadav
  </h1>

  <h2 className="hero-subtitle">
    Software Engineer | MERN Stack Developer | AI Application Developer
  </h2>

  <p className="hero-description">
    Computer Science and Engineering graduate specializing in Artificial
    Intelligence and Machine Learning. Passionate about building scalable
    MERN applications, REST APIs, and AI-powered solutions using React.js,
    Node.js, MongoDB, Java, SQL, and Generative AI technologies.
  </p>

  <div className="hero-buttons">
    <a href="#projects">
      <button className="primary-btn">
        View Projects
      </button>
    </a>

    <a href="/Laxmikant_resume.pdf" download>
      <button className="secondary-btn">
        Download Resume
      </button>
    </a>
  </div>
</section>


);
}

export default Hero;
