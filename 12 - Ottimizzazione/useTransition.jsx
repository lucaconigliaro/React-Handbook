import React, { useState, useTransition } from "react";

/*
`useTransition` è un hook introdotto da React per migliorare l'esperienza utente durante gli aggiornamenti di stato non urgenti.
Permette di segnare certe operazioni di aggiornamento come "transizioni" a bassa priorità,
così che React possa mantenere l'interfaccia responsiva e fluida gestendo priorità tra aggiornamenti urgenti e non.

Questo è particolarmente utile in situazioni con aggiornamenti di stato costosi o su grandi quantità di dati,
come filtri, inserimenti o caricamenti che possono rallentare l'interfaccia utente se gestiti come urgenti.

L'hook restituisce:
- `isPending`: un booleano che indica se la transizione è in corso,
- `startTransition`: una funzione che avvolge l'aggiornamento di stato da eseguire come transizione.
*/

const UseTransitionExample = () => {
  // Stato principale count
  const [count, setCount] = useState(0);
  // Hook useTransition restituisce isPending e startTransition
  const [isPending, startTransition] = useTransition();

  // Funzione che avvia una transizione per l'aggiornamento "pesante"
  const handleClick = () => {
    // L'aggiornamento count + 1 è trattato come transizione a bassa priorità
    startTransition(() => {
      setCount((c) => c + 1);
    });
  };

  return (
    <div>
      <button onClick={handleClick} disabled={isPending}>
        {isPending ? "Caricamento..." : "Incrementa"}
      </button>
      <p>Count: {count}</p>
    </div>
  );
};

export default UseTransitionExample;

/*
NOTE IMPORTANTI
- `startTransition` avvolge l'aggiornamento di stato da gestire come transizione a bassa priorità.
- Durante la transizione, `isPending` è true e si può mostrare un indicatore di caricamento.
- Aggiornamenti fuori da `startTransition` sono considerati urgenti e bloccano l'interfaccia finché non finiscono.
- `useTransition` migliora la reattività evitando blocchi >UI durante aggiornamenti pesanti o multi-step.
- Adatto per filtri, ricerche, animazioni dove la fluidità UX è critica.
- L’uso errato o eccessivo può aumentare la complessità, quindi va usato solo se serve.
*/
