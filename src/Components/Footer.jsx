import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer
      className="bg-dark text-white text-center py-4 "
      style={{ marginTop: "150px" }}
    >
      <div className="container">
        <div className="mb-3">
          <a
            href="https://github.com/nada-essam"
            target="_blank"
            rel="noreferrer"
            className="mx-2 text-white fs-4"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/nada-essam-76161a248"
            target="_blank"
            rel="noreferrer"
            className="mx-2 text-white fs-4"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:nada.e.tantawy@gmail.com"
            className="mx-2 text-white fs-4"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p className="mb-0">Designed & Built by Nada Essam © 2025</p>
      </div>
    </footer>
  );
}
