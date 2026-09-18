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

  // Closing the mobile menu collapses its height with an animation. If we
  // let the browser's native anchor jump fire at the same time, it scrolls
  // to the target's position while the menu is still open (tall), then the
  // collapse shifts everything up afterward and cancels the scroll out.
  // So: intercept the click, close the menu, then scroll once it's closed.
  function goToSection(e, href) {
    e.preventDefault();
    setOpen(false);
    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 280);
  }

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
              <a key={l.href} href={l.href} onClick={(e) => goToSection(e, l.href)}>{l.label}</a>
            ))}
            <div className="mobile-nav-actions">
              <a href="#products" className="btn btn-outline btn-block" onClick={(e) => goToSection(e, "#products")}>
                Shop sheets
              </a>
              <a href="#contact" className="btn btn-primary btn-block" onClick={(e) => goToSection(e, "#contact")}>
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
