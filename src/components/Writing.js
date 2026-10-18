import React from 'react';
import '../Styles/Writing.css';

// Writing samples. The full pieces live in /writing (rendered by GitHub).
const BASE = 'https://github.com/BrayanSO/Porfolio/blob/main/writing/';

const samples = [
  {
    file: '05-explainer-evals-are-backtests.md',
    featured: true,
    type: { en: 'Technical article · AI evals', es: 'Artículo técnico · evaluación de IA' },
    title: {
      en: 'Your Eval Is a Backtest: Three Ways It Lies to You',
      es: 'Tu eval es un backtest: tres formas en que te miente',
    },
    audience: { en: 'AI engineers and researchers building evals and RL environments', es: 'Ingenieros e investigadores de IA que construyen evals y entornos de RL' },
    problem: {
      en: 'Correlated attempts, a shrinking denominator and slice-only bugs: how each one inflates an agent score.',
      es: 'Intentos correlacionados, un denominador que se encoge y errores que solo afectan una parte: cómo cada uno infla el puntaje de un agente.',
    },
    role: {
      en: 'Mapped three real bugs from my validation lab to their eval equivalents, and wrote a checklist plus a tested Python sanity check.',
      es: 'Relacioné tres errores reales de mi laboratorio con su equivalente en evals y escribí una lista de verificación y un chequeo en Python probado.',
    },
  },
  {
    file: '01-case-study-trading-strategies.md',
    type: { en: 'Case study', es: 'Caso de estudio' },
    title: {
      en: 'I Tested 30+ Trading Strategies Against Real Market Data. None Had an Edge.',
      es: 'Probé más de 30 estrategias de trading con datos reales. Ninguna tuvo ventaja.',
    },
    audience: { en: 'Developers, founders, retail traders', es: 'Desarrolladores, fundadores, traders' },
    problem: {
      en: 'How to test "90% win rate" claims honestly: real costs, no look-ahead, enough data.',
      es: 'Cómo probar con honestidad promesas de "90 % de acierto": costos reales, sin mirar al futuro, datos suficientes.',
    },
    role: {
      en: 'Designed the method, fixed rules before results, directed an AI coding agent and verified every number — catching 3 bugs that faked profits.',
      es: 'Diseñé el método, fijé las reglas antes de ver resultados, dirigí un agente de IA y verifiqué cada número, encontrando 3 errores que fingían ganancias.',
    },
  },
  {
    file: '02-explainer-win-rate.md',
    type: { en: 'Product explainer', es: 'Artículo explicativo' },
    title: {
      en: 'Why a Strategy That Wins 90% of the Time Can Still Lose Money',
      es: 'Por qué una estrategia que gana el 90 % de las veces puede perder dinero',
    },
    audience: { en: 'Beginners and tool builders', es: 'Principiantes y creadores de herramientas' },
    problem: {
      en: 'Win rate vs. reward-to-risk and costs, explained with one formula and one table.',
      es: 'Acierto frente a riesgo/beneficio y costos, explicado con una fórmula y una tabla.',
    },
    role: {
      en: 'Tested 4 high-win-rate strategies on 4 years of data and turned the results into a one-minute checklist.',
      es: 'Probé 4 estrategias de alto acierto con 4 años de datos y convertí los resultados en una guía de un minuto.',
    },
  },
  {
    file: '03-guide-tick-backtest.md',
    type: { en: 'How-to guide', es: 'Guía paso a paso' },
    title: {
      en: 'How to Build a Realistic Tick-Level Backtest in Python with MetaTrader 5',
      es: 'Cómo construir un backtest realista sobre ticks con Python y MetaTrader 5',
    },
    audience: { en: 'Python developers', es: 'Desarrolladores de Python' },
    problem: {
      en: 'Charging the real spread, avoiding the MT5 time-zone trap, and proving the engine is unbiased.',
      es: 'Cobrar el spread real, evitar la trampa de zonas horarias de MT5 y demostrar que el motor no tiene sesgo.',
    },
    role: {
      en: 'Distilled my production engine into ~80 lines of runnable code with a validation test.',
      es: 'Resumí mi motor real en ~80 líneas de código ejecutable con una prueba de validación.',
    },
  },
  {
    file: '04-social-posts.md',
    type: { en: 'LinkedIn & X posts', es: 'Posts de LinkedIn y X' },
    title: {
      en: 'Three Short Posts: the Finding, the Bug, and the 90% Myth',
      es: 'Tres posts cortos: el hallazgo, el error y el mito del 90 %',
    },
    audience: { en: 'Tech and data community', es: 'Comunidad de tecnología y datos' },
    problem: {
      en: 'Turning weeks of statistics into something readable in 10 seconds, without overselling.',
      es: 'Convertir semanas de estadística en algo que se lee en 10 segundos, sin exagerar.',
    },
    role: {
      en: 'Led each post with one surprising, verifiable number traced to the case study.',
      es: 'Abrí cada post con un dato sorprendente y verificable, tomado del caso de estudio.',
    },
  },
];

const Writing = ({ language }) => {
  const l = language === 'es' ? 'es' : 'en';
  const labels = {
    audience: l === 'en' ? 'Audience' : 'Público',
    problem: l === 'en' ? 'Topic' : 'Tema',
    role: l === 'en' ? 'My role & process' : 'Mi rol y proceso',
    read: l === 'en' ? 'Read the full piece →' : 'Leer la pieza completa →',
  };
  return (
    <div className="writing">
      <p className="writing-intro">
        {l === 'en'
          ? 'Technical writing and product storytelling about evaluation: how to tell a real result from a measurement bug. Based on a validation lab I designed and documented, which tested 30+ trading strategies against real market data.'
          : 'Redacción técnica y storytelling de producto sobre evaluación: cómo distinguir un resultado real de un error de medición. Basados en un laboratorio de validación que diseñé y documenté, que probó más de 30 estrategias de trading con datos reales.'}
      </p>
      <div className="writing-grid">
        {samples.map((s) => (
          <article className={'writing-card' + (s.featured ? ' writing-card-featured' : '')} key={s.file}>
            <span className="writing-type">{s.type[l]}</span>
            <h3>{s.title[l]}</h3>
            <p><strong>{labels.audience}:</strong> {s.audience[l]}</p>
            <p><strong>{labels.problem}:</strong> {s.problem[l]}</p>
            <p><strong>{labels.role}:</strong> {s.role[l]}</p>
            <a href={BASE + s.file} target="_blank" rel="noopener noreferrer" className="writing-link">
              {labels.read}
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Writing;
