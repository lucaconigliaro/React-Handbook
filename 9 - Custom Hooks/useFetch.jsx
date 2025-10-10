import { useState, useEffect } from "react";
import axios from "axios";

/*
Questo custom hook useFetch è un modello riutilizzabile per effettuare chiamate API asincrone in React.
Usando axios per il fetch, mantiene internamente lo stato dei dati ricevuti e uno stato di caricamento.
L’hook espone questi stati al componente chiamante per agevolare il rendering condizionale e la visualizzazione dei dati.
L’effetto dipende dall’url passato, per rifetch automatico se cambia.
*/

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Funzione asincrona immediatamente invocata per fetch dati
    (async () => {
      setIsLoading(true); // inizio caricamento
      try {
        const { data } = await axios.get(url); // chiamata API
        setData(data); // aggiorno stato con dati ricevuti
      } catch (error) {
        console.log(error); // gestione semplice di errori con console log (estendibile)
      }
      setIsLoading(false); // fine caricamento
    })();
  }, [url]); // Rilancia fetch se url cambia

  return { data, isLoading };
};

export default useFetch;

/*
NOTE IMPORTANTI
- Separare la logica fetch in custom hook migliora riusabilità e leggibilità.
- L’effetto di fetch viene richiamato ogni volta che cambia l’url (dipendenza).
- In casi reali si consiglia di gestire anche errori in uno stato separato e la cancellazione/ripulitura delle fetch.
- Lo stato isLoading consente UI che mostrano loading spinner o placeholder.
- Axios semplifica la sintassi e la gestione delle promesse rispetto a fetch nativo.
- Questo hook può essere usato con qualsiasi endpoint API che restituisce JSON.
*/