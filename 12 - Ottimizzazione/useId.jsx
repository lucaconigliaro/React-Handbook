import React, { useId } from "react";

/*
useId è un hook React introdotto in React 18 per generare ID unici e stabili all’interno dei componenti.
Gli ID unici sono fondamentali per l’accessibilità (es. associare label a input tramite htmlFor e id),
nonché per componenti dinamici o generati multipli, dove bisogna evitare conflitti di ID nel DOM.

Il vantaggio principale di useId è che gli ID generati sono coerenti tra il rendering lato server (SSR) e quello client,
prevenendo problemi di mismatch nella fase di hydration.
*/

function FormComponent() {
  // useId assegna un ID univoco per questa istanza del componente
  const inputId = useId();

  return (
    <form>
      {/* Label associata all’input tramite htmlFor e id */}
      <label htmlFor={inputId}>Nome:</label>
      <input id={inputId} type="text" placeholder="Inserisci nome" />
    </form>
  );
}

// Caso con più ID unici nello stesso componente
function MultiInputForm() {
  const nameId = useId();
  const emailId = useId();

  return (
    <form>
      <div>
        <label htmlFor={nameId}>Nome:</label>
        <input id={nameId} type="text" placeholder="Inserisci nome" />
      </div>
      <div>
        <label htmlFor={emailId}>Email:</label>
        <input id={emailId} type="email" placeholder="Inserisci email" />
      </div>
    </form>
  );
}

export default FormComponent;

/*
NOTE IMPORTANTI
- useId genera stringhe ID uniche, evitando collisioni di ID in DOM complessi e dinamici.
- Utile per accessibilità, associando label, aria-describedby e altri attributi ARIA.
- Assicura coerenza tra client e server-side rendering, fondamentale in applicazioni SSR.
- Va usato solo al livello superiore del componente o custom hook, non dentro cicli o condizioni.
- Non usare useId per generare chiavi in map, che devono derivare dai dati.
- È un miglioramento rispetto a metodi manuali di generazione ID (es. Math.random()).
*/
