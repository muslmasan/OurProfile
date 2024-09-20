import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [links, setLinks] = useState(false);
  const ShowLinks = () => {
    console.log(links);

    links ? setLinks(false) : setLinks(true);
  };
  return (
    <nav>
      <h1>InnoWare</h1>
      <ul style={{ display: links ? "flex" : "none" }}>
        <Link to="/" onClick={() => setLinks(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setLinks(false)}>
          About
        </Link>
        <Link to="/service" onClick={() => setLinks(false)}>
          Service
        </Link>
        <Link to="/projects" onClick={() => setLinks(false)}>
          Projects
        </Link>
        <Link to="/blog" onClick={() => setLinks(false)}>
          Blog
        </Link>
        <Link to="/carrier" onClick={() => setLinks(false)}>
          Carrier
        </Link>
        <Link to="/contact" onClick={() => setLinks(false)}>
          Contact Us
        </Link>
      </ul>
      <svg
        onClick={ShowLinks}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
      </svg>
    </nav>
  );
};

export default NavBar;
