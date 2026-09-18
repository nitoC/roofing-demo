import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiArrowRight } from "react-icons/fi";

const BASE_PRICE_PER_M2 = 10000;
const SHEET_COVERAGE_M2 = 9;

const SHEET_TYPES = [
  { value: 0.85, label: "Aluminum long-span — ₦8,500/m²" },
  { value: 1, label: "Stone-coated — ₦10,000/m²" },
  { value: 0.7, label: "Step tile — ₦7,000/m²" },
  { value: 1.3, label: "Insulated PU panel — ₦13,000/m²" }
];

export default function Calculator() {
  const [area, setArea] = useState(120);
  const [multiplier, setMultiplier] = useState(1);

  const sheets = Math.max(1, Math.ceil(area / SHEET_COVERAGE_M2));
  const cost = Math.round(area * BASE_PRICE_PER_M2 * multiplier);

  return (
    <section className="section section-dark" id="calculator">
      <div className="container calc-inner">
        <motion.div
          className="calc-copy"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">PLAN YOUR ROOF</p>
          <h2 className="section-title light">Your roof is not too far. It needs a number.</h2>
          <p className="section-sub light">
            Tell us your roof size and sheet type — we'll estimate sheet count, cost and
            delivery timeline instantly.
          </p>
          <ul className="calc-list">
            <li><FiCheck /> No hidden charges — see the price before you order</li>
            <li><FiCheck /> Free site survey to confirm exact measurements</li>
            <li><FiCheck /> Delivery in 3–7 working days nationwide</li>
          </ul>
        </motion.div>

        <motion.div
          className="calc-card"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="calc-label">YOUR ROOF ESTIMATE</p>

          <label className="calc-field">
            <span>Roof area (m²)</span>
            <input
              type="range"
              min="30"
              max="500"
              step="10"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
            />
            <div className="calc-field-value">{area} m²</div>
          </label>

          <label className="calc-field">
            <span>Sheet type</span>
            <select value={multiplier} onChange={(e) => setMultiplier(Number(e.target.value))}>
              {SHEET_TYPES.map((s) => (
                <option key={s.label} value={s.value}>{s.label}</option>
              ))}
            </select>
          </label>

          <div className="calc-result">
            <div className="calc-result-row">
              <span>Estimated sheets needed</span>
              <motion.strong key={sheets}>{sheets}</motion.strong>
            </div>
            <div className="calc-result-row">
              <span>Estimated cost</span>
              <motion.strong key={cost}>₦{cost.toLocaleString()}</motion.strong>
            </div>
            <div className="calc-result-row"><span>Delivery window</span><strong>3–7 days</strong></div>
          </div>

          <motion.a
            href="#contact"
            className="btn btn-primary btn-block"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Get exact quote <FiArrowRight />
          </motion.a>
          <p className="calc-disclaimer">*Estimate only. Final quantity confirmed after a free site survey.</p>
        </motion.div>
      </div>
    </section>
  );
}
