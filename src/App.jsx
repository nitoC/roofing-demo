import Topbar from "./components/Topbar.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import TrustStrip from "./components/TrustStrip.jsx";
import Why from "./components/Why.jsx";
import Categories from "./components/Categories.jsx";
import Products from "./components/Products.jsx";
import Calculator from "./components/Calculator.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Cta from "./components/Cta.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Topbar />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Why />
        <Categories />
        <Products />
        <Calculator />
        <HowItWorks />
        <Testimonials />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
