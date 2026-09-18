import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { CATEGORIES } from "../data/products.js";

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: (i % 3) * 0.08, ease: "easeOut" }
  })
};

export default function Categories() {
  return (
    <section className="section section-alt">
      <div className="container">
        <p className="eyebrow center">SHOP BY ROOF TYPE</p>
        <h2 className="section-title center">What are you covering?</h2>

        <div className="cat-grid">
          {CATEGORIES.map((c, i) => (
            <motion.a
              className="cat-card"
              href="#products"
              key={c.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -6 }}
            >
              <div className="cat-img">
                <img src={c.img} alt={c.name} loading="lazy" />
              </div>
              <div className="cat-body">
                <h4>{c.name}</h4>
                <p>{c.desc}</p>
                <span className="cat-link">Explore <FiArrowRight /></span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
