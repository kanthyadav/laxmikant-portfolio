function Projects() {
return ( <section id="projects" className="section"> <h2 className="section-title">Projects</h2>

  <div className="project-card">
    <h3> Food Order Platform</h3>

    <p className="highlight-text">
      React.js • Node.js • Express.js • MongoDB • Generative AI
    </p>

    <p>
      AI-powered MERN food ordering application with restaurant discovery,
      menu browsing, cart management, and order placement features.
    </p>

    <p>
      Implemented secure user authentication, dynamic food listings, and
      order management workflows using React.js, Node.js, Express.js, and
      MongoDB Atlas.
    </p>

    <p>
      Integrated AI-powered food recommendations to enhance user experience
      and provide personalized suggestions based on user preferences.
    </p>

    <div className="project-links">
      <a
        href="https://github.com/kanthyadav/food_order"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>

      <a
        href="https://food-order-8qe3.vercel.app"
        target="_blank"
        rel="noreferrer"
      >
        Live Demo
      </a>
    </div>
  </div>

  <div className="project-card">
    <h3> Expense Tracker Pro</h3>

    <p className="highlight-text">
      React.js • Node.js • Express.js • MongoDB Atlas
    </p>

    <p>
      Full-stack MERN application for tracking income and expense
      transactions in real time.
    </p>

    <p>
      Developed secure CRUD operations, analytics dashboards, and
      responsive user interfaces to help users manage their personal
      finances effectively.
    </p>

    <p>
      Implemented REST APIs and MongoDB Atlas integration for reliable
      data storage and efficient transaction management.
    </p>

    <div className="project-links">
      <a
        href="https://github.com/kanthyadav/self-tracker"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>

      <a
        href="https://self-tracker-xi.vercel.app"
        target="_blank"
        rel="noreferrer"
      >
        Live Demo
      </a>
    </div>
  </div>

  <div className="project-card">
    <h3> MindForge AI</h3>

    <p className="highlight-text">
      React.js • Node.js • MongoDB • AssemblyAI • Generative AI
    </p>

    <p>
      AI-powered learning assistant that transforms audio recordings into
      transcripts, summaries, key points, and quizzes.
    </p>

    <p>
      Integrated AssemblyAI speech-to-text services and Generative AI
      models to automate content understanding and knowledge extraction.
    </p>

    <p>
      Built scalable backend services using Node.js, Express.js, and
      MongoDB Atlas for session management and content processing.
    </p>

    <div className="project-links">
      <a
        href="https://github.com/kanthyadav/MindForge-AI"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>

      <a
        href="https://mind-forge-ai-opal.vercel.app"
        target="_blank"
        rel="noreferrer"
      >
        Live Demo
      </a>
    </div>
  </div>
</section>


);
}

export default Projects;
