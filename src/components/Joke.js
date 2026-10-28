import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../Styles/Joke.css';

const codeSnippets = {
  en: `
BUG-001: Missing QA Engineer
────────────────────────────
Severity:   High
Priority:   P1
Env:        Production (yours)
Status:     Open, needs triage

Steps to reproduce:
  1. Review this portfolio
  2. Leave without a message

Expected:   We schedule a call
Actual:     Bugs in prod 🐛

Fix:        Use the form ←
Workaround: None known

// Known issue: dark mode on,
// because light attracts bugs.
`,
  es: `
BUG-001: Falta un QA Engineer
─────────────────────────────
Severidad:  Alta
Prioridad:  P1
Entorno:    Tu producción
Estado:     Abierto, sin triage

Pasos para reproducir:
  1. Revisar este portfolio
  2. Salir sin dejar mensaje

Esperado:   Una llamada
Real:       Bugs en prod 🐛

Solución:   El formulario ←
Workaround: No se conoce

// Issue conocido: modo oscuro,
// porque la luz atrae bugs.
`,
};

const JokeComponent = ({ language }) => {
  const codeSnippet = codeSnippets[language] || codeSnippets['en']; // Default to English if language not found

  return (
    <div className="code-block">
      <SyntaxHighlighter language="text" style={tomorrow}>
        {codeSnippet}
      </SyntaxHighlighter>
    </div>
  );
};

export default JokeComponent;
