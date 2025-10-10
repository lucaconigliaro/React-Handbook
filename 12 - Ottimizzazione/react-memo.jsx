import React, { useState, memo, useCallback } from "react";

/*
React.memo è un componente di ordine superiore (HOC) fornito da React che permette di ottimizzare il rendering dei componenti funzionali.
Quando un componente viene avvolto in React.memo, React memorizza (memoizza) il risultato del rendering precedente e
ritorna quel risultato senza rieseguire il rendering se le props non sono cambiate ("shallow compare").
Questo è particolarmente utile per componenti presentazionali o quando il rendering è costoso e le props cambiano raramente.

React.memo confronta le props in modo superficiale (shallow comparison), ovvero confronta i riferimenti:
se le props sono primitive (stringhe, numeri) compara i valori,
se sono oggetti o array, compara i riferimenti in memoria, quindi crea un potenziale problema se si passano sempre nuovi oggetti.
 */

// Componente figlio non memoizzato
const Child = ({ message }) => {
  console.log("Child rendered");
  return <p>{message}</p>;
};

// Componente figlio memoizzato per evitare render inutili se le props sono uguali
const MemoChild = memo(({ message }) => {
  console.log("MemoChild rendered");
  return <p>{message}</p>;
});

const Parent = () => {
  const [count, setCount] = useState(0);

  // Valore stringa costante per props passate al child
  const message = "Hello from child!";

  // Funzione definita con useCallback per mantenere riferimento stabile
  const stableCallback = useCallback(() => {
    console.log("Callback from parent");
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      {/* Incremento stato count */}
      <button onClick={() => setCount(count + 1)}>Increment</button>

      {/* Child normale, rende ogni volta che parent cambia */}
      <Child message={message} />

      {/* Child memoizzato non rende se props uguali */}
      <MemoChild message={message} callback={stableCallback} />
    </div>
  );
};

export default Parent;

/*
NOTE IMPORTANTI
- React.memo previene re-render inutili confrontando le props in modo superficiale.
- È efficace per ottimizzare componenti puri che ricevono props immutabili o primitive.
- Se si passano oggetti, array o funzioni dinamiche come props,
  è bene usare useMemo o useCallback per mantenere riferimenti stabili e sfruttare memo.
- React.memo non previene re-render se le props cambiano (anche se solo il riferimento).
- L’ottimizzazione dovrebbe essere applicata solo quando si rilevano problemi di performance.
- Memoizzazione aggiunge leggera complessità quindi è bene profilare l’app prima di usare React.memo.
- React.memo si usa solo per componenti funzionali; per componenti classe si usa shouldComponentUpdate.
*/
