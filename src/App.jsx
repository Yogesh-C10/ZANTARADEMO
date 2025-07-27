// src/App.jsx
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FormSection from "./components/FormSection";
import Portfolio from "./components/PortfolioPage";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <Portfolio />
      <FormSection />
      <Footer />
    </>
  );
}