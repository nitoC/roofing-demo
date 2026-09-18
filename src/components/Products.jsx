import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { PRODUCTS } from "../data/products.js";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "stone", label: "Stone-coated" },
  { id: "aluminum", label: "Aluminum" },
  { id: "tile", label: "Step tile" },
  { id: "accessory", label: "Accessories" }
];

export default function Products() {
  const [filter, setFilter] = useState("all");

  const items = useMemo(
    () => (filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === filter)),
    [filter]
  );

  return (
    <section className="section" id="products">
      <div className="container">
        <div className="section-head-row">
          <div>
            <p className="eyebrow">POPULAR RIGHT NOW</p>
            <h2 className="section-title">Sheets ApexRoof customers are ordering</h2>
          </div>
          <a href="#" className="link-arrow">See full catalogue <FiArrowRight /></a>
        </div>

        <div className="filter-row">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              className={`filter-chip${filter === f.id ? " active" : ""}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="product-grid">
          <AnimatePresence mode="popLayout">
            {items.map((p) => (
              <motion.div
                className="product-card"
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                whileHover={{ y: -6, boxShadow: "0 20px 45px -25px rgba(23,21,18,0.35)" }}
              >
                <div className="product-thumb">
                  <img src={p.img} alt={p.name} loading="lazy" />
                  <span className="product-badge">{p.badge}</span>
                </div>
                <div className="product-body">
                  <span className="product-cat">{p.catLabel}</span>
                  <span className="product-name">{p.name}</span>
                  <span className="product-desc">{p.desc}</span>
                  <span className="product-price">
                    ₦{p.price.toLocaleString()} <small>/ {p.unit}</small>
                  </span>
                  <a href="#contact" className="product-cta">Request quote</a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
