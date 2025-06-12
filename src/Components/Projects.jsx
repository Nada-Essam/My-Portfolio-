import img1 from "../imgs/pro1.PNG";
import img2 from "../imgs/pro2.PNG";
import img3 from "../imgs/pro3.PNG";
import img4 from "../imgs/pro4.PNG";
import img5 from "../imgs/pro5.PNG";
import "../project.css";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
export default function Projects() {
  const { theme } = useTheme();
  const bg = theme ? "#121212" : "#f2f2f2";
  const cardClass = theme ? "bg-dark text-white" : "bg-white";

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, rotateY: 90 },
    show: { opacity: 1, rotateY: 0, transition: { duration: 0.6 } },
  };

  const projects = [
    {
      title: "E-Commerce Website",
      desc: "React & Redux online shop",
      live: "https://nada-essam.github.io/E-commerce/",
      code: "https://github.com/Nada-Essam/E-commerce",
      img: img1,
    },
    {
      title: "Yummy Website",
      desc: "Restaurant site using JavaScript & Tailwind",
      live: "https://nada-essam.github.io/Yummy/",
      code: "https://github.com/Nada-Essam/Yummy",
      img: img2,
    },
    {
      title: "CRUDS Website",
      desc: "CRUD app using JavaScript & Bootstrap",
      live: "https://nada-essam.github.io/CRUDS-System/",
      code: "https://github.com/Nada-Essam/CRUDS-System",
      img: img3,
    },
    {
      title: "X-O Game",
      desc: "Simple JavaScript X-O Game",
      live: "https://nada-essam.github.io/X---O-Game/",
      code: "https://github.com/Nada-Essam/X---O-Game",
      img: img4,
    },
    {
      title: "Todo List",
      desc: "Simple Todo List App",
      live: "https://nada-essam.github.io/To-do-List/",
      code: "https://github.com/Nada-Essam/To-do-List",
      img: img5,
    },
  ];

  return (
    <section
      className="projects-section py-5"
      id="projects"
      style={{ marginTop: "150px", backgroundColor: bg, color: theme ? "#eee" : "#000" }}
    >
      <div className="container text-center">
        <h2 className="mb-4 pt-3 fw-bold">Things I've Built</h2>
        <motion.div
          className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((proj, idx) => (
            <motion.div className="col" variants={itemVariants} key={idx}>
              <div className={`card project-card shadow-sm border-0 overflow-hidden ${cardClass}`}>
                <div className="project-img-wrapper position-relative">
                  <img src={proj.img} className="card-img-top img-fluid" alt="Project" />
                  <div className="overlay d-flex flex-column justify-content-center align-items-center text-white">
                    <h5 className="fw-bold">{proj.title}</h5>
                    <p className="px-3 text-center">{proj.desc}</p>
                    <div className="d-flex justify-content-center gap-2">
                      <a href={proj.live} target="_blank" rel="noreferrer" className="btn btn-outline-light btn-sm">Live</a>
                      <a href={proj.code} target="_blank" rel="noreferrer" className="btn btn-outline-light btn-sm">Code</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
