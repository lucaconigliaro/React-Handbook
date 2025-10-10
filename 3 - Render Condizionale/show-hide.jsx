import { useState, useEffect } from "react";

/*
Questo componente dimostra come nascondere o mostrare un elemento dinamico usando lo useState per il toggle dello stato "show".
L’elemento mostrato è un componente "Elemento" che contiene un contatore che si incrementa ogni secondo, creando un effetto timer.
useEffect con useState gestisce il timer del contatore, mentre la funzione di clean up annulla il timer quando il componente viene nascosto o smontato, evitando memory leak o aggiornamenti di stato inutili.
*/

const HideorShowComponent = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {/* Toggle dinamico del testo bottone */}
        {show ? "nascondi" : "mostra"}
      </button>

      {/* Mostra Elemento solo se show è true */}
      <h1>{show && <Elemento />}</h1>
    </div>
  );
};

// COMPONENTE FIGLIO che incrementa un contatore ogni secondo

const Elemento = () => {
  const [contatore, setContatore] = useState(0);

  /**
   * useEffect con timer che incrementa il contatore ogni 1000ms
   * la clean up function libera il timer al cambiamento o smontaggio
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setContatore((oldValue) => oldValue + 1);
    }, 1000);

    // Pulizia del timer precedente per evitare chiamate multiple o memory leak
    return () => clearTimeout(timer);
  }, [contatore]); // dipende dal valore contatore per aggiornare

  return (
    <div>
      <h4>{contatore}</h4>
    </div>
  );
};

export default HideorShowComponent;

/*
NOTE IMPORTANTI
- Il toggle show permette di nascondere o mostrare dinamicamente un componente React.
- useEffect con clean up function è essenziale per evitare timer attivi quando il componente viene nascosto o smontato.
- Il timer viene cancellato ad ogni re-render dell’elemento, evitando aumenti cumulativi o loop non voluti.
- Il pattern show && <Elemento /> è uno short circuit tipico per il conditional rendering in React.
- Usare useState e useEffect in combinazione permette di gestire stati dinamici legati al tempo o ad eventi asincroni.
*/