import { motion } from "framer-motion";
import { FiArrowRight, FiPhone } from "react-icons/fi";

export default function Cta() {
  return (
    <section className="cta">
      <div className="container cta-inner">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Original sheets. Honest gauge.<br />A roof that lasts.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Get a free estimate today and see exactly what your roof will cost — before you order.
        </motion.p>
        <motion.div
          className="cta-actions"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.a href="#products" className="btn btn-primary btn-lg" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            Shop roofing sheets <FiArrowRight />
          </motion.a>
          <motion.a href="#contact" className="btn btn-outline-light btn-lg" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            <FiPhone /> Talk to sales
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
