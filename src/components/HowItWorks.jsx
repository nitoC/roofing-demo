import { motion } from "framer-motion";
import { FiClipboard, FiDroplet, FiTruck, FiHome } from "react-icons/fi";

const STEPS = [
  { icon: FiClipboard, num: "01", title: "Request a survey", desc: "Share your roof dimensions or book a free on-site measurement." },
  { icon: FiDroplet, num: "02", title: "Choose your sheet", desc: "Pick profile, gauge and colour. See the exact price per square metre." },
  { icon: FiTruck, num: "03", title: "We cut & deliver", desc: "Sheets are cut to length at the mill and delivered directly to site." },
  { icon: FiHome, num: "04", title: "Install with confidence", desc: "Work with our certified installers or your own team — warranty either way." }
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" }
  })
};

export default function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="container">
        <p className="eyebrow center">HOW APEXROOF WORKS</p>
        <h2 className="section-title center">From measurement to a finished roof.</h2>
        <p className="section-sub center">
          Know your sheet type, quantity, delivery date and price before you commit to anything.
        </p>

        <div className="steps-grid">
          {STEPS.map(({ icon: Icon, num, title, desc }, i) => (
            <motion.div
              className="step-card"
              key={num}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -6 }}
            >
              <div className="step-icon"><Icon /></div>
              <div className="step-num">{num}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
