
// I componenti sono il cuore di React: rappresentano parti riutilizzabili e isolate della UI.
// Un componente React può essere definito come una funzione JavaScript che ritorna JSX, ovvero una sintassi simile all'HTML che descrive cosa deve comparire sullo schermo.
// Questi componenti possono gestire il loro stato interno, ricevere dati da altri componenti tramite “props” e rispondere a eventi.

// React permette di costruire interfacce complesse scomponendole in tanti componenti piccoli e semplici, favorendo modularità, riuso e manutenibilità del codice.

// SNIPPET
// Componente base che mostra un messaggio di saluto
export function Saluto() {
  return <h1>Ciao dal componente Saluto!</h1>;
}

// Componente Messaggio che riceve testo come prop e lo mostra
function Messaggio({ testo }) {
  return <p>Messaggio: {testo}</p>;
}

// Componente CardUtente che innesta più volte il componente Messaggio con testi diversi
export function CardUtente() {
  return (
    <div>
      <h2>Dati Utente</h2>
      <Messaggio testo="Benvenuto!" />
      <Messaggio testo="React è potente." />
    </div>
  );
}

// In un’app basata su Vite (o configurazioni moderne)
// i componenti si importano e si usano come tag JSX in altri componenti o nell’entry point

// Esempio uso in App.js

import { Saluto, CardUtente } from './components';

function App() {
  return (
    <div>
      <Saluto />
      <CardUtente />
    </div>
  );
}

export default App;

// NOTE IMPORTANTI:
/*
- Un componente è una funzione che restituisce JSX, rappresentando UI da renderizzare.
- I componenti possono essere annidati ("innestati"), creando strutture ad albero.
- La comunicazione tra componenti avviene tramite props in sola lettura.
- La suddivisione in componenti semplifica lo sviluppo, il testing e la manutenzione.
- Moderni setup React (Vite, Create React App) gestiscono automaticamente il rendering, senza bisogno di ReactDOM.render().
*/
