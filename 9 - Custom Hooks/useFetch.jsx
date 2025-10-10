import { useState, useEffect } from "react";
import axios from "axios";

/*
In React, spesso si ha la necessità di effettuare chiamate API asincrone per ottenere dati da server esterni.
Ripetere la stessa logica di fetch in più componenti crea codice ridondante e difficile da mantenere.
Per questo si utilizzano i Custom Hooks, funzioni che incapsulano logica riutilizzabile di stato, effetti e funzioni.

Questo custom hook `useFetch` è un esempio classico che permette di:
- Effettuare una chiamata HTTP GET all’URL specificato
- Tenere traccia dei dati ricevuti tramite uno state dedicato
- Gestire uno stato di caricamento isLoading per mostrare placeholder o spinner
- Rifetch automaticamente se cambia l’URL passato come dipendenza

In questo modo, la logica complessa di fetch è isolata e il componente che usa l’hook rimane semplice e pulito.
*/

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Funzione asincrona auto-invocata che effettua fetch dati
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(url);
        setData(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    })();
  }, [url]);

  return { data, isLoading };
};

export default useFetch;

/*
NOTE IMPORTANTI
- Separare la logica fetch in un custom hook migliora la leggibilità e riusabilità del codice in più componenti.
- Il valore url è la dipendenza di useEffect: quando cambia, l’effetto si rilancia automaticamente.
- È consigliabile estendere la gestione degli errori con uno stato dedicato, non solo console.log.
- Lo stato isLoading è utile per mostrare indicatori visivi di caricamento all’utente durante la fetch.
- axios semplifica la sintassi e la gestione delle promesse rispetto alla fetch nativa.
- Questo hook funziona con qualsiasi API che restituisca dati JSON.
- Personalizzazioni comuni includono supporto per metodi oltre GET, retry, cancellazione richieste (abort controller).
*/
