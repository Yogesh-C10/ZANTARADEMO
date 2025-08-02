import { AlignCenter } from 'lucide-react';
import React from 'react';

export default function Header() {
  return (
    <header className="header-container">
      {/* Inline CSS for this component only */}
      <style jsx>{`
        .header-container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 0.3rem; /* px-6 */
          background-color: #ffffff; /* bg-white */
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
        }

        
        @media (min-width: 768px) { /* md:flex-row */
          .header-container {
            flex-direction: row;
          }
        }

        .logo-section {
          display: flex;
          align-items: center;
          space-x: 1rem; /* Equivalent to space-x-4, adjust margin-right on logo or margin-left on text */
        }

        .logo-image {
          height: 7.5rem; /* h-14 - Desktop size */
          width: auto;
        }

        .company-name-text {
          color: #000000; /* text-black */
          padding: 10px;
          border-radius: 12px;
        }
        
        .company-name-text p { 
          margin: 0px;
          font-size: 1.5rem; /* text-2xl - Desktop size */
          font-weight: 700; /* font-bold */
          line-height: 1.25; /* leading-tight */
        }

        .company-name-text p .llp-spacing {
          letter-spacing: 0.2em; /* tracking-widest */
        }

        .cta-button-wrapper {
          margin-top: 1rem;
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: flex-end; /* Default to end on larger screens */
        }

        @media (min-width: 768px) { /* md:mt-0 */
          .cta-button-wrapper {
            margin-top: 0;
            justify-content: flex-end; /* Align buttons to the end on desktop */
          }
        }

        .cta-button {
          background-color: #000000; /* bg-black */
          color: #ffffff; /* text-white */
          padding: 0.5rem 1.5rem; /* px-6 py-2 */
          border-radius: 0.25rem; /* rounded */
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); /* shadow */
          transition: background-color 0.15s ease-in-out; /* transition */
          text-decoration: none; /* Remove default anchor underline */
          display: inline-block; /* Allows padding to work correctly */
        }

        .cta-button:hover {
          background-color: #2d3748; /* hover:bg-gray-800 */
        }

        /* --- Mobile Specific Styles (max-width: 767px) --- */
        @media (max-width: 767px) { 
          .logo-image {
            height: 4.5rem; /* Reduced height for mobile */
          }

          .company-name-text p { 
            font-size: 1rem; /* Reduced font size for mobile */
          }
          .company-name-text p .llp-spacing {
            letter-spacing: 0.1em; /* Slightly reduced letter spacing for mobile */
          }
          .company-name-text {
            padding: 5px; /* Reduced padding for mobile */
          }
          .logo-section {
            flex-direction: column; /* Stack logo and text on top of each other on mobile */
            text-align: center;
          }

          /* --- Button Alignment for Mobile --- */
          .cta-button-wrapper {
            flex-direction: column; /* Stack buttons vertically */
            align-items: center;    /* Center individual buttons horizontally */
            width: 100%;            /* Ensure wrapper takes full width */
            padding: 0 1rem;        /* Add some padding to the sides of the wrapper */
          }

          .cta-button {
            display: block; /* Make buttons take full available width in the column */
            width: 100%;    /* Take full width of the wrapper's padded area */
            max-width: 300px; /* Prevent buttons from becoming too wide on slightly larger mobile screens */
            text-align: center; /* Center the text within the button */
          }
        }
      `}</style>

      {/* Logo and Name */}
      <div className="logo-section">
        <img src="/images/clogo.png" alt="Zentara Logo" className="logo-image" />
        <div className="company-name-text">
        <p >ZENTARA</p>
          <p> INTERRIORS AND CONSTRUCTIONS. 
          <span className="llp-spacing"> LLP</span>
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="cta-button-wrapper">
      <a href="#about" className="cta-button">
         ABOUT US
        </a>
      <a href="#form" className="cta-button">
          CARRIERS
        </a>
        <a href="#contact" className="cta-button">
          GET A FREE ESTIMATE
        </a>
       
      </div>
    </header>
  );
}