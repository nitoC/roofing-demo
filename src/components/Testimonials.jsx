import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const TESTIMONIALS = [
  {
    quote: "We ordered stone-coated sheets for a 9-unit estate. Delivery was on time and every sheet matched the sample exactly.",
    name: "Tunde O.",
    role: "Property developer, Lagos",
    initials: "TO"
  },
  {
    quote: "The free site survey saved us from over-ordering. Their aluminum sheets have held up through two rainy seasons already.",
    name: "Chidinma E.",
    role: "Homeowner, Enugu",
    initials: "CE"
  },
  {
    quote: "Ordered box profile sheets for our warehouse. Gauge was exactly as specified — no thinning like the sheets we bought before.",
    name: "Musa B.",
    role: "Warehouse owner, Kano",
    initials: "MB"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" }
  })
};

export default function Testimonials() {
  return (
    <section className="section section-alt" id="testimonials">
      <div className="container">
        <p className="eyebrow center">FROM SITES ACROSS THE COUNTRY</p>
        <h2 className="section-title center">Roofs our customers trust.</h2>

        <div className="testi-grid">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              className="testi-card"
              key={t.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -6 }}
            >
              <div>
                <div className="testi-stars">
                  {Array.from({ length: 5 }).map((_, s) => <FiStar key={s} fill="currentColor" />)}
                </div>
                <p style={{ marginTop: 12 }}>"{t.quote}"</p>
              </div>
              <div className="testi-author">
                <div className="testi-avatar">{t.initials}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
