import { useRef } from "react";

/*
useRef trova applicazioni particolarmente utili quando si vogliono gestire effetti o interazioni sul DOM
che non devono provocare re-render, come ad esempio il focus automatico sugli input dopo il mount, il salvataggio di timer,
o la registrazione di informazioni persistenti tra render.
Questo esempio mostra la gestione del focus su un campo input: l’input riceve il focus immediatamente
quando si clicca il bottone "Focus", senza causare re-render.
*/

const RefExample = () => {
  // Crea una ref per l’input
  const inputRef = useRef(null);

  // Handler per portare il focus sull’input
  const focusInput = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  // Handler per resettare il campo input senza re-render
  const clearInput = () => {
    if (inputRef.current) inputRef.current.value = "";
  };

  // Mostra esempio di useRef associata a input per gestione focus e reset
  return (
    <div>
      <h2>useRef: gestione Focus e Reset</h2>
      <input
        type="text"
        ref={inputRef}
        placeholder="Scrivi qualcosa e fai click su Focus"
      />
      <div>
        <button onClick={focusInput}>Focus</button>
        <button onClick={clearInput}>Reset</button>
      </div>
    </div>
  );
};

export default RefExample;

/*
- useRef è ideale per manipolazioni dirette e imperativi sul DOM (focus, selezione, scroll, misura, reset).
- Non scatena re-render, quindi perfetto per performance e gestioni che non devono influire sul virtual DOM React.
- L’attributo ref collega direttamente l’elemento input alla variabile inputRef.
- È una soluzione pulita per gestire focus automatico nei form, gestione input non controllati e altre interazioni avanzate.
- Si usa spesso nella gestione di animazioni, integrazioni con librerie esterne, oppure salvataggi di timer in useEffect.
*/
