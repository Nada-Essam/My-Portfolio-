import img from "../imgs/WhatsApp Image 2025-04-26 at 16.47.37_d31e1c8af.jpg";
import "../herosec.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import "@fortawesome/fontawesome-free/css/all.min.css";



export default function Herosec() {

  return (
    <div className="container hero-section" id="home">
      <div className="row align-items-center">
        {/*Text*/}
        <div
          className="col-md-6 text-center text-md-start mt-5 pt-5"
          
        >
          <motion.h1
            className="mb-3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm <span className="brand-highlight">Nada Essam</span>.
          </motion.h1>

          <motion.h2
            className="mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <Typewriter
              words={[
                "Frontend Developer",
                "Building web apps with React.",
                "Creating responsive and user-friendly websites.",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.h2>
          <motion.div className="mb-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1 }}>
          <a
            href="https://github.com/nada-essam"
            target="_blank"
            rel="noreferrer"
            className="mx-2 brand-highlight fs-4"
          >
            <i className="fab fa-github brand-highlight"></i>
          </a>
          <a
            href="https://linkedin.com/in/nada-essam-76161a248"
            target="_blank"
            rel="noreferrer"
            className="mx-2 brand-highlight fs-4"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:nada.e.tantawy@gmail.com"
            className="mx-2 brand-highlight fs-4"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </motion.div>
          <motion.a
            href="/Nada Essam_ Cv.pdf"
            download
            className="btn btn-dark mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            whileInView={{
              y: [0, -8, 0],
              transition: {
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            
          
          >
            Download CV
          </motion.a>
        </div>

        {/* Image*/}
        <div className="col-md-6 text-center">
          <motion.img
            src={img}
            alt="Nada Essam profile picture"
            initial={{ x: 1000, scale: 0.2, opacity: 0 }}
            animate={{ x: 0, scale: 1, opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              type: "spring",
              stiffness: 60,
              damping: 10,
            }}
            className="hero-img img-fluid"
          />
        </div>
      </div>
    </div>
  );
}
