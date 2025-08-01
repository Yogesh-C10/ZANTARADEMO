import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet icon paths
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

export default function Footer() {
  const zentaraLocation = [13.336109, 77.106509];

  return (
    <footer className="footer-container">
      <style>{`
        .footer-container {
          background-color: #3b3c32;
          color: #e0e0e0;
          padding: 3rem 1.5rem 1rem;
          font-family: Arial, sans-serif;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          align-items: flex-start;
        }

        @media (min-width: 768px) {
          .footer-content {
            flex-direction: row;
            justify-content: space-between;
            gap: 4rem;
          }
        }

        .footer-section {
          flex: 1;
          min-width: 250px;
        }

        .footer-logo-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .footer-logo {
          height: 70px;
          width: auto;
          margin-bottom: 1rem;
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

        .footer-contact-section h3,
        .footer-section h3 {
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .footer-contact-section p,
        .footer-section p {
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 0.8rem;
          color: #e0e0e0;
        }

        .footer-contact-section a {
          color: #79b0ed;
          text-decoration: none;
        }

        .footer-contact-section a:hover {
          text-decoration: underline;
        }

        .footer-map-container {
          width: 100%;
          height: 300px;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          background-color: #e0e0e0;
        }

        .floating-icon {
          position: fixed;
          bottom: 20px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s ease-in-out;
          z-index: 1000;
        }

        .floating-icon:hover {
          transform: translateY(-5px);
        }

        .whatsapp-icon {
          left: 20px;
          background-color: #25d366;
        }

        .whatsapp-icon img {
          width: 65%;
          height: 65%;
        }

        .chat-icon {
          right: 20px;
          background-color: #FF8901;
        }

        .chat-icon img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .footer-copyright {
          text-align: center;
          font-size: 0.85rem;
          color: #a0a0a0;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 3rem;
        }
      `}</style>

      <div className="footer-content">
        <div className="footer-section footer-logo-section">
          <img src="/images/clogo.png" alt="Company Logo" className="footer-logo" />
          <p className="footer-company-name">ZENTARA INTERRIORS AND CONSTRUCTIONS. LLP</p>
          
        </div>

        <div className="footer-section footer-contact-section">
          <h3>Contact Details</h3>
          <p>
            26, Prasiddhi Road Ring Rd,<br />behind MRPL petrol pump,<br />Maralur Dinne, Tumakuru, Karnataka - 572135
          </p>
          <p>Phone: +91 9741721064</p>
          <p>Email: <a href="mailto:zentaraconstructions@gmail.com">zentaraconstructions@gmail.com</a></p>
        </div>

        <div className="footer-section">
          <h3>Find Us Here</h3>
          <div className="footer-map-container">
            <MapContainer center={zentaraLocation} zoom={15} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={zentaraLocation}>
                <Popup>
                  <div style={{ textAlign: 'center' }}>
                    <h4>ZENTARA INTERRIORS AND CONSTRUCTIONS. LLP</h4>
                    <img src="/images/clogo.png" alt="Shop" style={{ width: '100px', borderRadius: '8px' }} />
                    <p>Tumakuru, Karnataka</p>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        © 2025 ZENTARA CONSTRUCTIONS.LLP. All Rights Reserved.
      </div>

      <a href="https://wa.me/917892931510" target="_blank" rel="noopener noreferrer" className="floating-icon whatsapp-icon">
        <img src="/images/WhatsApp.svg.png" alt="WhatsApp" />
      </a>

      <a href="#contact-us" className="floating-icon chat-icon">
        <img src="/images/chatbot.png" alt="Chat" />
      </a>
    </footer>
  );
}