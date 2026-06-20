import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
return ( <nav className="navbar"> <h2 className="logo">Laxmikant Yadav</h2>

  <div className="nav-icons">
    <a
      href="https://github.com/kanthyadav"
      target="_blank"
      rel="noreferrer"
    >
      <FaGithub />
    </a>

    <a
      href="https://www.linkedin.com/in/laxmikant-yadav-b4443825a"
      target="_blank"
      rel="noreferrer"
    >
      <FaLinkedin />
    </a>
  </div>
</nav>


);
}

export default Navbar;
