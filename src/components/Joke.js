import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../Styles/Joke.css';

const codeSnippets = {
  en: `
import { useState } from "react";

/* <span> let's create something: 
 Something cool and unique </span> */

const [sender, setSender] = "🚀";
const [recipient, setRecipient] = "📧";
const [message, setMessage] = 

\`Hello, Future Friend! 👋

I'm excited to explore opportunities with your company.


" "

Looking forward to discussing further. Best regards,\`;
`,
  es: `
import { useState } from "react";

/* <span> creemos algo:
 Algo genial y único </span> */

const [sender, setSender] = "🚀";
const [recipient, setRecipient] = "📧";
const [message, setMessage] = 

\`¡Hola, Futuro Amigo! 👋

Estoy emocionado de explorar oportunidades con su empresa.

" "

Esperamos seguir discutiendo. Atentamente,\`;
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
