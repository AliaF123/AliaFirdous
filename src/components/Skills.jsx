import React, { useState, useEffect } from "react";
import skillsData from "../data/skills.json"; // assuming skills data is in JSON

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Fetch skills data from JSON
    const fetchSkills = async () => {
      try {
        setSkills(skillsData);  // assuming skillsData is structured properly in the JSON
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };
    fetchSkills();
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-container">
          {/* Technical Skills */}
          <div className="technical-skills">
            <h3>Technical Skills</h3>
            {skills?.technicalSkills?.map((skill, index) => (
              <div key={index} className="progress-bar-container">
                <span>{skill.name}</span>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span>{skill.level}%</span> {/* Display the percentage after the bar */}
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="soft-skills">
            <h3>Soft Skills</h3>
            <div className="tags">
              {skills?.softSkills?.map((skill, index) => (
                <div key={index} className="tag">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
