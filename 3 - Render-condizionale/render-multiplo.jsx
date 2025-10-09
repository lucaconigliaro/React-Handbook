import { useEffect, useState } from "react";
import axios from "axios";
const url = "https://api.github.com/users/QuincyLarson";

/*
Gestire fetch e rendering condizionale in React permette di mostrare correttamente lo stato di caricamento, eventuali errori e i dati reali una volta disponibili.
Nella pratica si utilizzano tre stati: 
- isLoading (se la fetch è in corso)
- isError (se è avvenuto un errore nell’operazione)
- user (i dati ricevuti).
Tutta la logica di fetching viene gestita in una funzione asincrona chiamata al primo render via useEffect. 
I componenti vengono resi in base allo stato corrente della chiamata API.
*/

const ConditionalCompining = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState();

  /**
   * Funzione che richiama API e gestisce lo stato delle varie condizioni (caricamento, errore, dati ricevuti)
   */
  const getData = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await axios.get(url); // chiamata all'endpoint
      setUser(response.data); // aggiorno lo stato con i dati ricevuti
    } catch (error) {
      console.log(error);
      setIsError(true); // errore nella fetch
    }
    setIsLoading(false); // termina caricamento in ogni caso
  };

  /**
   * useEffect richiama la funzione getData solo al primo render
   */
  useEffect(() => {
    getData();
  }, []);

  // Rendering condizionale
  // Mostra caricamento se la fetch è in corso
  if (isLoading) {
    return <Loading />;
  }

  // Mostra errore se si verifica
  if (isError) {
    return <ErrorComponent />;
  }

  // Mostra dati una volta che sono disponibili e senza errori
  return (
    <article>
      <img src={user.avatar_url} alt={user.name}></img>
      <h3>{user.login}</h3>
    </article>
  );
};

// Componente di caricamento
const Loading = () => {
  return (
    <div>
      <h2>Loading....</h2>
    </div>
  );
};

// Componente di errore
const ErrorComponent = () => {
  return (
    <div>
      <h2> Sorry, there is an Error</h2>
    </div>
  );
};

export default ConditionalCompining;

/*
NOTE IMPORTANTI
- Utilizzare isLoading e isError permette una UX chiara e prevedibile: l’utente vede lo stato corrente del caricamento dati.
- La funzione di fetch aggiorna in modo isolato tutti gli stati necessari.
- useEffect con array [] assicura la chiamata una sola volta al montaggio del componente.
- Per gestire bene il flusso, aggiorna lo stato in modo sincrono all’inizio (loading) e in modo asincrono alla fine (data/error).
- I componenti Loading ed ErrorComponent sono separati per chiarezza e riuso.
*/
