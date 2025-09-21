import { useEffect, useState } from "react";

/*
useEffect è un Hook di React progettato per gestire effetti collaterali (side effects) nei componenti funzionali.
Gli effetti includono operazioni esterne come aggiornare il DOM manualmente, fetch di dati da API, impostare timer, ascolto di eventi globali, ecc.
useEffect viene eseguito dopo ogni render del componente, permettendo di sincronizzare il componente con il mondo esterno, ad esempio aggiornando in modo sicuro il titolo della pagina.

Nell'esempio sottostante, l’effetto aggiorna `document.title` ogni volta che cambia il valore dello stato `value`.
*/

const useEffectBasi = () => {
  const [value, setValue] = useState(0);

  const aumenta = () => {
    setValue((oldValue) => oldValue + 1);
  };

  // useEffect senza array di dipendenze si esegue dopo ogni render
  useEffect(() => {
    console.log("Use Effect Chiamata");
    document.title = `Nuovo Messaggio: ${value}`; // Aggiorna il titolo della pagina
  });

  return (
    <div className="item">
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
- useEffect si attiva dopo ogni render del componente se non passa un array di dipendenze.
- Per limitare l’esecuzione solo a quando cambiano specifiche variabili di stato o props,
  si passa come secondo parametro un array delle dipendenze: es. [value].
- L’aggiornamento di document.title è un tipico esempio di side effect che non coinvolge il DOM gestito da React ma il document esterno.
- Se l’effetto crea risorse o subscription, è possibile restituire una funzione di cleanup che verrà eseguita prima del prossimo effetto (o al dismount del componente).
- L’uso corretto di useEffect aiuta ad evitare effetti collaterali indesiderati o loop infiniti.
- Ricordare che il valore nello stato è sempre quello dell’ultimo render, l’effetto legge il valore aggiornato correttamente.
*/
