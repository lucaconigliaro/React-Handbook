import  { useEffect, useState } from "react";
/*
useEffect è un Hook fondamentale di React che consente di gestire effetti collaterali nei componenti funzionali,
come modificare manualmente il DOM, effettuare chiamate API, impostare timer o integrare codice esterno.
Viene eseguito dopo ogni re-render a meno che non venga specificato diversamente tramite il secondo parametro (array delle dipendenze).
La funzione di clean up (restituita da useEffect) viene chiamata prima di ogni nuovo effetto o quando il componente viene smontato, permettendo di liberare risorse.

Questo esempio aggiorna il titolo della pagina in base al valore del contatore e logga nella console l’attivazione e la clean up function.

*/

const useEffectBasi = () => {
  const [value, setValue] = useState(0);

  const aumenta = () => {
    setValue((oldValue) => oldValue + 1);
  };

  /**
   * useEffect aggiorna il titolo della pagina in base al valore
   * Eseguito ad ogni cambiamento di "value"
   */
  useEffect(() => {
    console.log("Eccomi, sono useEffect");
    if (value < 1) {
      document.title = `Nessun Messaggio`;
    } else {
      document.title = `Nuovo Messaggi: ${value}`;
    }
    // Clean up function: viene eseguita prima della prossima chiamata dell'effetto o quando il componente si smonta
    return () => console.log("clean up function chiamata");
  }, [value]); // l'effetto dipende da value

  return (
    <div className="item shadow">
      <h4>
        Value: <span>{value}</span>
      </h4>
      <button className="button" onClick={aumenta}>
        Aumenta
      </button>
    </div>
  );
};

export default useEffectBasi;

/*
NOTE IMPORTANTI
- useEffect si attiva DOPO il render: il DOM viene visualizzato e poi l’effetto viene eseguito.
- Il secondo parametro (array delle dipendenze) controlla quando l’effetto viene attivato: qui solo se "value" cambia.
- La funzione di clean up serve per “pulire” risorse create (setInterval, listeners, ecc.) ed è opzionale.
- Cambiare document.title è un effetto collaterale classico per mostrare dati dinamici all’esterno del componente.
- È buona pratica mettere sempre le dipendenze corrette nell’array per evitare chiamate non necessarie o bug.
- Per ogni nuovo value, l’effetto aggiorna il titolo e logga in console; prima di ogni chiamata, la clean up function viene invocata.
*/
