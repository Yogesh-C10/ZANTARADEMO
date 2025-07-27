import React from 'react';

export default function Footer() {
    return (
        <footer className="footer-container">
            {/* Inline CSS for this component only */}
            <style jsx>{`
        .footer-container {
          background-color: #3b3c32; /* Dark background, similar to the image */
          color: #e0e0e0; /* Light text color for contrast */
          padding: 3rem 1.5rem 1rem; /* Top padding, left/right padding, bottom padding for copyright */
          position: relative; /* For positioning absolute children like icons */
          font-family: Arial, sans-serif; /* A common, readable font */
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          gap: 2rem; /* Spacing between sections on small screens */
          max-width: 1200px; /* Max width to center content */
          margin: 0 auto; /* Center the content */
          align-items: flex-start; /* Align items to the start */
        }

        @media (min-width: 768px) {
          .footer-content {
            flex-direction: row;
            justify-content: space-between;
            gap: 4rem; /* More space on larger screens */
          }
        }

        .footer-section {
          flex: 1; /* Allows sections to grow and take available space */
          min-width: 250px; /* Minimum width for sections before wrapping */
        }

        .footer-logo-section {
          display: flex;
          flex-direction: column;
          align-items: center; /* Center logo and name */
          text-align: center;
        }

        .footer-logo {
          height: 70px; /* Adjust as needed */
          width: auto;
          margin-bottom: 1rem;
          /* If your logo has a specific background, consider mix-blend-mode or filter for dark background */
        }

        .footer-company-name {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .footer-tagline {
          font-size: 0.9rem;
          color: #a0a0a0;
        }

        .footer-contact-section h3 {
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #ffffff; /* Slightly brighter for headings */
        }

        .footer-contact-section p {
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 0.8rem;
          color: #e0e0e0;
        }

        .footer-contact-section a {
          color: #79b0ed; /* A subtle blue for links */
          text-decoration: none;
        }

        .footer-contact-section a:hover {
          text-decoration: underline;
        }

        .footer-copyright {
          text-align: center;
          font-size: 0.85rem;
          color: #a0a0a0;
          padding-top: 2rem; /* Space above copyright */
          border-top: 1px solid rgba(255, 255, 255, 0.1); /* Subtle separator */
          margin-top: 3rem; /* Space above the line */
        }

        /* Floating Icons */
        .floating-icon {
          position: absolute;
          bottom: 20px; /* Distance from bottom */
          width: 50px; /* Icon size */
          height: 50px; /* Icon size */
          background-color: #25d366; /* WhatsApp green */
          border-radius: 50%; /* Make it round */
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s ease-in-out;
        }

        .floating-icon:hover {
          transform: translateY(-5px); /* Lift effect on hover */
        }

        .whatsapp-icon {
          left: 20px; /* Distance from left edge */
          background-color: #25d366; /* WhatsApp green */
        }

        .whatsapp-icon img {
          width: 65%; /* Adjust icon size inside circle */
          height: 65%;
        }

        .chat-icon {
          right: 20px; /* Distance from right edge */
          background-color: #FF8901; /* Orange for chat, similar to image */
        }

        .chat-icon img {
            width: 100%; /* Make the image fill the circle, it's already a white icon on orange */
            height: 100%;
            object-fit: cover; /* Ensures the image covers the area without distortion */
            border-radius: 50%; /* Maintain roundness */
            }
      `}</style>

            <div className="footer-content">
                {/* Left Section: Logo and Name */}
                <div className="footer-section footer-logo-section">
                    <img src="/images/logo.jpeg" alt="Company Logo" className="footer-logo" />
                    <p className="footer-company-name">ZENTARA</p>
                    <p className="footer-tagline">CONSTRUCTIONS.LLP</p>
                </div>

                {/* Right Section: Contact Details */}
                <div className="footer-section footer-contact-section">
                    <h3>Contact Details</h3>
                    <p>
                    26, Prasiddhi Road Ring Rd, behind MRPL petrol pump,
                        <br />
                        Maralur Dinne, Tumakuru, Karnataka - 572135
                    </p>
                    <p>Phone: +91 9741721064</p>
                    <p>Email: <a href="mailto:zentaraconstructions@gmail.com">zentaraconstructions@gmail.com</a></p>
                </div>
            </div>

            {/* Copyright Information */}
            <div className="footer-copyright">
                © 2025 ZENTARA CONSTRUCTIONS.LLP. All Rights Reserved.
            </div>

            {/* Floating WhatsApp Icon */}
            <a href="https://wa.me/917892931510" target="_blank" rel="noopener noreferrer" className="floating-icon whatsapp-icon">
                {/* You'll need an actual WhatsApp icon image */}
                <img src="/images/WhatsApp.svg.png" alt="WhatsApp" />
            </a>

            {/* Floating Chat Icon */}
            <a href="#contact-us" className="floating-icon chat-icon">
                {/* You'll need an actual chat icon image */}
                <img src="/images/Unknown.png" alt="Chat" />
            </a>
        </footer>
    );
}