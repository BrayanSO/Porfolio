import React from 'react';
import '../Styles/Skills.css';

// Lo que se usa en los proyectos del portfolio (Autos360, Citas, NewCode CR, Forex ML); íconos de simpleicons como en Skills2
const skillsData = [
  { slug: "html5", hex: "E34F26", label: "HTML5" },
  { slug: "css", hex: "1572B6", label: "CSS" },
  { slug: "javascript", hex: "F7DF1E", label: "JavaScript" },
  { slug: "react", hex: "61DAFB", label: "React" },
  { slug: "svelte", hex: "FF3E00", label: "Svelte" },
  { slug: "threedotjs", hex: "FFFFFF", label: "three.js" },
  { slug: "nodedotjs", hex: "5FA04E", label: "Node.js" },
  { slug: "python", hex: "3776AB", label: "Python" },
  { slug: "postgresql", hex: "4169E1", label: "PostgreSQL" },
  { slug: "supabase", hex: "3FCF8E", label: "Supabase" },
  { slug: "cloudflare", hex: "F38020", label: "Cloudflare" },
  { slug: "git", hex: "F05032", label: "Git" },
  { slug: "anthropic", hex: "FFFFFF", label: "Claude Code" },
];

const Skills = () => {
  return (
    <div className="portfolio">
     <h2 className='title2'>Web Development</h2>
      {skillsData.map((skill) => (
        <Skill key={skill.label} {...skill} />
      ))}

    </div>
  );
};

const Skill = ({ slug, hex, label }) => {
  return (
    <div className="skill" style={{ color: `#${hex}`, borderColor: `#${hex}` }}>
      <img src={`https://cdn.simpleicons.org/${slug}/${hex}`} alt={label} width={80} height={80} />
      <span>{label}</span>
    </div>
  );
};

export default Skills;
