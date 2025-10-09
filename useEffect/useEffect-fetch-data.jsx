import { useState, useEffect } from "react";
import axios from "axios";
const url = "https://api.github.com/users";

/*
Gestire fetch API in React richiede di avviare richieste asincrone (HTTP) in modo sicuro,
aggiornando lo stato quando arrivano i dati. Per evitare richieste ripetute a ogni re-render,
si usa useEffect con array di dipendenze vuoto [], in modo che la fetch sia eseguita solo al primo montaggio (render) del componente.
La libreria axios semplifica la sintassi della chiamata e la gestione delle promesse.
*/

const FetchComponent = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const response = await axios.get(url); // chiamata a endpoint pubblico
    setUsers(response.data); // aggiorno lo state con i dati ricevuti
  };

  // useEffect richiama getData solo al primo render, grazie all'array [] delle dipendenze
  useEffect(() => {
    getData();
  }, []);

  // La lista degli utenti viene visualizzata mappando l'array users con dati destrutturati
  return (
    <>
      <h1>Fetch Component</h1>
      <ul>
        {users.map((el) => {
          const { login, id, avatar_url: img, html_url } = el;
          return (
            <li key={id}>
              <img src={img} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}> Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FetchComponent;

/*
NOTE IMPORTANTI
- useEffect con [] lancia la fetch SOLO una volta al primo montaggio del componente (comportamento equivalente a componentDidMount).
- Attenzione a gestire lo stato d'attesa (loading), errori ed eventuali cancellazioni nei casi reali.
- Axios restituisce la risposta in response.data, che è l'array di utenti GitHub.
- Per ogni utente si usano chiavi univoche (id) per React e si mappano avatar, nome e link al profilo.
- Separare sempre la logica di chiamata API (funzione asincrona) dalla visualizzazione.
- Si consiglia best practice: non mettere direttamente la promise in useEffect, ma definire una funzione interna o esterna come qui.
*/