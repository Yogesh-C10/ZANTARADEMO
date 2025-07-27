// src/components/HeroSection.jsx
import { useState, useEffect } from "react"; // Import useState and useEffect for image slideshow
import { ArrowDownCircle } from "lucide-react";

export default function HeroSection() {
  const scrollToForm = () => {
    const formSection = document.getElementById("form");
    if (formSection) formSection.scrollIntoView({ behavior: "smooth" });
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // IMPORTANT: PLACE YOUR HERO SECTION IMAGE PATHS HERE
  // These images should be in your public/images/ folder
  const heroBackgroundImages = [
    "/images/ELiving.jpg", // Example: Replace with your actual hero image 1
    "/images/ERoom.jpeg", // Example: Replace with your actual hero image 3
    "/images/L2.webp",
    "/images/image4.jpg",
    "/images/image5.jpg",
    // Add more image paths here as needed for your slideshow
    // "/images/hero-bg-6.jpg",
  ];
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  useEffect(() => {
    // Set up the interval for changing background images
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % heroBackgroundImages.length
      );
    }, 2000); // Change image every 10 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [heroBackgroundImages.length]); // Re-run effect if image count changes


  return (
    <section className="hero-section-container">
      {/* Inline CSS for this component only */}
      <style jsx>{`
        .hero-section-container {
          position: relative;
          color: #ffffff; /* text-white */
          height: 100vh; /* h-screen */
          display: flex;
          align-items: center; /* items-center */
          justify-content: center; /* justify-center */
          overflow: hidden; /* overflow-hidden */
          /* Dynamic background image from state */
          background-image: url(${heroBackgroundImages[currentImageIndex]});
          background-size: cover; /* Cover the entire area */
          background-position: center; /* Center the image */
          transition: background-image 1.5s ease-in-out; /* Smooth transition for background change */
        }

        /* Removed .hero-background-image <img> tag and its styles
           as the background will now be set directly on the section */

        .hero-overlay {
          position: absolute;
          inset: 0; /* inset-0 */
          background-image: linear-gradient(
            to bottom right,
            rgba(0, 0, 0, 0.7), /* from-black/70 */
            rgba(0, 0, 0, 0.5), /* via-black/50 */
            rgba(0, 0, 0, 0.6) /* to-black/60 */
          );
          z-index: 10; /* z-10 */
        }

        .hero-content {
          position: relative; /* relative */
          z-index: 20; /* z-20 */
          text-align: center; /* text-center */
          padding: 0 1rem; /* px-4 */
          max-width: 48rem; /* max-w-2xl, approx 768px */
          /* Animate fade-in (example CSS animation) */
          animation: fadeIn 1.5s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-title {
          font-size: 3rem; /* text-5xl */
          line-height: 1.25; /* leading-tight */
          font-weight: 700; /* font-bold */
          margin-bottom: 1.5rem; /* mb-6 */
        }

        @media (min-width: 768px) { /* md:text-6xl */
          .hero-title {
            font-size: 3.75rem; /* text-6xl */
          }
        }

        .hero-description {
          font-size: 1.125rem; /* text-lg */
          margin-bottom: 2rem; /* mb-8 */
        }

        @media (min-width: 768px) { /* md:text-xl */
          .hero-description {
            font-size: 1.25rem; /* text-xl */
          }
        }

        .hero-buttons {
          display: flex; /* flex */
          flex-direction: column; /* flex-col */
          justify-content: center; /* justify-center */
          gap: 1rem; /* gap-4 */
        }

        @media (min-width: 640px) { /* sm:flex-row */
          .hero-buttons {
            flex-direction: row;
          }
        }

        .hero-button {
          padding: 0.75rem 1.5rem; /* px-6 py-3 */
          border-radius: 9999px; /* rounded-full */
          font-weight: 600; /* font-semibold */
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-lg */
          transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease; /* transition */
          text-decoration: none; /* Remove underline from a tag */
          display: inline-block; /* Ensure padding applies correctly */
        }

        .hero-button-primary {
          background-color: #ffffff; /* bg-white */
          color: #000000; /* text-black */
        }

        .hero-button-primary:hover {
          background-color: #e2e8f0; /* hover:bg-gray-200 */
        }

        .hero-button-secondary {
          border: 1px solid #ffffff; /* border border-white */
          color: #ffffff;
        }

        .hero-button-secondary:hover {
          background-color: #ffffff; /* hover:bg-white */
          color: #000000; /* hover:text-black */
        }

        .scroll-down-indicator {
          margin-top: 2.5rem; /* mt-10 */
          /* Animate bounce (example CSS animation) */
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .scroll-down-icon {
          margin-left: auto; /* mx-auto */
          margin-right: auto; /* mx-auto */
          cursor: pointer;
        }
      `}</style>

      {/* The background image is now set via CSS background-image property on .hero-section-container */}
      {/* We no longer need this <img> tag */}
      {/* <img
        src="/images/kitchen.jpg"
        alt="Luxury Interior"
        className="hero-background-image"
      /> */}

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Transforming Spaces with Style
        </h1>
        <p className="hero-description">
          Top-rated interior designers in Bangalore creating spaces that reflect your vision.
        </p>
        <div className="hero-buttons">
          <button
            onClick={scrollToForm}
            className="hero-button hero-button-primary"
          >
            Get a Free Consultation
          </button>
          <a
            href="#portfolio"
            className="hero-button hero-button-secondary"
          >
            View Our Work
          </a>
        </div>
        <div className="scroll-down-indicator">
          <ArrowDownCircle size={36} className="scroll-down-icon" onClick={scrollToForm} />
        </div>
      </div>
    </section>
  );
}