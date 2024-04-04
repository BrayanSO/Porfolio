import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Importa un estilo de tu elección
import '../Styles/Joke.css'


const codeSnippet = `
import  { useState } from "react";

/* <span> let's create something: 
 Something cool and unique </span> */

const [sender, setSender] = "🚀";
const [recipient, setRecipient] = "📧";
const [subject, setSubject] = "✨";
const [message, setMessage] = 
\`Hello, intrepid traveler! 👋

Across the cosmos, a message for you:

" "

Wishing you stardust dreams,\`;

`;

const JokeComponent = () => {
  return (
    <div className="code-block">
      <SyntaxHighlighter language="jsx" style={tomorrow}>
        {codeSnippet}
      </SyntaxHighlighter>
    </div>
  );
};

export default JokeComponent;
