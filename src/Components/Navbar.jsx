import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/images/zitelle-logo.png";

const services = [
  { num: "01", label: "Oil", path: "/services/cooking-oil" },
  { num: "02", label: "Soap", path: "/services/soap" },
  { num: "03", label: "Plywood", path: "/services/plywood" },
  { num: "04", label: "Packaging", path: "/services/packaging" },
  { num: "05", label: "De-Oil Cake", path: "/services/pk" },
];

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Our Businesses", path: "/business" },
  { label: "Why Us", path: "/why_us" },
  { label: "Careers", path: "/careers" },
  { label: "News", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  /* ── HIDE ON SCROLL ── */
  useEffect(() => {
    const handleScroll = () => setHidden(window.scrollY > 1);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── CLOSE DROPDOWN ON OUTSIDE CLICK ── */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ── LOCK BODY SCROLL WHEN MENU OPEN ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ── DESKTOP NAVBAR ── */}
      <nav className={`navbar ${hidden ? "navbar--hidden" : ""}`}>
        {/* LOGO */}
        <Link to="/">
          <img src={logo} alt="Zitelle Group" className="navbar__logo" />
        </Link>

        {/* NAV LINKS */}
        <ul className="navbar__links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>
          </li>

          {/* DROPDOWN */}
          <li
            className="navbar__dropdown"
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div className="navbar__dropdown-trigger">
              <NavLink
                to="/business"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Our Businesses
              </NavLink>

              <button
                type="button"
                className="navbar__dropdown-toggle"
                onClick={() => setDropdownOpen((prev) => !prev)}
                aria-label="Toggle business menu"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className={`navbar__dropdown-chevron ${dropdownOpen ? "rotate-180" : ""}`}
                >
                  <path
                    d="M3 5l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <ul
              className={`navbar__dropdown-menu ${dropdownOpen ? "navbar__dropdown-menu--open" : ""}`}
            >
              {services.map((service) => (
                <li key={service.num}>
                  <Link
                    to={service.path}
                    onClick={() => setDropdownOpen(false)}
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <NavLink
              to="/why_us"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Why Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/careers"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Careers
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              News
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* HAMBURGER */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path
              d="M4 7h18M4 13h18M4 19h18"
              stroke="#1A1A1A"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {/* ── MOBILE MENU ── */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {/* HEAD — fixed, never scrolls */}
        <div className="mobile-menu__head">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Zitelle Group" className="navbar__logo" />
          </Link>
          <button
            className="mobile-menu__close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* BODY — scrollable */}
        <div className="mobile-menu__body">
          {/* Our Businesses */}
          <p className="mobile-menu__services-label">Our Businesses</p>
          <ul className="mobile-menu__services">
            {services.map((service) => (
              <li key={service.num}>
                <Link to={service.path} onClick={() => setMenuOpen(false)}>
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Main nav links */}
          <ul className="mobile-menu__links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink to={link.path} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA — fixed at bottom */}
        <div className="mobile-menu__cta">
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Get In Touch
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
