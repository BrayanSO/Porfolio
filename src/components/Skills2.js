import React from 'react';
import '../Styles/Skills2.css';

const skillsData = [
  { 
    icon: "https://cdn.simpleicons.org/cypress/17202C", 
    label: "Cypress",
    color: "#FFFFFF"
  },
  { 
    icon: "https://cdn.simpleicons.org/postman/FF6C37", 
    label: "Postman", 
    color: "#FF6C37" 
  },
];

const Skills2 = () => {
  return (
    <div className="portfolio2"> 
      <h2 className='title2'>QA & Testing</h2>
      {skillsData.map((skill, index) => (
        <Skill key={index} icon={skill.icon} label={skill.label} color={skill.color} />
      ))}
    </div>
  );
};

const Skill = ({ icon, label, color }) => {
  return (
    <div className="skill" style={{ color }}>
      <img src={icon} alt={label} width={80} height={80} />
      <span>{label}</span>
    </div>
  );
};

export default Skills2;