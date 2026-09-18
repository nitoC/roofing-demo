import { motion } from "framer-motion";
import { FiAward, FiCheckCircle, FiShield, FiTruck, FiClipboard } from "react-icons/fi";

const ITEMS = [
  [FiAward, "SGS Certified"],
  [FiCheckCircle, "NIS Approved"],
  [FiShield, "25-Year Warranty"],
  [FiTruck, "Nationwide Logistics"],
  [FiClipboard, "Free Site Survey"]
];

export default function TrustStrip() {
  return (
    <section className="strip">
      <div className="container strip-inner">
        {ITEMS.map(([Icon, label], i) => (
          <motion.span
            className="strip-item"
            key={label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <Icon /> {label}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
