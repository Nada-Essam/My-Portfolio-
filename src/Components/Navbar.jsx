import "../navbar.css";
import "../index.css";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className={`navbar navbar-expand-lg py-2 shadow-sm fixed-top ${
        theme ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <a className="navbar-brand fw-bold fs-4" href="/">
          <span className="brand-highlight">Nada</span>.Dev
        </a>

        {/* Toggler button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links + toggle */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item">
              <a className="nav-link fs-5" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#projects">
                Projects
              </a>
            </li>
          </ul>

          {/* Toggle Button */}
          <div className="d-flex justify-content-center justify-content-lg-end mt-3 mt-lg-0">
    <button
      className="btn btn-outline-secondary"
      style={{
        width: "40px",
        height: "40px",
        fontSize: "20px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={toggleTheme}
    >
      {theme ? "☀" : "🌙"}
    </button>
  </div>
        </div>
      </div>
    </nav>
  );
}
