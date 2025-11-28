import { Outlet, Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FcMenu } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import logo from "../assets/images/logo-new.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const homeLink = document.getElementById("home-link");

    if (homeLink) {
      homeLink.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default navigation behavior
        handleScrollToTop(); // Scroll to top
        navigate("/"); // Navigate to the home route
        toggleNav(); // Close the navigation menu
      });
    }

    return () => {
      if (homeLink) {
        homeLink.removeEventListener("click", handleScrollToTop);
      }
    };
  }, [navigate]);

  return (
    <div className="navbar-container">
      <nav className={isOpen ? "navbar expanded" : "navbar"}>
        <div className="logo">
          <Link to="/" onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsOpen(false);
          }}>
            <img 
              src={logo} 
              alt="Yoga with Pratish" 
              style={{
                height: '80px',
                width: '80px',
               
                objectFit: 'cover',
                
                transition: 'transform 0.3s ease'
              }}
             
            />
          </Link>
        </div>
        <div>
          <ul className={`nav-menu ${isOpen ? "show-menu" : ""}`}>
            <li className="item">
              <Link
                to="/"
                id="home-link"
                className="links link-color"
                onClick={toggleNav}
              >
                Home
              </Link>
            </li>
            <li className="item">
              <NavLink
                to="/aboutme"
                className={({ isActive }) => `links link-color ${isActive ? "active-link" : ""}`}
                onClick={toggleNav}
              >
                About
              </NavLink>
            </li>
            <li className="item">
              <NavLink
                to="/my-teachings"
                className={({ isActive }) => `links link-color ${isActive ? "active-link" : ""}`}
                onClick={toggleNav}
              >
                My Teachings
              </NavLink>
            </li>
            <li className="item">
              <NavLink
                to="/services"
                className={({ isActive }) => `links link-color ${isActive ? "active-link" : ""}`}
                onClick={toggleNav}
              >
                Services
              </NavLink>
            </li>
            <li className="item">
              <NavLink
                to="/batch-timings"
                className={({ isActive }) => `links link-color ${isActive ? "active-link" : ""}`}
                onClick={toggleNav}
              >
                Batch Timings
              </NavLink>
            </li>
            <li className="contact-btn item">
              <button>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => `links ${isActive ? "active-link" : ""}`}
                  onClick={toggleNav}
                >
                  Contact
                </NavLink>
              </button>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleNav}>
          {isOpen ? <GrClose /> : <FcMenu />}
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
