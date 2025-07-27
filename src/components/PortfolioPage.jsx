import React from 'react';

// You would ideally fetch this data from an API or a local JSON file
// For now, we'll use dummy data with placeholder image paths.
// Make sure these image paths exist in your public/images/portfolio/ directory!
const portfolioData = {
  electrical: [
    { id: 1, title: "Commercial Building Electrical Solutions", category: "Electrical", image: "/images/portfolio/Complex.webp", description: "Comprehensive electrical infrastructure and sophisticated lighting design for modern commercial complexes, ensuring both energy efficiency and aesthetic appeal. This includes exterior illumination, internal wiring systems, and power distribution for large-scale developments." },
    { id: 2, title: "Retail Lighting & Electrical Fit-out", category: "Electrical", image: "/images/portfolio/Commer.jpg", description: "Expert electrical solutions for retail environments, focusing on dynamic lighting design, efficient power distribution, and seamless integration of display and operational electrical systems to enhance the customer experience and store functionality." },
    { id: 3, title: "Residential Exterior Lighting Design", category: "Electrical", image: "/images/portfolio/Villa1.jxl", description: "Custom-designed and expertly installed outdoor lighting for residential properties, enhancing architectural features, improving security, and creating inviting outdoor spaces. This includes facade lighting, landscape illumination, and driveway lighting solutions." },
    { id: 4, title: "Modern Kitchen Lighting Solutions", category: "Electrical", image: "/images/portfolio/KitchenElectrical1.jpg", description: "Expert installation of comprehensive lighting solutions for contemporary kitchens, including recessed ceiling lights, stylish pendant lights, and functional under-cabinet lighting, enhancing both aesthetics and usability." },
    { id: 5, title: "Integrated Bedroom Lighting Systems", category: "Electrical", image: "/images/portfolio/Bedreeomele.webp", description: "Innovative electrical solutions for modern bedrooms, featuring integrated lighting designs such as statement chandeliers, ambient wall sconces, and subtle LED strip lighting behind feature panels to create a personalized and comfortable atmosphere" },
  ],
  construction: [
    { id: 6, title: "Luxury Villa Build", category: "Construction", image: "/images/portfolio/imageD1.webp", description: "Large-scale commercial building development." },
    { id: 8, title: "Retail Store Renovation", category: "Construction", image: "/images/portfolio/imageD2.jpg", description: "Complete renovation and fit-out for a retail space." },
    { id: 9, title: "Bridge Infrastructure", category: "Construction", image: "/images/portfolio/imageD3.jpg", description: "Development of critical civil infrastructure." },
    { id: 10, title: "Sustainable Office Space", category: "Construction", image: "/images/portfolio/Bunglo.jpg", description: "Eco-friendly office construction with green building principles." },
    { id: 11, title: "Sustainable Office Space", category: "Construction", image: "/images/portfolio/Bunglo2.jpg", description: "Eco-friendly office construction with green building principles." },
  ],
  interiorDesign: [
    { id: 12, title: "Modern Apartment Interior", category: "Interior Design", image: "/images/portfolio/interiorWoodwork1.avif", description: "Sleek and functional design for urban living." },
    { id: 13, title: "Classic Home Makeover", category: "Interior Design", image: "/images/portfolio/interiorWoodwork3.avif", description: "Timeless design incorporating traditional elements." },
    { id: 14, title: "Boutique Hotel Lobby", category: "Interior Design", image: "/images/portfolio/interiorWoodwork2.avif", description: "Luxurious and inviting lobby space for a hotel." },
    { id: 15, title: "Minimalist Studio Loft", category: "Interior Design", image: "/images/portfolio/interiorBedWoodwork.jpg", description: "Clean lines and open spaces for compact living." },
    { id: 16, title: "Restaurant Ambiance Design", category: "Interior Design", image: "/images/portfolio/interiorBedWoodwork2.jpg", description: "Creating a unique dining experience through interior decor." },
  ],
};

// Component for a single Project Card
const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <span className="project-category">{project.category}</span>
        {/* You could add a "View Details" button here */}
      </div>
    </div>
  );
};

export default function PortfolioPage() {
  return (
    <section id="portfolio" className="portfolio-page-container">
      <style jsx>{`
        .portfolio-page-container {
          background-color: #f8f8f8; /* Light background for the page */
          color: #333;
          padding: 6rem 1rem 4rem; /* Top padding to clear fixed header */
          min-height: 100vh;
          font-family: 'Montserrat', sans-serif;
        }

        .page-title {
          font-size: 3.5rem;
          font-weight: 700;
          text-align: center;
          color: #222;
          margin-bottom: 4rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }

        .portfolio-section {
          max-width: 1200px;
          margin: 0 auto 5rem; /* Center section and add bottom margin */
          padding: 0 1.5rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 600;
          color: #00bcd4; /* Use our accent color */
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
        }

        .section-title::after {
          content: '';
          display: block;
          width: 80px;
          height: 4px;
          background-color: #00bcd4;
          margin: 1rem auto 0;
          border-radius: 2px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid */
          gap: 2rem; /* Space between cards */
        }

        .project-card {
          background-color: #ffffff;
          border-radius: 12px;
          overflow: hidden; /* Ensures image corners are rounded */
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%; /* Ensure cards in a row have equal height */
        }

        .project-card:hover {
          transform: translateY(-8px); /* Lift effect on hover */
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
        }

        .project-image {
          width: 100%;
          height: 250px; /* Fixed height for consistent image size */
          object-fit: cover; /* Cover the area, crop if necessary */
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.05); /* Subtle zoom on image hover */
        }

        .project-info {
          padding: 1.5rem;
          flex-grow: 1; /* Allows info section to expand and push category down */
          display: flex;
          flex-direction: column;
        }

        .project-title {
          font-size: 1.7rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .project-description {
          font-size: 1rem;
          color: #666;
          line-height: 1.5;
          margin-bottom: 1rem;
          flex-grow: 1; /* Allows description to take up available space */
        }

        .project-category {
          display: inline-block;
          background-color: #e0f7fa; /* Light teal background */
          color: #00bcd4; /* Dark teal text */
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          align-self: flex-start; /* Aligns to start if using flex-direction column */
          margin-top: 1rem; /* Space from description */
        }

        /* Adjustments for very small screens */
        @media (max-width: 500px) {
            .page-title {
                font-size: 2.5rem;
                margin-bottom: 2.5rem;
            }
            .section-title {
                font-size: 2rem;
                margin-bottom: 2rem;
            }
            .project-image {
                height: 200px; /* Smaller image height on very small screens */
            }
            .project-title {
                font-size: 1.4rem;
            }
            .project-info {
                padding: 1rem;
            }
        }
      `}</style>

      <h1 className="page-title">Our Recent Work</h1>

      {/* Electrical Section */}
      <section className="portfolio-section">
        <h2 className="section-title">Electrical Projects</h2>
        <div className="projects-grid">
          {portfolioData.electrical.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Construction Section */}
      <section className="portfolio-section">
        <h2 className="section-title">Construction Projects</h2>
        <div className="projects-grid">
          {portfolioData.construction.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Interior Design Section */}
      <section className="portfolio-section">
        <h2 className="section-title">Interior Design Projects</h2>
        <div className="projects-grid">
          {portfolioData.interiorDesign.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </section>
  );
}