import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import { TbTriangleFilled } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col footer-brand">
          <a href="#" className="logo logo-light"><span className="logo-mark"><TbTriangleFilled /></span> ApexRoof</a>
          <p>Original roofing sheets. Honest gauge. Nationwide delivery.</p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook"><FiFacebook /></a>
            <a href="#" aria-label="Instagram"><FiInstagram /></a>
            <a href="#" aria-label="Twitter"><FiTwitter /></a>
            <a href="#" aria-label="YouTube"><FiYoutube /></a>
          </div>
        </div>
        <div className="footer-col">
          <h5>Shop</h5>
          <a href="#products">All sheets</a>
          <a href="#products">Categories</a>
          <a href="#calculator">Roof calculator</a>
          <a href="#how">How it works</a>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <a href="#why">Why ApexRoof</a>
          <a href="#testimonials">Customer stories</a>
          <a href="#contact">Contact us</a>
        </div>
        <div className="footer-col">
          <h5>Support</h5>
          <a href="#contact">Get a quote</a>
          <a href="#">Warranty &amp; returns</a>
          <a href="#">Delivery policy</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 ApexRoof. All rights reserved.</span>
        <span>Terms · Privacy · Delivery</span>
      </div>
    </footer>
  );
}
