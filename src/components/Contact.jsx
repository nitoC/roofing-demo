import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiArrowRight, FiCheckCircle } from "react-icons/fi";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
    setTimeout(() => setSubmitted(false), 6000);
  }

  return (
    <section className="section" id="contact">
      <div className="container contact-inner">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">GET IN TOUCH</p>
          <h2 className="section-title">Request a free quote</h2>
          <p className="section-sub">
            Fill in your details and our team will call you within 24 hours with a full estimate.
          </p>

          <div className="contact-info">
            <div>
              <span className="contact-icon"><FiMapPin /></span>
              <div><strong>Head office</strong><span>14 Industrial Layout Road, Ikeja, Lagos</span></div>
            </div>
            <div>
              <span className="contact-icon"><FiPhone /></span>
              <div><strong>Phone</strong><span>0800 ROOF NOW · 0803 123 4567</span></div>
            </div>
            <div>
              <span className="contact-icon"><FiMail /></span>
              <div><strong>Email</strong><span>sales@apexroof.ng</span></div>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="form-row">
            <label>Full name<input type="text" required placeholder="Your name" /></label>
            <label>Phone number<input type="tel" required placeholder="080..." /></label>
          </div>
          <label>Email<input type="email" required placeholder="you@email.com" /></label>
          <label>Roof area (approx. m²)<input type="number" placeholder="e.g. 120" /></label>
          <label>Message<textarea rows="4" placeholder="Tell us about your project" /></label>
          <motion.button type="submit" className="btn btn-primary btn-block" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            Request quote <FiArrowRight />
          </motion.button>

          <AnimatePresence>
            {submitted && (
              <motion.p
                className="form-success"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiCheckCircle /> Thanks! Your request has been noted — our team will reach out shortly.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
