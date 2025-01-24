import React, { useState } from "react";
import data from "../data/experience.json"; // Ensure you're importing from the correct path
import "../styles/experience.scss";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleTileClick = (index) => {
    // Toggle the expansion of the clicked tile
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2>Work Experience</h2>
        <div className="experience-list">
          {data.experiences.map((experience, index) => (
            <div
              key={index}
              className={`experience-item ${expandedIndex === index ? "expanded" : ""}`}
              onClick={() => handleTileClick(index)}
            >
              <div className="experience-header">
                <span>{experience.title} - {experience.company}</span>
                <span>{experience.dates}</span>
              </div>
              <div className={`experience-details ${expandedIndex === index ? "expanded" : ""}`}>
                <p><strong>Project:</strong> {experience.project}</p>
                <p>{experience.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
