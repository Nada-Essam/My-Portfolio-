import img from "../imgs/WhatsApp Image 2025-04-26 at 16.47.37_d31e1c8af.jpg";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";

export default function About() {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      style={{
        marginTop: "290px",
        backgroundColor: theme ? "#121212" : "#f8f9fa",
        color: theme ? "#f5f5f5" : "#000",
      }}
      className="about-section py-5"
    >
      <div className="container text-center">
        <h2 className="mb-4 pt-3 fw-bold">About Me</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <motion.img
              src={img}
              alt="about"
              className="img-fluid"
              style={{
                maxWidth: "100%",
                height: "400px",
                borderRadius: "15px",
                objectFit: "cover",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>

          <motion.div
            className="col-md-6 mt-4 mt-md-0"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="fw-bold mb-3">
              Hi, I'm <span className="brand-highlight">Nada</span> 👋
            </h3>
            <p className="lead">
              A passionate Frontend Developer with a strong eye for design and
              user experience. I specialize in creating modern, responsive, and
              accessible web interfaces using React, Redux, and Bootstrap.
            </p>
            <p className="lead">
              I started my journey in web development out of curiosity and fell
              in love with building real-world projects. I’ve been continuously
              learning and challenging myself.
            </p>
            <p className="lead">
              I’m detail-oriented, always eager to grow, and I believe great
              products are built with empathy and clean code.
            </p>
            <p className="lead">Thanks for stopping by — let's build something awesome!</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
