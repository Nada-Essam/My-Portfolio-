import img1 from "../imgs/images.png";
import img2 from "../imgs/CSS3_logo.svg.png";
import img3 from "../imgs/Unofficial_JavaScript_logo_2.svg.png";
import img4 from "../imgs/18702310.png";
import img5 from "../imgs/images.jpeg";
import img6 from "../imgs/tailwind-css-logo-png_seeklogo-354675.png";
import img7 from "../imgs/Typescript.svg.png";
import img8 from "../imgs/1174949_js_react js_logo_react_react native_icon.png";
import img9 from "../imgs/redux-icon-1024x971-2ocv6rm8.png";
import img10 from "../imgs/next-js-logo-png_seeklogo-449824.png";
import img11 from "../imgs/18133.png";
import img12 from "../imgs/GitHub_Invertocat_Logo.svg.png";
import { motion } from "framer-motion";
import "../skills.css"
import { useTheme } from "./ThemeContext";
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  const { theme } = useTheme();
  const bgCard = theme ? "bg-dark text-white" : "bg-white";

  const skills = [
    { img: img1, title: "HTML" },
    { img: img2, title: "CSS" },
    { img: img3, title: "JavaScript" },
    { img: img4, title: "ES6" },
    { img: img5, title: "Bootstrap" },
    { img: img6, title: "Tailwind" },
    { img: img7, title: "TypeScript" },
    { img: img8, title: "React" },
    { img: img9, title: "Redux Toolkit" },
    { img: img10, title: "Next.js" },
    { img: img11, title: "Git" },
    { img: img12, title: "GitHub" },
  ];

  return (
    <section
      className="skills-section py-5"
      id="skills"
      style={{
        marginTop: "150px",
        backgroundColor: theme ? "#121212" : "#f2f2f2",
        color: theme ? "#f5f5f5" : "#000",
      }}
    >
      <div className="container text-center">
        <h2 className="mb-4 fw-bold">My Skills</h2>
        <motion.div
          className="row row-cols-2 row-cols-md-4 g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill, idx) => (
            <div className="col" key={idx}>
              <motion.div
                className={`skill-box p-4 shadow rounded ${bgCard}`}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={skill.img}
                  alt={skill.title}
                  style={{ width: "80px", height: "80px" }}
                />
                <p className="mt-3 fw-semibold">{skill.title}</p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}