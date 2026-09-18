import { motion } from "framer-motion";
import { FiShield, FiDroplet, FiTruck, FiClipboard } from "react-icons/fi";

const ITEMS = [
  { icon: FiShield, title: "Certified original", desc: "Every batch is mill-certified with the true gauge stamped — no thinning, no shortcuts." },
  { icon: FiDroplet, title: "25 colors, in stock", desc: "From classic red oxide to matte charcoal — colour-matched coating that won't fade in the sun." },
  { icon: FiTruck, title: "Nationwide delivery", desc: "Sheets cut to length and delivered straight to your site — no bending, no waste in transit." },
  { icon: FiClipboard, title: "Free site survey", desc: "Our team measures your roof and gives you an exact sheet count before you pay a naira." }
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" }
  })
};

export default function Why() {
  return (
    <section className="section" id="why">
      <div className="container">
        <p className="eyebrow center">THREE PROMISES. ONE STRONGER ROOF.</p>
        <h2 className="section-title center">Original sheets. Honest gauge. Real coverage.</h2>
        <p className="section-sub center">
          ApexRoof isn't a roadside sheet stall. We source directly from certified rolling mills
          and stand behind every coil with a written warranty.
        </p>

        <div className="why-grid">
          {ITEMS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              className="why-card"
              key={title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -6, boxShadow: "0 20px 45px -25px rgba(23,21,18,0.35)" }}
            >
              <div className="why-icon"><Icon /></div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
