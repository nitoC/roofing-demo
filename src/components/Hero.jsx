import { motion } from "framer-motion";
import { FiArrowRight, FiShield, FiCheck } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="eyebrow">Original gauge. Certified strength.</p>
          <h1>
            Roofing sheets
            <br /> built for <span>every season.</span>
          </h1>
          <p className="hero-sub">
            Shop original stone-coated, aluminum and long-span roofing sheets from certified
            mills. Get a free coverage estimate and nationwide delivery to your site.
          </p>
          <div className="hero-cta">
            <motion.a
              href="#products"
              className="btn btn-primary btn-lg"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Shop roofing sheets <FiArrowRight />
            </motion.a>
            <motion.a
              href="#calculator"
              className="btn btn-outline btn-lg"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Estimate my roof
            </motion.a>
          </div>
          <div className="hero-trust">
            {[
              ["15+ yrs", "Industry experience"],
              ["40,000+", "Roofs covered"],
              ["25", "Colors in stock"]
            ].map(([n, l], i) => (
              <motion.div
                className="hero-trust-item"
                key={l}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <strong>{n}</strong>
                <span>{l}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <div className="hero-blob" />
          <div className="hero-photo-wrap">
            <div className="hero-badge-float">
              <FiShield /> 25yr warranty
            </div>
            <img src="/images/hero.jpg" alt="Roofer installing metal roofing sheets" />
          </div>

          <motion.div
            className="hero-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="hero-card-label">Live coverage estimate</p>
            <div className="hero-card-row"><span>Roof area</span><strong>120 m²</strong></div>
            <div className="hero-card-row"><span>Sheet type</span><strong>Stone-coated</strong></div>
            <div className="hero-card-progress">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "62%" }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              />
            </div>
            <p className="hero-card-note">
              <FiCheck style={{ verticalAlign: "-2px", marginRight: 4 }} />
              62% — sheets reserved, awaiting delivery slot
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
