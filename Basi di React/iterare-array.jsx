// In React, spesso dobbiamo mostrare liste dinamiche di dati nell'interfaccia.
// Non si usa mai un ciclo for tradizionale dentro JSX, perché JSX è una sintassi dichiarativa.
// Per iterare sugli array si usa il metodo map(), che trasforma ogni elemento in un elemento JSX.

// Esempio

const prodotti = [
  { id: 1, nome: "Cuffie", prezzo: 59.99 },
  { id: 2, nome: "Mouse", prezzo: 25.99 },
  { id: 3, nome: "Tastiera", prezzo: 45.99 },
];

// Componente che visualizza la lista prodotti
export function ListaProdotti() {
  return (
    <ul>
      {prodotti.map(prodotto => (
        <li key={prodotto.id}>
          {prodotto.nome} - €{prodotto.prezzo}
        </li>
      ))}
    </ul>
  );
}

// Come si usa in un'app React:
// import { ListaProdotti } from './ListaProdotti';

// function App() {
//   return (
//     <div>
//       <h1>Lista Prodotti</h1>
//       <ListaProdotti />
//     </div>
//   );
// }

// export default App;

// NOTE IMPORTANTI:
// - Ogni elemento restituito da map deve avere una key unica per ottimizzare il rendering.
// - L'uso di map è il metodo idiomatico React per creare liste dinamiche di elementi JSX.
// - Non si consiglia usare for o foreach direttamente dentro JSX.
// - Se non si dispone di ID unico, si può usare come ultima risorsa l'indice, ma è meglio evitarlo.
