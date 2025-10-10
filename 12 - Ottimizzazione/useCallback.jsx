import { useState, useCallback } from "react";

/*
useCallback è un hook di React che serve a **memoizzare (memorizzare)** una funzione, ossia mantenere la stessa istanza della funzione tra i render,
purché le dipendenze specificate non cambino.
Questo è utile per ottimizzare le prestazioni, in particolare quando si passano callback a componenti figli memoizzati (React.memo)
o si usano funzioni come dipendenze di useEffect o altri hook per evitare esecuzioni e render non necessari.

L'idea è che in JavaScript ogni volta che si definisce una funzione dentro un componente,
viene creata una nuova funzione con un nuovo riferimento.
useCallback evita questa creazione ridondante, mantenendo la funzione stabile finché le dipendenze non cambiano.
*/

// Componente figlio che riceve una funzione come prop e memorizza il rendering tramite React.memo
const Button = memo(({ onClick, text }) => {
  console.log(`${text} button rendered`);
  return <button onClick={onClick}>{text}</button>;
});

const Parent = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // useCallback memorizza la funzione, ricreandola solo se la dipendenza count1 cambia
  const incrementCount1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  // useCallback memorizza la funzione, ricreandola solo se la dipendenza count2 cambia
  const incrementCount2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  console.log("Parent rendered");

  return (
    <div>
      <h2>Count1: {count1}</h2>
      <h2>Count2: {count2}</h2>
      {/* Solo il bottone relativo sarà re-renderizzato se cambia il suo handler */}
      <Button onClick={incrementCount1} text="Increment Count 1" />
      <Button onClick={incrementCount2} text="Increment Count 2" />
    </div>
  );
};

export default Parent;

/*
NOTE IMPORTANTI
- useCallback ritorna una versione memoizzata della funzione passata, aggiornata solo se cambia una o più dipendenze.
- È essenziale per evitare re-render inutili dei componenti figli quando si passano funzioni come props, specialmente con React.memo.
- Se la funzione non viene memoizzata, ogni render del componente genitore crea una nuova funzione,
  causando potenzialmente re-render non necessari dei figli.
- useCallback è strettamente correlato a useMemo, ma memoizza funzioni e non valori.
- Usare useCallback in modo indiscriminato può aggiungere complessità senza benefici: usare solo quando si hanno problemi di performance.
- Utile anche per mantenere la stessa funzione come dipendenza in altri hook come useEffect.
*/
