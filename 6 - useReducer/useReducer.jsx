import { useReducer } from "react";

/*
useReducer è un hook React pensato per gestire state complessi o logiche di aggiornamento articolate, in alternativa a useState.
Si utilizza quando lo stato dell’applicazione è composto da oggetti strutturati e diverse azioni devono modificarlo in modo prevedibile e centralizzato.
Il reducer è una funzione pura che riceve lo state attuale e un oggetto action, e restituisce il nuovo stato sulla base del tipo di azione eseguita.
Il pattern è simile a quello di Redux, ma integrato direttamente nel componente tramite la funzione dispatch.[web:789][web:793]

Esempio: gestione di un contatore con azioni incrementa, decrementa e reset.
*/

// Stato iniziale come oggetto
const initialState = { count: 0 };

// Funzione reducer: riceve stato attuale e action, restituisce nuovo stato
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

// Componente React che usa useReducer
const ReducerCounter = () => {
  // useReducer ritorna lo stato corrente e una funzione dispatch per invocare azioni di update
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>useReducer: Counter</h2>
      <h3>{state.count}</h3>
      <div>
        <button onClick={() => dispatch({ type: "increment" })}>+1</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
};

export default ReducerCounter;

/*
NOTE IMPORTANTI
- useReducer è preferibile quando lo stato è un oggetto complesso o richiede tante azioni distinte.[web:789][web:793]
- Il reducer centralizza tutta la logica di update rendendo il codice più leggibile e gestibile.
- dispatch è l’unico modo per aggiornare lo stato, tramite oggetti action con proprietà type.
- Ogni action type corrisponde a una specifica modifica dello stato dichiarata nel reducer.
- Sempre restituire nuovi oggetti/array: mai mutare direttamente lo stato in reducer.
- Il pattern è funzionale e scalabile per form complessi, carrelli, gestione di array/oggetti multipli.
*/
