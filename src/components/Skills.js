import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { 
  faHtml5, 
  faCss3Alt, 
  faJs, 
  faReact, 
  faPython, 
  faNode, 
  faGit, 
  faBootstrap, 
  faWordpress,

} from '@fortawesome/free-brands-svg-icons';
import '../Styles/Skills.css';

const skillsData = [
  { icon: faHtml5, label: "HTML5", color: "#E44D26" },
  { icon: faCss3Alt, label: "CSS3", color: "#264DE4" },
  { icon: faJs, label: "JavaScript", color: "#F7DF1E" },
  { icon: faReact, label: "React", color: "#61DAFB" },
  { icon: faPython, label: "Python", color: "#3776AB" },
  { icon: faNode, label: "Node.js", color: "#68A063" },
  { icon: faGit, label: "Git", color: "#F05032" },
  { icon: faBootstrap, label: "Bootstrap", color: "#563D7C" },
  { icon: faDatabase, label: "SQL", color: "#336791" }, // Icono para SQL
  { icon: faWordpress, label: "WordPress", color: "#21759B" },

  
];

const Skills = () => {
  return (
    <div className="portfolio"> 
     <h2 className='title2'>WebDevelopment</h2>
      {skillsData.map((skill, index) => (
        <Skill key={index} icon={skill.icon} label={skill.label} color={skill.color} />
      ))}
      
    </div>
  );
};

const Skill = ({ icon, label, color }) => {
  return (
    <div className="skill" style={{ color }}>
      <FontAwesomeIcon icon={icon} size="5x" />
      <span>{label}</span>
    </div>
  );
};

export default Skills;
