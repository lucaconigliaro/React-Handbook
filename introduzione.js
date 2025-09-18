// INTRODUZIONE A REACT

// React è una libreria JavaScript open source creata da Facebook per lo sviluppo di interfacce utente (UI) interattive e componenti riutilizzabili nelle web app moderne.
// Il paradigma principale di React è la strutturazione delle interfacce in piccoli componenti indipendenti che gestiscono stato e props, aggiornando la UI in modo efficiente grazie al Virtual DOM.
// React utilizza una sintassi dichiarativa e JSX per descrivere la UI attraverso il codice JavaScript.

import React from 'react';
import ReactDOM from 'react-dom';

// Definizione di un componente come funzione
function App() {
  // Il componente ritorna JSX (un "HTML in JS", ma è JavaScript!)
  return <h1>Hello, React!</h1>;
}

// Il componente App viene “renderizzato” nel nodo con id root del DOM
ReactDOM.render(<App />, document.getElementById('root'));

// Esempio equivalente con funzione freccia
const App2 = () => <h2>Ciao da un componente arrow!</h2>;
ReactDOM.render(<App2 />, document.getElementById('root'));

// Con React 18 e oltre si usa createRoot:
// import { createRoot } from 'react-dom/client';
// const root = createRoot(document.getElementById('root'));
// root.render(<App />);

// NOTE IMPORTANTI:
/*
- React si focalizza esclusivamente sull'interfaccia (View) e si integra con altri strumenti per routing e gestione dello stato.
- JSX permette di scrivere markup HTML-like direttamente nel JS, rendendo il codice più leggibile e modulare.
- Il Virtual DOM consente aggiornamenti efficienti e reattivi del DOM reale senza riscrivere tutta la UI.
- Tutto in React è un componente: i componenti possono essere riutilizzati e composti tra loro.
- State e props sono concetti chiave: lo “state” rappresenta dati interni variabili del componente, le “props” dati esterni forniti dal padre.
- Per gestire app complesse spesso si usano librerie esterne come React Router (navigazione) e Redux (gestione stato globale).
*/
