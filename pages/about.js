import { motion } from "framer-motion";
import About from "../components/About";

const AboutPage = ({ router, works }) => {
  return (
    <motion.div
      key={router.route}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      <About />
    </motion.div>
  );
};

export default AboutPage;
