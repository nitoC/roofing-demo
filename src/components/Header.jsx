import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiPhoneCall } from "react-icons/fi";
import { TbTriangleFilled } from "react-icons/tb";

const LINKS = [
  { href: "#products", label: "Products" },
  { href: "#why", label: "Why ApexRoof" },
  { href: "#how", label: "How it works" },
  { href: "#calculator", label: "Calculator" },
  { href: "#testimonials", label: "Stories" },
  { href: "#contact", label: "Contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="logo">
          <span className="logo-mark"><TbTriangleFilled /></span>
          ApexRoof
        </a>
        <nav className="nav">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <a href="#contact" className="btn btn-ghost">Get a quote</a>
          <a href="#products" className="btn btn-primary">Shop sheets</a>
        </div>
        <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
            <div className="mobile-nav-actions">
              <a href="#products" className="btn btn-outline btn-block" onClick={() => setOpen(false)}>
                Shop sheets
              </a>
              <a href="#contact" className="btn btn-primary btn-block" onClick={() => setOpen(false)}>
                Get a quote
              </a>
              <a href="tel:08007663669" className="mobile-nav-phone" onClick={() => setOpen(false)}>
                <FiPhoneCall /> 0800 ROOF NOW
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
