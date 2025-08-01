import React from "react";

const teamMembers = [
  {
    name: "SHASHIKUMAR B",
    role: "BE, PG-DESD, Govt. Class 1 & Supv. ELE",
    image: "/images/team/image.png", // Make sure path is correct
  },
  {
    name: "K NAVNEETH NAIK",
    role: "BE, PGP, MBA, M.Sc",
    image: "/images/team/image.png", // Make sure path is correct
  },
//   {
//     name: "Rohan Desai",
//     role: "Lead Architect",
//     image: "/images/team/image.png", // Make sure path is correct
//   },
//   {
//     name: "Sneha Mehta",
//     role: "Project Manager",
//     image: "/images/team/image.png", // Make sure path is correct
//   },
//   {
//     name: "Arjun Singh", // Added for 5 members for scrolling demo
//     role: "Design Lead",
//     image: "/images/team/image.png", // Make sure path is correct
//   },
];

export default function AboutUs() {
  // Duplicate teamMembers for infinite scroll effect (e.g., 2 or 3 times)
  const scrollingTeamMembers = [...teamMembers, ...teamMembers, ...teamMembers];

  return (
    <section id="about" className="about-us-container">
      {/* Inline CSS for this component only */}
      <style jsx>{`
        .about-us-container {
           background: url('/images/team/i6.avif') no-repeat center center;
            background-size: cover;
          color: #333; /* Default text color */
         /*  padding: 6rem 1rem; px-6 py-12, increased for better spacing */
          font-family: 'Montserrat', sans-serif; /* Modern font */
          overflow: hidden; /* Ensure scrolling content doesn't create scrollbars */
        }

        /* Motto Section */
        .motto-section {
          text-align: center; /* text-center */
          margin-bottom: 5rem; /* mb-12, increased */
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .motto-title {
          font-size: 3.5rem; /* text-4xl, increased */
          font-weight: 700; /* font-bold */
          color: #00bcd4; /* text-blue-700, changed to our accent color */
          margin-bottom: 1.5rem; /* mb-4 */
          line-height: 1.2;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
        }

        .motto-description {
          font-size: 1.25rem; /* text-lg, slightly larger */
          color: #555; /* text-gray-600 */
          line-height: 1.6;
        }

        /* Vision & Mission Section */
        .vision-mission-grid {
          display: grid;
          grid-template-columns: 1fr; /* Default to single column */
          gap: 3rem; /* gap-10, increased */
          margin-bottom: 5rem; /* mb-16, increased */
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 1.5rem; /* Add horizontal padding */
        }

        @media (min-width: 768px) { /* md:grid-cols-2 */
          .vision-mission-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .vision-mission-item {
          background-color: #f0f8ff; /* Light blue background */
          border-left: 5px solid #00bcd4; /* Accent border */
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .vision-mission-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
        }

        .vision-mission-item h3 {
          font-size: 2rem; /* text-2xl, increased */
          font-weight: 600; /* font-semibold */
          color: #008c9e; /* text-blue-600, darker accent blue */
          margin-bottom: 0.8rem; /* mb-2 */
        }

        .vision-mission-item p {
          font-size: 1.1rem; /* text-gray-700, slightly larger */
          color: #444;
          line-height: 1.6;
        }

        /* Team Section */
        .team-section-header {
          text-align: center; /* text-center */
          margin-bottom: 3rem; /* mb-8 */
        }

        .team-section-header h3 {
          font-size: 3rem; /* text-3xl, increased */
          font-weight: 700; /* font-bold */
          color: #00bcd4; /* text-blue-700, our accent color */
          margin-bottom: 0.5rem;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
        }

        .team-section-header p {
          font-size: 1.1rem; /* text-gray-600, slightly larger */
          color: #555;
        }

        /* Scrolling Team Members */
        .scrolling-team-wrapper {
          position: relative;
          overflow: hidden; /* Hide overflow for continuous scroll */
          padding: 2rem 0; /* Vertical padding for spacing */
        }

        .scrolling-team-inner {
          display: flex; /* Keep all members in one row */
          white-space: nowrap; /* Prevent wrapping */
          animation: scrollTeam 30s linear infinite; /* Adjust duration based on number of members */
          /* Calculate total width to scroll based on number of members */
          width: calc(250px * ${teamMembers.length * 3}); /* Member width * total duplicates */
        }

        .team-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 5rem;
}

.team-member-card {
  width: 250px;
  text-align: center;
  padding: 1rem;
}

.team-member-card img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  border: 4px solid #00bcd4;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.team-member-card:hover img {
  transform: scale(1.05);
  border-color: #00a4b7;
}

.team-member-card h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 1.5rem;
  color: #222;
}

.team-member-card p {
  font-size: 0.95rem;
  color: #666;
}


        // .team-member-card {
        //   display: inline-block; /* Essential for horizontal scrolling */
        //   flex: 0 0 auto; /* Prevent stretching/shrinking */
        //   width: 250px; /* Fixed width for each card */
        //   text-align: center; /* text-center */
        //   padding: 1rem;
        //   margin: 0 1.5rem; /* Space between members */
        // }

        // .team-member-card img {
        //   width: 150px; /* w-28, increased for visual impact */
        //   height: 150px; /* h-28, increased */
        //   margin-left: auto; /* mx-auto */
        //   margin-right: auto; /* mx-auto */
        //   border-radius: 50%; /* rounded-full */
        //   object-fit: cover; /* object-cover */
        //   box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15); /* shadow-lg, slightly stronger */
        //   border: 4px solid #00bcd4; /* Accent border around image */
        //   transition: transform 0.3s ease, border-color 0.3s ease;
        // }

        // .team-member-card:hover img {
        //     transform: scale(1.05); /* Slight zoom on hover */
        //     border-color: #00a4b7; /* Darker accent on hover */
        // }

        // .team-member-card h4 {
        //   font-size: 1.3rem; /* text-lg, increased */
        //   font-weight: 600; /* font-semibold */
        //   margin-top: 1.5rem; /* mt-4 */
        //   color: #222;
        // }

        // .team-member-card p {
        //   font-size: 0.95rem; /* text-sm, slightly larger */
        //   color: #666; /* text-gray-500 */
        // }

        /* Keyframes for infinite horizontal scroll */
        @keyframes scrollTeam {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(calc(-250px * ${teamMembers.length * 3})); /* Scroll by width of one full set of members */
          }
        }

        /* Optional: Pause animation on hover */
        .scrolling-team-wrapper:hover .scrolling-team-inner {
          animation-play-state: paused;
        }

        /* Responsive Adjustments for very small screens */
        @media (max-width: 500px) {
            .motto-title {
                font-size: 2.5rem;
            }
            .motto-description {
                font-size: 1.1rem;
            }
            .vision-mission-item {
                padding: 1.5rem;
            }
            .vision-mission-item h3 {
                font-size: 1.7rem;
            }
            .team-section-header h3 {
                font-size: 2.2rem;
            }
            .team-member-card {
                width: 200px; /* Smaller card width */
                margin: 0 1rem;
            }
            .team-member-card img {
                width: 120px;
                height: 120px;
            }
            @keyframes scrollTeam {
                100% {
                    transform: translateX(calc(-200px * ${teamMembers.length}));
                }
            }
        }

      `}</style>

      {/* Motto Section */}
      <div className="motto-section">
        <h2 className="motto-title">Creating Spaces that Inspire</h2>
        <p className="motto-description">
          We believe in building not just structures but experiences that bring comfort, elegance, and functionality together.
        </p>
      </div>

      {/* Vision & Mission Section */}
      <div className="vision-mission-grid">
        <div className="vision-mission-item">
          <h3>Our Vision</h3>
          <p>
            To be a trusted leader in modern living solutions, delivering excellence and innovation in every project we undertake.
          </p>
        </div>
        <div className="vision-mission-item">
          <h3>Our Mission</h3>
          <p>
            We are committed to designing and building sustainable, high-quality environments that meet the evolving needs of our clients.
          </p>
        </div>
      </div>

      {/* Team Section */}
<div className="team-section-header">
  <h3>Meet Our Team</h3>
  <p>The people behind our passion and success.</p>
</div>

<div className="team-grid">
  {teamMembers.map((member, idx) => (
    <div key={idx} className="team-member-card">
      <img src={member.image} alt={member.name} />
      <h4>{member.name}</h4>
      <p>{member.role}</p>
    </div>
  ))}
</div>
    </section>
  );
}