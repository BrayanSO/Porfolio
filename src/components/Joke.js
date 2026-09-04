import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../Styles/Joke.css';

const codeSnippets = {
  en: `
import { useState } from "react";

// console.log("If something looks weird here, I already reported it myself");

const [testStatus, setTestStatus] = useState("PASSED ✅");
const [bugsFound, setBugsFound] = useState(0);
const [buildStatus, setBuildStatus] = useState("200 OK");
const [darkMode, setDarkMode] = useState(true);
const [confidence, setConfidence] = useState("HIGH 🚀");

I'm excited to explore opportunities with your company.

// I use dark mode because light attracts bugs 🐛

QA Report:
────────────────────────
Test status: PASSED ✅
Bugs found: 0 🐛
Regression: PASSED 🟢
Severity: NONE
Environment: PRODUCTION 🚀
Confidence: 99.9%

// If something breaks after this...
// it's probably a feature, not a bug.

`,
  es: `
import { useState } from "react";

// console.log("Si algo se ve raro aquí, ya lo reporté yo mismo");

const [testStatus, setTestStatus] = useState("PASSED ✅");
const [bugsFound, setBugsFound] = useState(0);
const [buildStatus, setBuildStatus] = useState("200 OK");
const [darkMode, setDarkMode] = useState(true);
const [confidence, setConfidence] = useState("HIGH 🚀");

Estoy emocionado de explorar oportunidades con su empresa.

// Uso modo oscuro porque la luz atrae bugs 🐛
QA Report:
────────────────────────
Test status: PASSED ✅
Bugs found: 0 🐛
Regression: PASSED 🟢
Severity: NONE
Environment: PRODUCTION 🚀
Confidence: 99.9%

// Si algo falla después de esto...
// probablemente sea un feature, no un bug.

`,
};

const JokeComponent = ({ language }) => {
  const codeSnippet = codeSnippets[language] || codeSnippets['en']; // Default to English if language not found

  return (
    <div className="code-block">
      <SyntaxHighlighter language="jsx" style={tomorrow}>
        {codeSnippet}
      </SyntaxHighlighter>
    </div>
  );
};

export default JokeComponent;
